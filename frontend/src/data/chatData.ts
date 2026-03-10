// IKI Chat data — inspired by Berty P2P messaging

export interface ChatRoom {
    id: string;
    name: string;
    description: string;
    emoji: string;
    category: "community" | "property" | "support";
    memberCount: number;
    online: number;
    lastMessage: string;
    lastMessageTime: string;
    pinned?: boolean;
}

export interface ChatMessage {
    id: string;
    roomId: string;
    sender: string;
    avatar: string;       // initials
    avatarColor: string;
    content: string;
    timestamp: string;
    isSystem?: boolean;
}

export const chatRooms: ChatRoom[] = [
    {
        id: "dat-nen-1-2-ty",
        name: "Đất nền 1-2 Tỷ 🔥",
        description: "Thảo luận về đất nền phân khúc 600 triệu - 2 tỷ VNĐ. Hot nhất 2026!",
        emoji: "🔥",
        category: "property",
        memberCount: 347,
        online: 23,
        lastMessage: "Lô C3 Long Thành vừa bán rồi, ai nhanh tay lô C5...",
        lastMessageTime: "2 phút trước",
        pinned: true,
    },
    {
        id: "cong-dong-xkld",
        name: "Cộng đồng XKLĐ Nhật-Hàn",
        description: "Kết nối kiều bào tại Nhật Bản & Hàn Quốc. Chia sẻ kinh nghiệm đầu tư về nước.",
        emoji: "🌏",
        category: "community",
        memberCount: 892,
        online: 56,
        lastMessage: "Anh chị ở Osaka có ai biết thủ tục ủy quyền mua đất không ạ?",
        lastMessageTime: "5 phút trước",
        pinned: true,
    },
    {
        id: "hoi-dap-phap-ly",
        name: "Hỏi đáp Pháp lý",
        description: "Tư vấn pháp lý miễn phí: sổ đỏ, hợp đồng, quy hoạch, tranh chấp.",
        emoji: "⚖️",
        category: "support",
        memberCount: 245,
        online: 12,
        lastMessage: "Đất chưa tách sổ thì nên mua không ạ?",
        lastMessageTime: "15 phút trước",
    },
    {
        id: "ai-dinh-gia",
        name: "AI Định giá & Phân tích",
        description: "Thảo luận kết quả AI, chia sẻ phân tích giá, xu hướng thị trường.",
        emoji: "🤖",
        category: "support",
        memberCount: 156,
        online: 8,
        lastMessage: "AI ước tính khu Hòa Vang tăng 20%, có hợp lý không?",
        lastMessageTime: "30 phút trước",
    },
    {
        id: "long-thanh-dong-nai",
        name: "Long Thành - Đồng Nai",
        description: "Thông tin, giá cả, quy hoạch khu vực Long Thành gần sân bay quốc tế.",
        emoji: "✈️",
        category: "property",
        memberCount: 534,
        online: 31,
        lastMessage: "Sân bay dự kiến khai thác cuối 2026, giá đất tăng chắc chắn",
        lastMessageTime: "1 giờ trước",
    },
    {
        id: "da-nang-hoa-vang",
        name: "Đà Nẵng - Hòa Vang",
        description: "Đất nền Hòa Vang, Đà Nẵng — khu vực mở rộng đô thị hot nhất miền Trung.",
        emoji: "🏖️",
        category: "property",
        memberCount: 289,
        online: 14,
        lastMessage: "Có ai biết lô 100m2 gần đường chính giá bao nhiêu không?",
        lastMessageTime: "2 giờ trước",
    },
    {
        id: "tokenized-bds",
        name: "Tokenized BĐS",
        description: "Blockchain, token hóa BĐS, sở hữu phân mảnh. Tương lai đầu tư từ 10 triệu.",
        emoji: "🪙",
        category: "community",
        memberCount: 178,
        online: 9,
        lastMessage: "Token mới IKI-C3 vừa release, yield 12%/năm",
        lastMessageTime: "3 giờ trước",
    },
];

// Seed messages per room
export const seedMessages: Record<string, ChatMessage[]> = {
    "dat-nen-1-2-ty": [
        {
            id: "m1",
            roomId: "dat-nen-1-2-ty",
            sender: "Hệ thống",
            avatar: "IK",
            avatarColor: "bg-gold-500 text-navy-900",
            content: "Chào mừng bạn đến phòng chat Đất nền 1-2 Tỷ! Nhớ tuân thủ quy tắc cộng đồng. 🔒 Tin nhắn được mã hóa end-to-end.",
            timestamp: "09:00",
            isSystem: true,
        },
        {
            id: "m2",
            roomId: "dat-nen-1-2-ty",
            sender: "Nguyễn Hoàng",
            avatar: "NH",
            avatarColor: "bg-blue-500 text-white",
            content: "Có ai quan tâm lô đất nền tại Long Thành, giá 890 triệu, 100m2 không ạ? Pháp lý sạch, sổ hồng riêng.",
            timestamp: "09:15",
        },
        {
            id: "m3",
            roomId: "dat-nen-1-2-ty",
            sender: "Trần Minh Tú",
            avatar: "TT",
            avatarColor: "bg-purple-500 text-white",
            content: "Mình đang ở Nhật, muốn mua đất về Việt Nam. Giá 890tr nghe hợp lý. Nhờ AI định giá thử xem thế nào",
            timestamp: "09:22",
        },
        {
            id: "m4",
            roomId: "dat-nen-1-2-ty",
            sender: "Lê Văn Đức",
            avatar: "LĐ",
            avatarColor: "bg-green-500 text-white",
            content: "Mình vừa dùng VIVA AI định giá khu đó, AI cho biết giá thị trường khoảng 8-12 triệu/m2, tức 800tr-1.2 tỷ cho 100m2. Giá 890tr là nằm trong khoảng hợp lý 👍",
            timestamp: "09:30",
        },
        {
            id: "m5",
            roomId: "dat-nen-1-2-ty",
            sender: "Phạm Thị Hoa",
            avatar: "PH",
            avatarColor: "bg-pink-500 text-white",
            content: "Lô C3 Long Thành vừa bán rồi, ai nhanh tay lô C5 nhé. Gần sân bay, hạ tầng đang làm, tiềm năng tăng giá rất cao 🚀",
            timestamp: "09:45",
        },
    ],
    "hoi-dap-phap-ly": [
        {
            id: "pl1",
            roomId: "hoi-dap-phap-ly",
            sender: "Hệ thống",
            avatar: "IK",
            avatarColor: "bg-gold-500 text-navy-900",
            content: "Phòng hỏi đáp Pháp lý. Mọi thắc mắc về sổ đỏ, HĐMB, thừa kế hay tín dụng sẽ được giải đáp bởi các Luật sư uy tín.",
            timestamp: "09:00",
            isSystem: true,
        },
        {
            id: "pl2",
            roomId: "hoi-dap-phap-ly",
            sender: "Trần Tuấn",
            avatar: "TT",
            avatarColor: "bg-blue-500 text-white",
            content: "Chào Admin, em đang làm việc tại Hàn Quốc, muốn ủy quyền cho vợ mua nhà nhưng bị vướng giấy tờ. Cho em hỏi thêm sổ chung chưa tách sổ thì có nên mua không ạ?",
            timestamp: "09:15",
        },
        {
            id: "pl3",
            roomId: "hoi-dap-phap-ly",
            sender: "LS. Kim Oanh (Luật Nguyễn)",
            avatar: "KO",
            avatarColor: "bg-gold-600 text-white font-bold ring-2 ring-gold-400",
            content: "Chào bạn. Đất chưa tách sổ tiềm ẩn rủi ro rất cao (Khó thanh khoản, tranh chấp). IKI Property luôn khuyên NĐT tránh sổ chung. Về ủy quyền mua đất khi ở nước ngoài, bạn có thể thực hiện tại ĐSQ Việt Nam tại Hàn Quốc, gửi hồ sơ về VN để Luật Nguyễn hỗ trợ hoàn tất thay bạn.",
            timestamp: "09:20",
        },
        {
            id: "pl4",
            roomId: "hoi-dap-phap-ly",
            sender: "Nguyễn Hải",
            avatar: "NH",
            avatarColor: "bg-indigo-500 text-white",
            content: "Dạ cho em hỏi thêm, em có hồ sơ vay vốn mua BĐS mà bị vướng thì Luật Nguyễn có xử lý được hồ sơ khó không ạ?",
            timestamp: "09:40",
        },
        {
            id: "pl5",
            roomId: "hoi-dap-phap-ly",
            sender: "LS. Kim Oanh (Luật Nguyễn)",
            avatar: "KO",
            avatarColor: "bg-gold-600 text-white font-bold ring-2 ring-gold-400",
            content: "Luật Nguyễn Group chuyên tháo gỡ các hồ sơ vay vốn dạng khó, giải quyết tranh chấp phức tạp và tái cấu trúc dòng vốn. Bạn yên tâm book lịch tư vấn qua link trực tiếp hoặc SĐT trên trang Đối tác của IKI nhé.",
            timestamp: "09:45",
        },
    ],
    "cong-dong-xkld": [
        {
            id: "x1",
            roomId: "cong-dong-xkld",
            sender: "Hệ thống",
            avatar: "IK",
            avatarColor: "bg-gold-500 text-navy-900",
            content: "Chào mừng đến cộng đồng XKLĐ Nhật-Hàn! Nơi kết nối kiều bào và chia sẻ kinh nghiệm đầu tư. 🌏",
            timestamp: "08:00",
            isSystem: true,
        },
        {
            id: "x2",
            roomId: "cong-dong-xkld",
            sender: "Đặng Quang (Tokyo)",
            avatar: "ĐQ",
            avatarColor: "bg-red-500 text-white",
            content: "Em ở Tokyo 5 năm rồi, tích được khoảng 1.2 tỷ. Nên mua đất nền vùng ven hay căn hộ giá rẻ ạ?",
            timestamp: "08:30",
        },
        {
            id: "x3",
            roomId: "cong-dong-xkld",
            sender: "Vũ Thị Lan (Seoul)",
            avatar: "VL",
            avatarColor: "bg-indigo-500 text-white",
            content: "Chị cũng vừa mua một lô đất nền Từ Sơn, Bắc Ninh 780 triệu. Gần khu công nghiệp, cho thuê xây trọ yield 14%/năm. Recommend!",
            timestamp: "08:45",
        },
        {
            id: "x4",
            roomId: "cong-dong-xkld",
            sender: "Nguyễn Thanh (Osaka)",
            avatar: "NT",
            avatarColor: "bg-teal-500 text-white",
            content: "Anh chị ở Osaka có ai biết thủ tục ủy quyền mua đất không ạ? Em muốn mua đất ở Hải Dương nhưng không về được.",
            timestamp: "09:10",
        },
        {
            id: "x5",
            roomId: "cong-dong-xkld",
            sender: "Admin IKI",
            avatar: "AI",
            avatarColor: "bg-gold-500 text-navy-900",
            content: "Bạn có thể ủy quyền tại ĐSQ Việt Nam ở Osaka. Xem hướng dẫn chi tiết tại mục Tin tức → \"Hướng dẫn pháp lý mua đất từ nước ngoài\" trên IKI Property nhé! 📋",
            timestamp: "09:20",
        },
    ],
};

// Default messages for rooms without seeded data
export const defaultMessages: ChatMessage[] = [
    {
        id: "d1",
        roomId: "default",
        sender: "Hệ thống",
        avatar: "IK",
        avatarColor: "bg-gold-500 text-navy-900",
        content: "Chào mừng bạn! Phòng chat đang được xây dựng. Hãy là người đầu tiên gửi tin nhắn! 🎉 Tin nhắn được mã hóa end-to-end.",
        timestamp: "10:00",
        isSystem: true,
    },
];

export function getMessagesForRoom(roomId: string): ChatMessage[] {
    return seedMessages[roomId] || defaultMessages.map((m) => ({ ...m, roomId }));
}
