import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    console.log('Seeding database...');

    // Create an Admin user
    const adminPassword = await bcrypt.hash('admin123', 10);
    const admin = await prisma.user.upsert({
        where: { email: 'admin@ikiproperty.com' },
        update: {},
        create: {
            email: 'admin@ikiproperty.com',
            password: adminPassword,
            role: 'ADMIN',
            name: 'Super Admin',
        },
    });

    // Create a Demo Broker
    const brokerPassword = await bcrypt.hash('broker123', 10);
    const broker = await prisma.user.upsert({
        where: { email: 'broker@demo.com' },
        update: {},
        create: {
            email: 'broker@demo.com',
            password: brokerPassword,
            role: 'BROKER',
            name: 'Nguyen Van Sale',
            companyName: 'Tokyo Labor Export',
            idCardNumber: '012345678910',
            isVerified: true,
            referralCode: 'NGUYENSALE2025',
        },
    });

    // Create Properties
    const properties = [
        {
            title: 'Vinhomes Grand Park - The Beverly',
            description: 'Luxury apartment with park view in District 9, Ho Chi Minh City.',
            price: 3500000000, // 3.5 Billion VND
            location: 'District 9, HCMC',
            type: 'Apartment',
            images: ['https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=2670&auto=format&fit=crop'],
            legalStatus: 'Pink Book',
            expectedRoi: 6.5,
        },
        {
            title: 'Aqua City - Elite Villa',
            description: 'Riverside villa in Dong Nai, perfect for retirement or investment.',
            price: 12000000000, // 12 Billion VND
            location: 'Bien Hoa, Dong Nai',
            type: 'Villa',
            images: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop'],
            legalStatus: '50-year lease',
            expectedRoi: 8.2,
        },
        {
            title: 'Ocean Park 2 - Shophouse',
            description: 'Commercial shophouse in the new Mega City, Hung Yen.',
            price: 8500000000, // 8.5 Billion VND
            location: 'Van Giang, Hung Yen',
            type: 'Shophouse',
            images: ['https://images.unsplash.com/photo-1542314831-c6a4d14b162f?q=80&w=2690&auto=format&fit=crop'],
            legalStatus: 'Pink Book',
            expectedRoi: 10.5,
        }
    ];

    for (const p of properties) {
        await prisma.property.create({
            data: p
        });
    }

    console.log('Database seeded successfully.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
