USE [master]
GO
/****** Object:  Database [freelance_hiring]    Script Date: 4/27/2023 11:12:17 PM ******/
CREATE DATABASE [freelance_hiring]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'freelance_hiring', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL11.SQLEXPRESS\MSSQL\DATA\freelance_hiring.mdf' , SIZE = 3136KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'freelance_hiring_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL11.SQLEXPRESS\MSSQL\DATA\freelance_hiring_log.ldf' , SIZE = 832KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [freelance_hiring] SET COMPATIBILITY_LEVEL = 110
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [freelance_hiring].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [freelance_hiring] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [freelance_hiring] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [freelance_hiring] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [freelance_hiring] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [freelance_hiring] SET ARITHABORT OFF 
GO
ALTER DATABASE [freelance_hiring] SET AUTO_CLOSE ON 
GO
ALTER DATABASE [freelance_hiring] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [freelance_hiring] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [freelance_hiring] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [freelance_hiring] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [freelance_hiring] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [freelance_hiring] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [freelance_hiring] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [freelance_hiring] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [freelance_hiring] SET  ENABLE_BROKER 
GO
ALTER DATABASE [freelance_hiring] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [freelance_hiring] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [freelance_hiring] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [freelance_hiring] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [freelance_hiring] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [freelance_hiring] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [freelance_hiring] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [freelance_hiring] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [freelance_hiring] SET  MULTI_USER 
GO
ALTER DATABASE [freelance_hiring] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [freelance_hiring] SET DB_CHAINING OFF 
GO
ALTER DATABASE [freelance_hiring] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [freelance_hiring] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
USE [freelance_hiring]
GO
/****** Object:  Table [dbo].[Account]    Script Date: 4/27/2023 11:12:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
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
GO
/****** Object:  Table [dbo].[Category]    Script Date: 4/27/2023 11:12:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Category](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](100) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CV]    Script Date: 4/27/2023 11:12:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CV](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[title] [nvarchar](max) NULL,
	[link] [varchar](200) NULL,
	[cv_name] [nvarchar](max) NULL,
	[created_at] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Image]    Script Date: 4/27/2023 11:12:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Image](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[link] [varchar](100) NULL,
	[namefile] [varchar](100) NULL,
	[userId] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Posts]    Script Date: 4/27/2023 11:12:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Posts](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[title] [nvarchar](max) NULL,
	[link_apply] [varchar](200) NULL,
	[descriptions] [nvarchar](max) NULL,
	[requirement] [nvarchar](max) NULL,
	[budget] [decimal](18, 0) NULL,
	[created_by] [int] NULL,
	[updated_by] [int] NULL,
	[expired] [datetime] NULL,
	[status] [int] NULL,
	[category_id] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Role]    Script Date: 4/27/2023 11:12:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Role](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Skill]    Script Date: 4/27/2023 11:12:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Skill](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nchar](100) NULL,
	[id_category] [int] NULL,
 CONSTRAINT [PK_Skill] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[user_post]    Script Date: 4/27/2023 11:12:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[user_post](
	[salary] [decimal](18, 0) NULL,
	[created_at] [datetime] NULL,
	[user_id] [int] NULL,
	[post_id] [int] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[user_skill]    Script Date: 4/27/2023 11:12:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[user_skill](
	[id_user] [int] NULL,
	[id_skill] [int] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 4/27/2023 11:12:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NULL,
	[gentle] [int] NULL,
	[age] [int] NULL,
	[phone] [varchar](20) NULL,
	[email] [varchar](50) NULL,
	[experince] [nvarchar](255) NULL,
	[account_id] [int] NULL,
	[cv_id] [int] NULL,
	[address] [nvarchar](max) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Account] ON 

INSERT [dbo].[Account] ([id], [Username], [Password], [role_id]) VALUES (1, N'theduyet@gmail.com', N'theduyet138', NULL)
INSERT [dbo].[Account] ([id], [Username], [Password], [role_id]) VALUES (2, N'hlinh@gmail.com', N'hlinh1604', NULL)
INSERT [dbo].[Account] ([id], [Username], [Password], [role_id]) VALUES (4, N'leanh@gmail.com', N'leanh', NULL)
INSERT [dbo].[Account] ([id], [Username], [Password], [role_id]) VALUES (5, N'hangthu@gmail.com', N'thuhang', NULL)
INSERT [dbo].[Account] ([id], [Username], [Password], [role_id]) VALUES (7, N'ngocanh@gmail.com', N'ngocanh675', NULL)
INSERT [dbo].[Account] ([id], [Username], [Password], [role_id]) VALUES (8, N'thuphuong@gmail.com', N'thuphuongnguyen', NULL)
INSERT [dbo].[Account] ([id], [Username], [Password], [role_id]) VALUES (9, N'haanh@gmail.com', N'hânh2502', NULL)
INSERT [dbo].[Account] ([id], [Username], [Password], [role_id]) VALUES (10, N'anhtuan@gmail.com', N'anhtuan2502', NULL)
INSERT [dbo].[Account] ([id], [Username], [Password], [role_id]) VALUES (11, N'hoangyen@gmail.com', N'hoangyenmkt', NULL)
INSERT [dbo].[Account] ([id], [Username], [Password], [role_id]) VALUES (12, N'phuongdungnguyen@gmail.com', N'dungnguyen', NULL)
INSERT [dbo].[Account] ([id], [Username], [Password], [role_id]) VALUES (13, N'binhminh@gmail.com', N'binhminh88', NULL)
INSERT [dbo].[Account] ([id], [Username], [Password], [role_id]) VALUES (14, N'pmngoc@gmail.com', N'minhngoc', NULL)
INSERT [dbo].[Account] ([id], [Username], [Password], [role_id]) VALUES (15, N'hhiep@gmail.com.vn', N'hoanghiep', NULL)
INSERT [dbo].[Account] ([id], [Username], [Password], [role_id]) VALUES (17, N'tdung@gmail.com', N'tdung1801', NULL)
INSERT [dbo].[Account] ([id], [Username], [Password], [role_id]) VALUES (18, N'lequang@gmail.com', N'lequang99', NULL)
INSERT [dbo].[Account] ([id], [Username], [Password], [role_id]) VALUES (19, N'leminh@gmail.com', N'leminh656', NULL)
INSERT [dbo].[Account] ([id], [Username], [Password], [role_id]) VALUES (20, N'baongoc@gmail.com', N'baongocle', NULL)
SET IDENTITY_INSERT [dbo].[Account] OFF
GO
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
GO
SET IDENTITY_INSERT [dbo].[Posts] ON 

INSERT [dbo].[Posts] ([id], [title], [link_apply], [descriptions], [requirement], [budget], [created_by], [updated_by], [expired], [status], [category_id]) VALUES (1, N'Tuyển Dụng  Unity Developer', NULL, N'• Tham gia thiết kế, xây dựng và triển khai dự án Game trên nền tảng Unity cho Android và iOS. 
• Lên ý tưởng và giải pháp cho các tính năng trong game.
• Phối hợp với các thành viên trong team để vận hành và tối ưu game
• Đọc hiểu source code, nghiên cứu, thích ứng với các công nghệ mới.', N'• Tốt nghiệp các trường Đại học chuyên ngành Công nghệ thông tin, có kinh nghiệm làm việc 1 năm với vị trí tương đương
• Có kinh nghiệm phát triển RPG, Idle RPGs, and 3 MATCH PUZZLE
• Có kinh nghiệm xây dựng trò chơi với Unity trên Android / iOS, thành thạo ngôn ngữ lập trình C#
• Phát triển game đồ họa dựa trên Unity Engine+ Spine
• Có tư duy lập trình và tư duy hệ thống tốt, sáng tạo tốt.', CAST(200000 AS Decimal(18, 0)), 1, NULL, CAST(N'2023-05-10T00:00:00.000' AS DateTime), 1, NULL)
INSERT [dbo].[Posts] ([id], [title], [link_apply], [descriptions], [requirement], [budget], [created_by], [updated_by], [expired], [status], [category_id]) VALUES (2, N'Web Developer (.NET, PHP, Java)', NULL, N'Tham gia các team Agile thiết kế, lập trình xây dựng các sản phẩm Cloud (CDN, Camera AI, Kubernetes...), hệ thống CRM, BOC... sử dụng ngôn ngữ lập trình như: .Net. Java , PHP, Android,…
Quản trị, nâng cấp, sửa lỗi các công cụ phần mềm đã lập trình và được phân công tiếp nhận
Thực hiện review code, tối ưu source, fix bug
Tham gia thiết kế CSDL, mô hình hệ thống CNTT trong Công ty', N'Tốt nghiệp Đại học chuyên ngành CNTT/chuyên ngành liên quan
Tiếng Anh cơ bản
Kiến thức về quy trình phát triển phần mềm, lập trình an toàn
Biết sử dụng tối thiểu 01 loại ngôn ngữ lập trình .Net. Java , PHP, Android,…
Biết sử dụng, làm việc với ít nhất 1 hệ thống quản trị CSDL (My SQL, SQL Server, Oracle, Mongo, Maria)', CAST(3000000 AS Decimal(18, 0)), NULL, NULL, NULL, 1, NULL)
INSERT [dbo].[Posts] ([id], [title], [link_apply], [descriptions], [requirement], [budget], [created_by], [updated_by], [expired], [status], [category_id]) VALUES (3, N'Kế toán tổng hợp', NULL, N' Thu hồi và theo dõi công nợ
- Rà soát, kiểm tra đối chiếu chứng từ kế toán, kiểm tra bộ hồ sơ thuế, hóa đơn hợp lệ, hợp pháp, đầy đủ chứng từ theo quy định
- Hạch toán đúng quy định
- Lập báo cáo thuế định kỳ (BC VAT, TNCN), Báo cáo TC, quyết toán thuế TNCN... theo quy định
- Theo dõi tình hình nộp ngân sách, tồn đọng ngân sách, hoàn thuế của Công ty
- Cập nhật kịp thời những chính sách, quy định mới về luật thuế liên quan đến hoạt động sản xuất kinh doanh của Công ty', N'- Tốt nghiệp chuyên ngành Kế toán.
- Có ít nhất 3 năm kinh nghiệm trong lĩnh vực kế toán thuế
- Thành thạo kỹ năng tin học văn phòng: PowerPoint, Word, Excel.
- Chăm chỉ, có tinh thần trách nhiệm trong công việc.', CAST(12000000 AS Decimal(18, 0)), NULL, NULL, NULL, 1, NULL)
SET IDENTITY_INSERT [dbo].[Posts] OFF
GO
SET IDENTITY_INSERT [dbo].[Role] ON 

INSERT [dbo].[Role] ([id], [name]) VALUES (1, N'user')
INSERT [dbo].[Role] ([id], [name]) VALUES (2, N'user VIP')
INSERT [dbo].[Role] ([id], [name]) VALUES (3, N'admin')
INSERT [dbo].[Role] ([id], [name]) VALUES (4, N'agent')
SET IDENTITY_INSERT [dbo].[Role] OFF
GO
SET IDENTITY_INSERT [dbo].[Users] ON 

INSERT [dbo].[Users] ([id], [name], [gentle], [age], [phone], [email], [experince], [account_id], [cv_id], [address]) VALUES (2, N'Thế Duyệt', 1, 23, N'0326807356', N'theduyet@gmail.com', N'1 năm ', 1, NULL, N'Hà Nội')
INSERT [dbo].[Users] ([id], [name], [gentle], [age], [phone], [email], [experince], [account_id], [cv_id], [address]) VALUES (3, N'Hoàng Linh', 0, 22, N'0421386931', N'hinh@gmail.com', N'2 năm kinh nghiệm content marketing', 2, NULL, N'Hà Nội')
INSERT [dbo].[Users] ([id], [name], [gentle], [age], [phone], [email], [experince], [account_id], [cv_id], [address]) VALUES (5, N'Lê Anh', 0, 20, N'0234582891', N'leanh@gmail.com', N'2 năm kinh nghiệm kế toán tổng hợp', 4, NULL, N'Quận 1, TP.Hồ Chí Minh')
INSERT [dbo].[Users] ([id], [name], [gentle], [age], [phone], [email], [experince], [account_id], [cv_id], [address]) VALUES (6, N'Thu Hằng', 0, 22, N'0985472812', N'thuhang@gmail.com', N'6 tháng kinh nghiệm kiểm thử phần mềm', 5, NULL, N'Hà Đông, Hà Nội')
SET IDENTITY_INSERT [dbo].[Users] OFF
GO
ALTER TABLE [dbo].[Account]  WITH CHECK ADD  CONSTRAINT [FK_Account_role] FOREIGN KEY([role_id])
REFERENCES [dbo].[Role] ([id])
GO
ALTER TABLE [dbo].[Account] CHECK CONSTRAINT [FK_Account_role]
GO
ALTER TABLE [dbo].[Image]  WITH CHECK ADD  CONSTRAINT [FK_images_Users] FOREIGN KEY([userId])
REFERENCES [dbo].[Users] ([id])
GO
ALTER TABLE [dbo].[Image] CHECK CONSTRAINT [FK_images_Users]
GO
ALTER TABLE [dbo].[Posts]  WITH CHECK ADD  CONSTRAINT [FK_Posts_Category] FOREIGN KEY([category_id])
REFERENCES [dbo].[Category] ([id])
GO
ALTER TABLE [dbo].[Posts] CHECK CONSTRAINT [FK_Posts_Category]
GO
ALTER TABLE [dbo].[Skill]  WITH CHECK ADD  CONSTRAINT [FK_Skill_Category] FOREIGN KEY([id_category])
REFERENCES [dbo].[Category] ([id])
GO
ALTER TABLE [dbo].[Skill] CHECK CONSTRAINT [FK_Skill_Category]
GO
ALTER TABLE [dbo].[user_post]  WITH CHECK ADD  CONSTRAINT [FK_user_post_Posts] FOREIGN KEY([post_id])
REFERENCES [dbo].[Posts] ([id])
GO
ALTER TABLE [dbo].[user_post] CHECK CONSTRAINT [FK_user_post_Posts]
GO
ALTER TABLE [dbo].[user_post]  WITH CHECK ADD  CONSTRAINT [FK_user_post_Users] FOREIGN KEY([user_id])
REFERENCES [dbo].[Users] ([id])
GO
ALTER TABLE [dbo].[user_post] CHECK CONSTRAINT [FK_user_post_Users]
GO
ALTER TABLE [dbo].[user_skill]  WITH CHECK ADD  CONSTRAINT [FK_user_skill_Skill] FOREIGN KEY([id_skill])
REFERENCES [dbo].[Skill] ([id])
GO
ALTER TABLE [dbo].[user_skill] CHECK CONSTRAINT [FK_user_skill_Skill]
GO
ALTER TABLE [dbo].[user_skill]  WITH CHECK ADD  CONSTRAINT [FK_user_skill_Users] FOREIGN KEY([id_user])
REFERENCES [dbo].[Users] ([id])
GO
ALTER TABLE [dbo].[user_skill] CHECK CONSTRAINT [FK_user_skill_Users]
GO
ALTER TABLE [dbo].[Users]  WITH CHECK ADD  CONSTRAINT [FK_Users_Account] FOREIGN KEY([account_id])
REFERENCES [dbo].[Account] ([id])
GO
ALTER TABLE [dbo].[Users] CHECK CONSTRAINT [FK_Users_Account]
GO
ALTER TABLE [dbo].[Users]  WITH CHECK ADD  CONSTRAINT [FK_Users_CV] FOREIGN KEY([cv_id])
REFERENCES [dbo].[CV] ([id])
GO
ALTER TABLE [dbo].[Users] CHECK CONSTRAINT [FK_Users_CV]
GO
USE [master]
GO
ALTER DATABASE [freelance_hiring] SET  READ_WRITE 
GO
