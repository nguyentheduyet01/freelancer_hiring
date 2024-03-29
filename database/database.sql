USE [freelance_hiring]
/****** Object:  Table [dbo].[Account]    Script Date: 5/11/2023 5:48:20 PM ******/
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON
CREATE TABLE [dbo].[Account](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[Username] [varchar](50) NOT NULL,
	[Password] [varchar](50) NOT NULL,
	[role_id] [int] NULL,
 CONSTRAINT [PK_Account] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
/****** Object:  Table [dbo].[Category]    Script Date: 5/11/2023 5:48:20 PM ******/
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON
CREATE TABLE [dbo].[Category](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](100) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
/****** Object:  Table [dbo].[Category_post]    Script Date: 5/11/2023 5:48:20 PM ******/
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON
CREATE TABLE [dbo].[Category_post](
	[posts_id] [int] NULL,
	[Category_id] [int] NULL
) ON [PRIMARY]
/****** Object:  Table [dbo].[FileData]    Script Date: 5/11/2023 5:48:20 PM ******/
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON
CREATE TABLE [dbo].[FileData](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[title] [nvarchar](max) NULL,
	[link] [varchar](200) NULL,
	[file_name] [nvarchar](max) NULL,
	[created_at] [datetime] NULL,
	[user_id] [int] NULL,
	[type] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
/****** Object:  Table [dbo].[post_skill]    Script Date: 5/11/2023 5:48:20 PM ******/
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON
CREATE TABLE [dbo].[post_skill](
	[skill_id] [int] NULL,
	[post_id] [int] NULL
) ON [PRIMARY]
/****** Object:  Table [dbo].[Posts]    Script Date: 5/11/2023 5:48:20 PM ******/
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON
CREATE TABLE [dbo].[Posts](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[title] [nvarchar](max) NULL,
	[link_apply] [varchar](200) NULL,
	[descriptions] [nvarchar](max) NULL,
	[requirement] [nvarchar](max) NULL,
	[budget] [decimal](18, 0) NULL,
	[created_by] [int] NULL,
	[working_method] [int] NULL,
	[expired] [datetime] NULL,
	[status] [int] NULL,
	[created_at] [datetime] NULL,
	[payment_method] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
/****** Object:  Table [dbo].[Role]    Script Date: 5/11/2023 5:48:20 PM ******/
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON
CREATE TABLE [dbo].[Role](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
/****** Object:  Table [dbo].[Skill]    Script Date: 5/11/2023 5:48:20 PM ******/
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON
CREATE TABLE [dbo].[Skill](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nchar](100) NULL,
	[id_Category] [int] NULL,
 CONSTRAINT [PK_Skill] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
/****** Object:  Table [dbo].[user_post]    Script Date: 5/11/2023 5:48:20 PM ******/
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON
CREATE TABLE [dbo].[user_post](
	[salary] [decimal](18, 0) NULL,
	[created_at] [datetime] NULL,
	[user_id] [int] NULL,
	[post_id] [int] NULL,
	[cv_id] [int] NULL,
	[intend_time] [datetime2](7) NOT NULL,
	[suggestion] [nvarchar](max) NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
/****** Object:  Table [dbo].[user_skill]    Script Date: 5/11/2023 5:48:20 PM ******/
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON
CREATE TABLE [dbo].[user_skill](
	[id_user] [int] NULL,
	[id_skill] [int] NULL
) ON [PRIMARY]
/****** Object:  Table [dbo].[Users]    Script Date: 5/11/2023 5:48:20 PM ******/
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON
CREATE TABLE [dbo].[Users](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NULL,
	[gentle] [int] NULL,
	[age] [int] NULL,
	[phone] [varchar](20) NULL,
	[email] [varchar](50) NULL,
	[experince] [nvarchar](255) NULL,
	[account_id] [int] NULL,
	[address] [nvarchar](max) NULL,
	[cv_id] [int] NULL,
	[decription] [nvarchar](max) NULL,
	[introduce] [nvarchar](max) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
SET IDENTITY_INSERT [dbo].[Account] ON 

INSERT [dbo].[Account] ([id], [Username], [Password], [role_id]) VALUES (1, N'theduyet@gmail.com', N'theduyet138', NULL)
INSERT [dbo].[Account] ([id], [Username], [Password], [role_id]) VALUES (2, N'hlinh@gmail.com', N'hlinh1604', NULL)
INSERT [dbo].[Account] ([id], [Username], [Password], [role_id]) VALUES (4, N'leanh@gmail.com', N'leanh', NULL)
INSERT [dbo].[Account] ([id], [Username], [Password], [role_id]) VALUES (5, N'hangthu@gmail.com', N'thuhang', NULL)
INSERT [dbo].[Account] ([id], [Username], [Password], [role_id]) VALUES (7, N'canh@gmail.com', N'canh675', NULL)
INSERT [dbo].[Account] ([id], [Username], [Password], [role_id]) VALUES (8, N'thuphuong@gmail.com', N'thuphuongnguyen', NULL)
INSERT [dbo].[Account] ([id], [Username], [Password], [role_id]) VALUES (9, N'haanh@gmail.com', N'hânh2502', NULL)
INSERT [dbo].[Account] ([id], [Username], [Password], [role_id]) VALUES (10, N'anhtuan@gmail.com', N'anhtuan2502', NULL)
INSERT [dbo].[Account] ([id], [Username], [Password], [role_id]) VALUES (11, N'hoangyen@gmail.com', N'hoangyenmkt', NULL)
INSERT [dbo].[Account] ([id], [Username], [Password], [role_id]) VALUES (12, N'phuongdungnguyen@gmail.com', N'dungnguyen', NULL)
INSERT [dbo].[Account] ([id], [Username], [Password], [role_id]) VALUES (13, N'binhminh@gmail.com', N'binhminh88', NULL)
INSERT [dbo].[Account] ([id], [Username], [Password], [role_id]) VALUES (14, N'pmc@gmail.com', N'minhc', NULL)
INSERT [dbo].[Account] ([id], [Username], [Password], [role_id]) VALUES (15, N'hhiep@gmail.com.vn', N'hoanghiep', NULL)
INSERT [dbo].[Account] ([id], [Username], [Password], [role_id]) VALUES (17, N'tdung@gmail.com', N'tdung1801', NULL)
INSERT [dbo].[Account] ([id], [Username], [Password], [role_id]) VALUES (18, N'lequang@gmail.com', N'lequang99', NULL)
INSERT [dbo].[Account] ([id], [Username], [Password], [role_id]) VALUES (19, N'leminh@gmail.com', N'leminh656', NULL)
INSERT [dbo].[Account] ([id], [Username], [Password], [role_id]) VALUES (20, N'baoc@gmail.com', N'baocle', NULL)
SET IDENTITY_INSERT [dbo].[Account] OFF
SET IDENTITY_INSERT [dbo].[Category] ON 

INSERT [dbo].[Category] ([id], [name]) VALUES (1, N'Kinh doanh')
INSERT [dbo].[Category] ([id], [name]) VALUES (2, N'IT phần mềm ')
INSERT [dbo].[Category] ([id], [name]) VALUES (3, N'IT phần cứng')
INSERT [dbo].[Category] ([id], [name]) VALUES (4, N'Báo trí')
INSERT [dbo].[Category] ([id], [name]) VALUES (5, N'Bưu chính - viễn thông')
INSERT [dbo].[Category] ([id], [name]) VALUES (6, N'Bảo hiểm')
INSERT [dbo].[Category] ([id], [name]) VALUES (7, N'Bất động sản')
INSERT [dbo].[Category] ([id], [name]) VALUES (8, N'Chứng khoán')
INSERT [dbo].[Category] ([id], [name]) VALUES (9, N'Công nghệ cao')
INSERT [dbo].[Category] ([id], [name]) VALUES (10, N'Cơ khí/tự động hóa')
INSERT [dbo].[Category] ([id], [name]) VALUES (11, N'Du lịch')
INSERT [dbo].[Category] ([id], [name]) VALUES (12, N'Dệt may')
INSERT [dbo].[Category] ([id], [name]) VALUES (13, N'Dịch vụ khách hàng')
INSERT [dbo].[Category] ([id], [name]) VALUES (14, N'Điện tử viễn thông')
INSERT [dbo].[Category] ([id], [name]) VALUES (15, N'Điện tử điện lạnh')
INSERT [dbo].[Category] ([id], [name]) VALUES (16, N'Giáo dục')
INSERT [dbo].[Category] ([id], [name]) VALUES (17, N'Hóa học / sinh học')
INSERT [dbo].[Category] ([id], [name]) VALUES (18, N'Thời trang')
INSERT [dbo].[Category] ([id], [name]) VALUES (19, N'Thiết kế đồ họa')
INSERT [dbo].[Category] ([id], [name]) VALUES (20, N'Marketing')
INSERT [dbo].[Category] ([id], [name]) VALUES (21, N'Ngân hàng')
SET IDENTITY_INSERT [dbo].[Category] OFF
INSERT [dbo].[Category_post] ([posts_id], [Category_id]) VALUES (7, 3)
INSERT [dbo].[Category_post] ([posts_id], [Category_id]) VALUES (7, 4)
INSERT [dbo].[Category_post] ([posts_id], [Category_id]) VALUES (7, 2)
INSERT [dbo].[Category_post] ([posts_id], [Category_id]) VALUES (8, 2)
SET IDENTITY_INSERT [dbo].[Posts] ON 

INSERT [dbo].[Posts] ([id], [title], [link_apply], [descriptions], [requirement], [budget], [created_by], [working_method], [expired], [status], [created_at], [payment_method]) VALUES (7, N'Tuyển Dụng  Unity Developer', N'link', N'• Tham gia thiết kế, xây dựng và triển khai dự án Game trên nền tảng Unity cho Android và iOS. 
• Lên ý tưởng và giải pháp cho các tính năng trong game.
• Phối hợp với các thành viên trong team để vận hành và tối ưu game
• Đọc hiểu source code, nghiên cứu, thích ứng với các công nghệ mới.', N'• Tốt nghiệp các trường Đại học chuyên ngành Công nghệ thông tin, có kinh nghiệm làm việc 1 năm với vị trí tương đương
• Có kinh nghiệm phát triển RPG, Idle RPGs, and 3 MATCH PUZZLE
• Có kinh nghiệm xây dựng trò chơi với Unity trên Android / iOS, thành thạo ngôn ngữ lập trình C#
• Phát triển game đồ họa dựa trên Unity Engine+ Spine
• Có tư duy lập trình và tư duy hệ thống tốt, sáng tạo tốt.', CAST(20000000 AS Decimal(18, 0)), 2, 1, CAST(N'2023-05-12T00:00:00.000' AS DateTime), 1, CAST(N'2023-05-11T00:00:00.000' AS DateTime), 2)
INSERT [dbo].[Posts] ([id], [title], [link_apply], [descriptions], [requirement], [budget], [created_by], [working_method], [expired], [status], [created_at], [payment_method]) VALUES (8, N'Web Developer (.NET, PHP, Java)', N'link2', N'Tham gia các team Agile thiết kế, lập trình xây dựng các sản phẩm Cloud (CDN, Camera AI, Kubernetes...), hệ thống CRM, BOC... sử dụng ngôn ngữ lập trình như: .Net. Java , PHP, Android,…
Quản trị, nâng cấp, sửa lỗi các công cụ phần mềm đã lập trình và được phân công tiếp nhận
Thực hiện review code, tối ưu source, fix bug
Tham gia thiết kế CSDL, mô hình hệ thống CNTT trong Công ty', N'Tốt nghiệp Đại học chuyên ngành CNTT/chuyên ngành liên quan
Tiếng Anh cơ bản
Kiến thức về quy trình phát triển phần mềm, lập trình an toàn
Biết sử dụng tối thiểu 01 loại ngôn ngữ lập trình .Net. Java , PHP, Android,…
Biết sử dụng, làm việc với ít nhất 1 hệ thống quản trị CSDL (My SQL, SQL Server, Oracle, Mo, Maria)', CAST(13000000 AS Decimal(18, 0)), 2, 1, CAST(N'2023-06-12T00:00:00.000' AS DateTime), 1, CAST(N'2023-05-10T00:00:00.000' AS DateTime), 2)
INSERT [dbo].[Posts] ([id], [title], [link_apply], [descriptions], [requirement], [budget], [created_by], [working_method], [expired], [status], [created_at], [payment_method]) VALUES (9, N'Kế toán tổng hợp', NULL, N' Thu hồi và theo dõi công nợ
- Rà soát, kiểm tra đối chiếu chứng từ kế toán, kiểm tra bộ hồ sơ thuế, hóa đơn hợp lệ, hợp pháp, đầy đủ chứng từ theo quy định
- Hạch toán đúng quy định
- Lập báo cáo thuế định kỳ (BC VAT, TNCN), Báo cáo TC, quyết toán thuế TNCN... theo quy định
- Theo dõi tình hình nộp ngân sách, tồn đọng ngân sách, hoàn thuế của Công ty
- Cập nhật kịp thời những chính sách, quy định mới về luật thuế liên quan đến hoạt động sản xuất kinh doanh của Công ty', N'- Tốt nghiệp chuyên ngành Kế toán.
- Có ít nhất 3 năm kinh nghiệm trong lĩnh vực kế toán thuế
- Thành thạo kỹ năng tin học văn phòng: PowerPoint, Word, Excel.
- Chăm chỉ, có tinh thần trách nhiệm trong công việc.', CAST(200000 AS Decimal(18, 0)), 2, 1, CAST(N'2023-05-31T00:00:00.000' AS DateTime), 1, CAST(N'2023-05-01T00:00:00.000' AS DateTime), 2)
INSERT [dbo].[Posts] ([id], [title], [link_apply], [descriptions], [requirement], [budget], [created_by], [working_method], [expired], [status], [created_at], [payment_method]) VALUES (10, N'Content Marketing', NULL, N'"Quản lý các trang mạng xã hội của công ty;
Xây dựng content cho các chiến dịch truyền thông
Xây dựng content cùng đội quảng cáo;
Tìm hiểu insight khách hàng và chuẩn hóa quy trình sáng tạo nội dung;
Tham gia đóng góp ý tưởng trong các chiến dịch truyền thông;
Các công việc khác theo sự phân công của Leader."', N'"Đã có kinh nghiệm làm content cho ads;
Ưu tiên những bạn biết tìm hiểu về insight khách hàng;
Có gu thẩm mỹ tốt;
Sáng tạo và đề xuất ý tưởng tốt;
Tác phong nhanh nhẹn và xoay sở tốt trong công việc;
Làm việc tâm huyết và trách nhiệm, nhiệt tình với các công việc chung của team;
Trung thực và thẳng thắn."', CAST(13000000 AS Decimal(18, 0)), 3, 1, CAST(N'2023-06-15T00:00:00.000' AS DateTime), 1, CAST(N'2023-04-30T00:00:00.000' AS DateTime), 1)
INSERT [dbo].[Posts] ([id], [title], [link_apply], [descriptions], [requirement], [budget], [created_by], [working_method], [expired], [status], [created_at], [payment_method]) VALUES (11, N'Market Research', NULL, N'"Phối hợp với các phòng ban liên quan lê kế hoạch và triển khai hoạt động nghiên cứu khách hàng.
Lập bảng khảo sát, tiến hành khảo sát và phân tích các thông tin, dữ liệu về khách hàng, đối thủ và diễn biến thị trường.
Lập báo cáo về định hướng sản phẩm, nhu cầu khách hàng, tình hình thị trường.
Đề xuất thay các thay đổi về sản phẩm/ dịch vụ, định hướng tiếp cận khách hàng dựa trên kết quả khảo sát.
Làm việc với các bên doanh nghiệp đối tác cung cấp dịch vụ nghiên cứu thị trường để có các dữ liệu chính xác phục vụ cho công tác nghiên cứu – báo cáo."', N'"Có kinh nghiệm nghiên cứu thị trường.
Có kiến thức về các phương pháp thông kê và kinh nghiệm sử dụng các công cụ thống kê.
Có khả năng phân tích và tư duy phản biện tốt.
Kỹ lưỡng, chi tiết và cẩn thận.
Nhanh nhẹn, nhiệt tình trong công việc."', CAST(6000000 AS Decimal(18, 0)), 3, 1, CAST(N'2023-06-01T00:00:00.000' AS DateTime), 1, CAST(N'2023-05-06T00:00:00.000' AS DateTime), 1)
INSERT [dbo].[Posts] ([id], [title], [link_apply], [descriptions], [requirement], [budget], [created_by], [working_method], [expired], [status], [created_at], [payment_method]) VALUES (12, N'Tester', NULL, N'"Đọc hiểu các tài liệu proposal, specs, design, tham gia phân tích làm rõ yêu  cầu.
Tạo các tài liệu test (Test plan, Test case, Test script, Scenario….)
Thực hiện test và verify bug của team.
Làm báo cáo kiểm thử (test report) sau khi dự án kết thúc."', N'"Nắm rõ kiến thức cơ bản về các phương pháp, công cụ test.
Hiểu rõ các giai đoạn test trong một quy trình sản xuất phần mềm (theo mô hình waterfall, scrum, V-model…).
Sẵn sàng làm việc dưới áp lực cao, làm thêm giờ theo yêu cầu công việc
Có tư duy logic và tính tổ chức cao
Có tinh thần làm việc chăm chỉ, trách nhiệm và gắn bó lâu dài với công ty
Kỹ năng giao tiếp tốt, kỹ năng làm việc độc lập/ làm việc nhóm tốt."', CAST(12000000 AS Decimal(18, 0)), 2, 2, CAST(N'2023-06-10T00:00:00.000' AS DateTime), 1, CAST(N'2023-05-03T00:00:00.000' AS DateTime), 2)
INSERT [dbo].[Posts] ([id], [title], [link_apply], [descriptions], [requirement], [budget], [created_by], [working_method], [expired], [status], [created_at], [payment_method]) VALUES (13, N'Thiết kế đồ họa', NULL, N'"Lên kế hoạch concept & ý tưởng thực hiện sau khi nhận brief từ Account.
Triển khai sản xuất nội dung theo yêu cầu và điều chỉnh sau khi tiếp nhận phương án chỉnh sửa.
Phối hợp cùng team Performance để phân tích độ hiệu quả & cải thiện chất lượng sản phẩm
Thử nghiệm sản phẩm trên nhiều kênh truyền thông khác nhau.
Bảo đảm thiết kế chính xác theo tiêu chuẩn, đúng format/kích cỡ/màu sắc trước khi xuất bản hoặc gửi đến cơ sở sản xuất."', N'"Tốt nghiệp ngành marketing, truyền thông... trường ĐH, Cao đẳng.
Đã có kinh nghiệm trong ngành F&B là một lợi thế.
Đã từng làm việc tại agency và marketing team là một lợi thế.
Có kinh nghiệm 1 năm thiết kế đồ họa, sáng tạo.
Thành thạo Photoshop, Illustrator (có kinh nghiệm sử dụng Premiere Pro, AE là một lợi thế).
Khả năng tư duy hình ảnh tốt.
"', CAST(9000000 AS Decimal(18, 0)), 2, 1, CAST(N'2023-05-31T00:00:00.000' AS DateTime), 1, CAST(N'2023-05-04T00:00:00.000' AS DateTime), 1)
INSERT [dbo].[Posts] ([id], [title], [link_apply], [descriptions], [requirement], [budget], [created_by], [working_method], [expired], [status], [created_at], [payment_method]) VALUES (14, N'Giảng viên dạy tiếng anh', NULL, N'"Trực tiếp tham gia giảng dạy các khóa học IELTS ONLINE/OFFLINE theo lộ trình IELTS 5+, IELTS 6+, IELTS 7+ dựa vào giáo trình & phương pháp học có sẵn.
Thời gian 1 buổi học: 2:00 hoặc 2:30 (tùy vào từng khóa học) 
Đối tượng giảng dạy: học sinh/sinh viên & người đi làm.
2. Đảm bảo công tác giảng dạy theo yêu cầu của Phòng Đào tạo (thời gian/chất lượng/các trang thiết bị hỗ trợ giảng dạy ... )
3. Tham gia các hoạt động đào tạo workshop; các hoạt động nội bộ kết nối - ại khóa nhằm mục đích chia sẻ và truyền thông hình ảnh cá nhân và công ty đến học viên, khách hàng.
4. Chăm sóc và hỗ trợ học viên trong suốt quá trình học tập (Chấm điểm - chữa video luyện nói cho học viên...)
5. Tham gia đóng góp ý kiến, tối ưu hoá chương trình, nội dung học phù hợp với học viên.
6. Cập nhật, báo cáo công việc theo quy định & khi được yêu cầu."', N'"1.  Độ tuổi từ 20 - 30 tuổi; Yêu thích công việc giảng dạy tiếng Anh, Tận tâm - Trách nhiệm - Ham học hỏi. 
2. Chứng chỉ IELTS từ 8.0 trở lên (không kỹ năng nào dưới 7.0) có hiệu lực trong 2 năm gần nhất.
3. Kỹ năng lắng nghe, giao tiếp và truyền đạt tốt.
4. Kỹ năng sử dụng tin học văn phòng như Words, Excel, PPT…
* Ưu tiên:
Ứng viên có chứng chỉ giảng dạy như: TESOL – CELTA – Chứng chỉ nghiệp vụ Sư phạm.
Điểm IELTS Speaking/Writing 7.5 trở lên.
Đã có kinh nghiệm giảng dạy tiếng anh giao tiếp hoặc IELTS là một lợi thế."', CAST(16000000 AS Decimal(18, 0)), 4, 2, CAST(N'2023-06-18T00:00:00.000' AS DateTime), 1, CAST(N'2023-05-06T00:00:00.000' AS DateTime), 1)
INSERT [dbo].[Posts] ([id], [title], [link_apply], [descriptions], [requirement], [budget], [created_by], [working_method], [expired], [status], [created_at], [payment_method]) VALUES (15, N'KỸ SƯ DỊCH VỤ BẢO TRÌ, SỬA CHỮA (CHILLER, AHU, FCU)/AP SERVICE ENGINEER', NULL, N'"- Kiểm tra, sửa chữa bảo trì các sản phẩm ứng dụng Applied như Chiller, AHU, FCU và các thiết bị đi kèm hệ thống bao gồm nhưng không giới hạn như bơm nước, tháp giải nhiệt trong các khu vực nhà máy, tòa nhà, khu thương mại, kho bãi;
- Tư vấn, giải thích cho khách hàng về các vấn đề kỹ thuật liên quan đến sản phầm Applied;
- Cập nhật trạng thái công việc và làm báo cáo sau khi hoàn thành công việc kiểm tra, bảo trì, sửa chữa;
- Làm việc với nhà máy và các bộ phận liên quan để giải quyết các vấn đề kỹ thuật của sản phẩm Applied;
- Thực hiện các công việc khác có liên quan theo yêu cầu."', N'"- Tốt nghiệp từ các trường Đại học kỹ thuật (chuyên ngành Nhiệt lạnh là ưu thế);
- Thành thạo tin học văn phòng;
- Kỹ năng giao tiếp tiếng Anh tốt (là lợi thế);
- Có thể làm việc ài giờ hoặc tham gia vào các chuyến đi công tác dài ngày trong nước và nước ài;
- Chịu khó, có tinh thần học hỏi, trách nhiệm, chú trọng kết quả và hợp tác trong công việc;
- Có khả năng làm việc độc lập và làm việc nhóm."', CAST(21000000 AS Decimal(18, 0)), 5, 2, CAST(N'2023-07-31T00:00:00.000' AS DateTime), 1, CAST(N'2023-05-07T00:00:00.000' AS DateTime), 1)
INSERT [dbo].[Posts] ([id], [title], [link_apply], [descriptions], [requirement], [budget], [created_by], [working_method], [expired], [status], [created_at], [payment_method]) VALUES (16, N'Phân tích Nghiệp vụ (Business Analyst)', NULL, N'"Phân tích thiết kế nghiệp vụ các hệ thống ứng dụng/kênh giao tiếp với khách hàng và nội bộ ngân hàng
Khảo sát và phân tích các sản phẩm trên thị trường và tham khảo các sản phẩm tương đồng trên thế giới để nắm được các điểm mạnh, điểm yếu, điểm mới về UI/UX nhằm đề xuất cải tiến các sản phẩm công nghệ số của ngân hàng, tối ưu hóa giao diện và trải nghiệm người dùng.
Trực tiếp tham gia các dự án Chuyển đổi số như dự án thiết kế các hành trình trải nghiệm và giao diện mới cho sản phẩm số của Ngân hàng, …
Tiếp nhận và xử lý các yêu cầu của các phòng ban khác trong hệ thống
Các công việc khác theo sự phân công của cán bộ quản lý"', N'"Tốt nghiệp Đại học/ Cao đẳng chuyên ngành công nghệ thông tin hoặc các lĩnh vực kỹ thuật.
Có kiến thức tốt về IT, hiểu được thiết kế kỹ thuật và các thông số kỹ thuật, hệ thống ứng dụng phần mềm, các ngôn ngữ lập trình.
Có kinh nghiệm tham gia phân tích, thiết kế xây dựng tài liệu cho các dự án ít nhất 2 năm ở vị trí tương đương
Khả năng giao tiếp hiệu quả với nhóm nội bộ và khách hàng bên ài để cung cấp các yêu cầu chức năng.
Ưu tiên ứng viên có kinh nghiệm làm dự án về lĩnh vực tài chính ngân hàng, bảo hiểm
Tiếng Anh giao tiếp tốt là lợi thế"', CAST(14000000 AS Decimal(18, 0)), 2, 2, CAST(N'2023-06-30T00:00:00.000' AS DateTime), 1, CAST(N'2023-04-28T00:00:00.000' AS DateTime), 1)
SET IDENTITY_INSERT [dbo].[Posts] OFF
SET IDENTITY_INSERT [dbo].[Role] ON 

INSERT [dbo].[Role] ([id], [name]) VALUES (1, N'user')
INSERT [dbo].[Role] ([id], [name]) VALUES (2, N'user VIP')
INSERT [dbo].[Role] ([id], [name]) VALUES (3, N'admin')
INSERT [dbo].[Role] ([id], [name]) VALUES (4, N'agent')
SET IDENTITY_INSERT [dbo].[Role] OFF
SET IDENTITY_INSERT [dbo].[Skill] ON 

INSERT [dbo].[Skill] ([id], [name], [id_Category]) VALUES (1, N'Backend                                                                                             ', 2)
INSERT [dbo].[Skill] ([id], [name], [id_Category]) VALUES (2, N'IT phần cứng                                                                                        ', 3)
INSERT [dbo].[Skill] ([id], [name], [id_Category]) VALUES (3, N'Backend C#                                                                                          ', 2)
INSERT [dbo].[Skill] ([id], [name], [id_Category]) VALUES (4, N'Backend Java                                                                                        ', 2)
INSERT [dbo].[Skill] ([id], [name], [id_Category]) VALUES (5, N'Frontend Angular                                                                                    ', 2)
INSERT [dbo].[Skill] ([id], [name], [id_Category]) VALUES (6, N'Frontend ReactJS                                                                                    ', 2)
INSERT [dbo].[Skill] ([id], [name], [id_Category]) VALUES (7, N'Cộng tác viên bán hàng                                                                              ', 1)
INSERT [dbo].[Skill] ([id], [name], [id_Category]) VALUES (8, N'Tư vấn bán hàng                                                                                     ', 1)
INSERT [dbo].[Skill] ([id], [name], [id_Category]) VALUES (9, N'Sale                                                                                                ', 1)
INSERT [dbo].[Skill] ([id], [name], [id_Category]) VALUES (10, N'Email Marketing                                                                                     ', 20)
INSERT [dbo].[Skill] ([id], [name], [id_Category]) VALUES (11, N'Tổ chức sự kiện                                                                                     ', 20)
INSERT [dbo].[Skill] ([id], [name], [id_Category]) VALUES (12, N'Quảng cáo facebook                                                                                  ', 20)
INSERT [dbo].[Skill] ([id], [name], [id_Category]) VALUES (13, N'Việc marketing khác                                                                                 ', 20)
INSERT [dbo].[Skill] ([id], [name], [id_Category]) VALUES (14, N'Lập trình web                                                                                       ', 2)
INSERT [dbo].[Skill] ([id], [name], [id_Category]) VALUES (15, N'Lập trình nhúng                                                                                     ', 2)
INSERT [dbo].[Skill] ([id], [name], [id_Category]) VALUES (16, N'Lập trình phần mềm                                                                                  ', 2)
INSERT [dbo].[Skill] ([id], [name], [id_Category]) VALUES (17, N'Thiết kế mạch                                                                                       ', 3)
INSERT [dbo].[Skill] ([id], [name], [id_Category]) VALUES (18, N'Sửa máy tính                                                                                        ', 3)
SET IDENTITY_INSERT [dbo].[Skill] OFF
INSERT [dbo].[user_post] ([salary], [created_at], [user_id], [post_id], [cv_id], [intend_time], [suggestion]) VALUES (CAST(20000000 AS Decimal(18, 0)), CAST(N'2023-05-11T00:00:00.000' AS DateTime), 2, 7, NULL, CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), NULL)
INSERT [dbo].[user_skill] ([id_user], [id_skill]) VALUES (2, 1)
INSERT [dbo].[user_skill] ([id_user], [id_skill]) VALUES (2, 2)
INSERT [dbo].[user_skill] ([id_user], [id_skill]) VALUES (2, 4)
INSERT [dbo].[user_skill] ([id_user], [id_skill]) VALUES (2, 5)
INSERT [dbo].[user_skill] ([id_user], [id_skill]) VALUES (3, 2)
SET IDENTITY_INSERT [dbo].[Users] ON 

INSERT [dbo].[Users] ([id], [name], [gentle], [age], [phone], [email], [experince], [account_id], [address], [cv_id], [decription], [introduce]) VALUES (2, N'Thế Duyệt', 1, 23, N'0326807356', N'theduyet@gmail.com', N'1 năm ', 1, N'Hà Nội', NULL, NULL, NULL)
INSERT [dbo].[Users] ([id], [name], [gentle], [age], [phone], [email], [experince], [account_id], [address], [cv_id], [decription], [introduce]) VALUES (3, N'Hoàng Linh', 0, 22, N'0421386931', N'hinh@gmail.com', N'2 năm kinh nghiệm content marketing', 2, N'Hà Nội', NULL, NULL, NULL)
INSERT [dbo].[Users] ([id], [name], [gentle], [age], [phone], [email], [experince], [account_id], [address], [cv_id], [decription], [introduce]) VALUES (5, N'Lê Anh', 0, 20, N'0234582891', N'leanh@gmail.com', N'2 năm kinh nghiệm kế toán tổng hợp', 4, N'Quận 1, TP.Hồ Chí Minh', NULL, NULL, NULL)
INSERT [dbo].[Users] ([id], [name], [gentle], [age], [phone], [email], [experince], [account_id], [address], [cv_id], [decription], [introduce]) VALUES (6, N'Thu Hằng', 0, 22, N'0985472812', N'thuhang@gmail.com', N'6 tháng kinh nghiệm kiểm thử phần mềm', 5, N'Hà Đông, Hà Nội', NULL, NULL, NULL)
SET IDENTITY_INSERT [dbo].[Users] OFF
ALTER TABLE [dbo].[user_post] ADD  DEFAULT ('0001-01-01T00:00:00.0000000') FOR [intend_time]
ALTER TABLE [dbo].[Account]  WITH CHECK ADD  CONSTRAINT [FK_Account_role] FOREIGN KEY([role_id])
REFERENCES [dbo].[Role] ([id])
ALTER TABLE [dbo].[Account] CHECK CONSTRAINT [FK_Account_role]
ALTER TABLE [dbo].[Category_post]  WITH CHECK ADD  CONSTRAINT [FK_Category_post_Category] FOREIGN KEY([Category_id])
REFERENCES [dbo].[Category] ([id])
ALTER TABLE [dbo].[Category_post] CHECK CONSTRAINT [FK_Category_post_Category]
ALTER TABLE [dbo].[Category_post]  WITH CHECK ADD  CONSTRAINT [FK_Category_post_Posts] FOREIGN KEY([posts_id])
REFERENCES [dbo].[Posts] ([id])
ALTER TABLE [dbo].[Category_post] CHECK CONSTRAINT [FK_Category_post_Posts]
ALTER TABLE [dbo].[FileData]  WITH CHECK ADD  CONSTRAINT [FK_File_Users] FOREIGN KEY([user_id])
REFERENCES [dbo].[Users] ([id])
ALTER TABLE [dbo].[FileData] CHECK CONSTRAINT [FK_File_Users]
ALTER TABLE [dbo].[post_skill]  WITH CHECK ADD  CONSTRAINT [FK_post_skill_Posts] FOREIGN KEY([post_id])
REFERENCES [dbo].[Posts] ([id])
ALTER TABLE [dbo].[post_skill] CHECK CONSTRAINT [FK_post_skill_Posts]
ALTER TABLE [dbo].[post_skill]  WITH CHECK ADD  CONSTRAINT [FK_post_skill_Skill] FOREIGN KEY([skill_id])
REFERENCES [dbo].[Skill] ([id])
ALTER TABLE [dbo].[post_skill] CHECK CONSTRAINT [FK_post_skill_Skill]
ALTER TABLE [dbo].[Skill]  WITH CHECK ADD  CONSTRAINT [FK_Skill_Category] FOREIGN KEY([id_Category])
REFERENCES [dbo].[Category] ([id])
ALTER TABLE [dbo].[Skill] CHECK CONSTRAINT [FK_Skill_Category]
ALTER TABLE [dbo].[user_post]  WITH CHECK ADD  CONSTRAINT [FK_user_post_Posts] FOREIGN KEY([post_id])
REFERENCES [dbo].[Posts] ([id])
ALTER TABLE [dbo].[user_post] CHECK CONSTRAINT [FK_user_post_Posts]
ALTER TABLE [dbo].[user_post]  WITH CHECK ADD  CONSTRAINT [FK_user_post_Users] FOREIGN KEY([user_id])
REFERENCES [dbo].[Users] ([id])
ALTER TABLE [dbo].[user_post] CHECK CONSTRAINT [FK_user_post_Users]
ALTER TABLE [dbo].[user_skill]  WITH CHECK ADD  CONSTRAINT [FK_user_skill_Skill] FOREIGN KEY([id_skill])
REFERENCES [dbo].[Skill] ([id])
ALTER TABLE [dbo].[user_skill] CHECK CONSTRAINT [FK_user_skill_Skill]
ALTER TABLE [dbo].[user_skill]  WITH CHECK ADD  CONSTRAINT [FK_user_skill_Users] FOREIGN KEY([id_user])
REFERENCES [dbo].[Users] ([id])
ALTER TABLE [dbo].[user_skill] CHECK CONSTRAINT [FK_user_skill_Users]
ALTER TABLE [dbo].[Users]  WITH CHECK ADD  CONSTRAINT [FK_Users_Account] FOREIGN KEY([account_id])
REFERENCES [dbo].[Account] ([id])
ALTER TABLE [dbo].[Users] CHECK CONSTRAINT [FK_Users_Account]
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'1:image, 2: cv' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'FileData', @level2type=N'COLUMN',@level2name=N'type'
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'1:bán thời gian, 2: toàn thời gian, 3: theo dự án' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Posts', @level2type=N'COLUMN',@level2name=N'working_method'
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'1: theo dự án, 2: theo tháng' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Posts', @level2type=N'COLUMN',@level2name=N'payment_method'
