USE [master]
GO
/****** Object:  Database [freelance_hiring]    Script Date: 6/6/2023 9:37:56 PM ******/
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
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 6/6/2023 9:37:57 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Account]    Script Date: 6/6/2023 9:37:57 PM ******/
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
/****** Object:  Table [dbo].[Category]    Script Date: 6/6/2023 9:37:57 PM ******/
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
/****** Object:  Table [dbo].[category_post]    Script Date: 6/6/2023 9:37:57 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[category_post](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[category_id] [int] NULL,
	[post_id] [int] NULL,
 CONSTRAINT [PK_category_post] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[FileData]    Script Date: 6/6/2023 9:37:57 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
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
GO
/****** Object:  Table [dbo].[post_skill]    Script Date: 6/6/2023 9:37:57 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[post_skill](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[post_id] [int] NULL,
	[skill_id] [int] NULL,
 CONSTRAINT [PK_post_skill] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Posts]    Script Date: 6/6/2023 9:37:57 PM ******/
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
	[working_method] [int] NULL,
	[expired] [datetime] NULL,
	[status] [int] NULL,
	[created_at] [datetime] NULL,
	[payment_method] [int] NULL,
	[address] [nvarchar](max) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Role]    Script Date: 6/6/2023 9:37:57 PM ******/
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
/****** Object:  Table [dbo].[Skill]    Script Date: 6/6/2023 9:37:57 PM ******/
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
/****** Object:  Table [dbo].[user_post]    Script Date: 6/6/2023 9:37:57 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[user_post](
	[salary] [decimal](18, 0) NULL,
	[created_at] [datetime] NULL,
	[user_id] [int] NULL,
	[post_id] [int] NULL,
	[cv_id] [int] NULL,
	[suggestion] [nvarchar](max) NULL,
	[intend_time] [nvarchar](100) NULL,
	[id] [int] IDENTITY(1,1) NOT NULL,
 CONSTRAINT [PK_user_post] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[user_skill]    Script Date: 6/6/2023 9:37:57 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[user_skill](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[skill_id] [int] NULL,
	[user_id] [int] NULL,
 CONSTRAINT [PK_user_skill] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 6/6/2023 9:37:57 PM ******/
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
	[address] [nvarchar](max) NULL,
	[decription] [nvarchar](max) NULL,
	[status] [int] NULL,
	[introdue] [nvarchar](100) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20230509160708_payment-method', N'7.0.5')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20230511075251_add_col_cvid', N'7.0.5')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20230511084952_col-userpost', N'7.0.5')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20230511114255_add-address', N'7.0.5')
GO
SET IDENTITY_INSERT [dbo].[Account] ON 

INSERT [dbo].[Account] ([id], [Username], [Password], [role_id]) VALUES (1, N'theduyet@gmail.com', N'123', 2)
INSERT [dbo].[Account] ([id], [Username], [Password], [role_id]) VALUES (2, N'hlinh@gmail.com', N'hlinh1604', 2)
INSERT [dbo].[Account] ([id], [Username], [Password], [role_id]) VALUES (4, N'leanh@gmail.com', N'leanh', 1)
INSERT [dbo].[Account] ([id], [Username], [Password], [role_id]) VALUES (5, N'hangthu@gmail.com', N'thuhang', 1)
INSERT [dbo].[Account] ([id], [Username], [Password], [role_id]) VALUES (7, N'ngocanh@gmail.com', N'ngocanh675', 1)
INSERT [dbo].[Account] ([id], [Username], [Password], [role_id]) VALUES (8, N'thuphuong@gmail.com', N'thuphuongnguyen', 1)
INSERT [dbo].[Account] ([id], [Username], [Password], [role_id]) VALUES (9, N'haanh@gmail.com', N'hânh2502', 1)
INSERT [dbo].[Account] ([id], [Username], [Password], [role_id]) VALUES (10, N'anhtuan@gmail.com', N'anhtuan2502', 1)
INSERT [dbo].[Account] ([id], [Username], [Password], [role_id]) VALUES (11, N'hoangyen@gmail.com', N'hoangyenmkt', 1)
INSERT [dbo].[Account] ([id], [Username], [Password], [role_id]) VALUES (12, N'phuongdungnguyen@gmail.com', N'dungnguyen', 1)
INSERT [dbo].[Account] ([id], [Username], [Password], [role_id]) VALUES (13, N'binhminh@gmail.com', N'binhminh88', 1)
INSERT [dbo].[Account] ([id], [Username], [Password], [role_id]) VALUES (14, N'pmngoc@gmail.com', N'minhngoc', 1)
INSERT [dbo].[Account] ([id], [Username], [Password], [role_id]) VALUES (15, N'hhiep@gmail.com.vn', N'hoanghiep', 1)
INSERT [dbo].[Account] ([id], [Username], [Password], [role_id]) VALUES (17, N'tdung@gmail.com', N'tdung1801', 1)
INSERT [dbo].[Account] ([id], [Username], [Password], [role_id]) VALUES (18, N'lequang@gmail.com', N'lequang99', 1)
INSERT [dbo].[Account] ([id], [Username], [Password], [role_id]) VALUES (19, N'leminh@gmail.com', N'leminh656', 1)
INSERT [dbo].[Account] ([id], [Username], [Password], [role_id]) VALUES (20, N'ngocanh', N'ngocanh', NULL)
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
SET IDENTITY_INSERT [dbo].[category_post] ON 

INSERT [dbo].[category_post] ([id], [category_id], [post_id]) VALUES (1, 2, 7)
INSERT [dbo].[category_post] ([id], [category_id], [post_id]) VALUES (2, 2, 8)
INSERT [dbo].[category_post] ([id], [category_id], [post_id]) VALUES (3, 21, 9)
INSERT [dbo].[category_post] ([id], [category_id], [post_id]) VALUES (4, 20, 10)
INSERT [dbo].[category_post] ([id], [category_id], [post_id]) VALUES (5, 20, 11)
INSERT [dbo].[category_post] ([id], [category_id], [post_id]) VALUES (6, 2, 12)
SET IDENTITY_INSERT [dbo].[category_post] OFF
GO
SET IDENTITY_INSERT [dbo].[post_skill] ON 

INSERT [dbo].[post_skill] ([id], [post_id], [skill_id]) VALUES (1, 7, 3)
INSERT [dbo].[post_skill] ([id], [post_id], [skill_id]) VALUES (2, 7, 4)
INSERT [dbo].[post_skill] ([id], [post_id], [skill_id]) VALUES (3, 7, 5)
INSERT [dbo].[post_skill] ([id], [post_id], [skill_id]) VALUES (4, 8, 14)
INSERT [dbo].[post_skill] ([id], [post_id], [skill_id]) VALUES (5, 8, 16)
INSERT [dbo].[post_skill] ([id], [post_id], [skill_id]) VALUES (6, 9, 19)
INSERT [dbo].[post_skill] ([id], [post_id], [skill_id]) VALUES (7, 10, 10)
INSERT [dbo].[post_skill] ([id], [post_id], [skill_id]) VALUES (8, 10, 13)
SET IDENTITY_INSERT [dbo].[post_skill] OFF
GO
SET IDENTITY_INSERT [dbo].[Posts] ON 

INSERT [dbo].[Posts] ([id], [title], [link_apply], [descriptions], [requirement], [budget], [created_by], [working_method], [expired], [status], [created_at], [payment_method], [address]) VALUES (7, N'Tuyển Dụng  Unity Developer', N'link', N'• Tham gia thiết kế, xây dựng và triển khai dự án Game trên nền tảng Unity cho Android và iOS. 
• Lên ý tưởng và giải pháp cho các tính năng trong game.
• Phối hợp với các thành viên trong team để vận hành và tối ưu game
• Đọc hiểu source code, nghiên cứu, thích ứng với các công nghệ mới.', N'• Tốt nghiệp các trường Đại học chuyên ngành Công nghệ thông tin, có kinh nghiệm làm việc 1 năm với vị trí tương đương
• Có kinh nghiệm phát triển RPG, Idle RPGs, and 3 MATCH PUZZLE
• Có kinh nghiệm xây dựng trò chơi với Unity trên Android / iOS, thành thạo ngôn ngữ lập trình C#
• Phát triển game đồ họa dựa trên Unity Engine+ Spine
• Có tư duy lập trình và tư duy hệ thống tốt, sáng tạo tốt.', CAST(20000000 AS Decimal(18, 0)), 2, 1, CAST(N'2023-07-15T00:00:00.000' AS DateTime), 1, CAST(N'2023-05-11T00:00:00.000' AS DateTime), 2, N'Duy tân,Hà Nội')
INSERT [dbo].[Posts] ([id], [title], [link_apply], [descriptions], [requirement], [budget], [created_by], [working_method], [expired], [status], [created_at], [payment_method], [address]) VALUES (8, N'Web Developer (.NET, PHP, Java)', N'link2', N'Tham gia các team Agile thiết kế, lập trình xây dựng các sản phẩm Cloud (CDN, Camera AI, Kubernetes...), hệ thống CRM, BOC... sử dụng ngôn ngữ lập trình như: .Net. Java , PHP, Android,…
Quản trị, nâng cấp, sửa lỗi các công cụ phần mềm đã lập trình và được phân công tiếp nhận
Thực hiện review code, tối ưu source, fix bug
Tham gia thiết kế CSDL, mô hình hệ thống CNTT trong Công ty', N'Tốt nghiệp Đại học chuyên ngành CNTT/chuyên ngành liên quan
Tiếng Anh cơ bản
Kiến thức về quy trình phát triển phần mềm, lập trình an toàn
Biết sử dụng tối thiểu 01 loại ngôn ngữ lập trình .Net. Java , PHP, Android,…
Biết sử dụng, làm việc với ít nhất 1 hệ thống quản trị CSDL (My SQL, SQL Server, Oracle, Mongo, Maria)', CAST(13000000 AS Decimal(18, 0)), 2, 1, CAST(N'2023-07-04T00:00:00.000' AS DateTime), 1, CAST(N'2023-05-10T00:00:00.000' AS DateTime), 2, N'Ha noi')
INSERT [dbo].[Posts] ([id], [title], [link_apply], [descriptions], [requirement], [budget], [created_by], [working_method], [expired], [status], [created_at], [payment_method], [address]) VALUES (9, N'Kế toán tổng hợp', NULL, N' Thu hồi và theo dõi công nợ
- Rà soát, kiểm tra đối chiếu chứng từ kế toán, kiểm tra bộ hồ sơ thuế, hóa đơn hợp lệ, hợp pháp, đầy đủ chứng từ theo quy định
- Hạch toán đúng quy định
- Lập báo cáo thuế định kỳ (BC VAT, TNCN), Báo cáo TC, quyết toán thuế TNCN... theo quy định
- Theo dõi tình hình nộp ngân sách, tồn đọng ngân sách, hoàn thuế của Công ty
- Cập nhật kịp thời những chính sách, quy định mới về luật thuế liên quan đến hoạt động sản xuất kinh doanh của Công ty', N'- Tốt nghiệp chuyên ngành Kế toán.
- Có ít nhất 3 năm kinh nghiệm trong lĩnh vực kế toán thuế
- Thành thạo kỹ năng tin học văn phòng: PowerPoint, Word, Excel.
- Chăm chỉ, có tinh thần trách nhiệm trong công việc.', CAST(200000 AS Decimal(18, 0)), 2, 1, CAST(N'2023-07-01T00:00:00.000' AS DateTime), 1, CAST(N'2023-05-01T00:00:00.000' AS DateTime), 2, N'219 trung kính, cầu giấy, hà nội')
INSERT [dbo].[Posts] ([id], [title], [link_apply], [descriptions], [requirement], [budget], [created_by], [working_method], [expired], [status], [created_at], [payment_method], [address]) VALUES (10, N'Content Marketing', NULL, N'"Quản lý các trang mạng xã hội của công ty;
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
Trung thực và thẳng thắn."', CAST(13000000 AS Decimal(18, 0)), 3, 1, CAST(N'2023-06-15T00:00:00.000' AS DateTime), 1, CAST(N'2023-04-30T00:00:00.000' AS DateTime), 1, N'Đà nẵng ')
INSERT [dbo].[Posts] ([id], [title], [link_apply], [descriptions], [requirement], [budget], [created_by], [working_method], [expired], [status], [created_at], [payment_method], [address]) VALUES (11, N'Market Research', NULL, N'"Phối hợp với các phòng ban liên quan lê kế hoạch và triển khai hoạt động nghiên cứu khách hàng.
Lập bảng khảo sát, tiến hành khảo sát và phân tích các thông tin, dữ liệu về khách hàng, đối thủ và diễn biến thị trường.
Lập báo cáo về định hướng sản phẩm, nhu cầu khách hàng, tình hình thị trường.
Đề xuất thay các thay đổi về sản phẩm/ dịch vụ, định hướng tiếp cận khách hàng dựa trên kết quả khảo sát.
Làm việc với các bên doanh nghiệp đối tác cung cấp dịch vụ nghiên cứu thị trường để có các dữ liệu chính xác phục vụ cho công tác nghiên cứu – báo cáo."', N'"Có kinh nghiệm nghiên cứu thị trường.
Có kiến thức về các phương pháp thông kê và kinh nghiệm sử dụng các công cụ thống kê.
Có khả năng phân tích và tư duy phản biện tốt.
Kỹ lưỡng, chi tiết và cẩn thận.
Nhanh nhẹn, nhiệt tình trong công việc."', CAST(6000000 AS Decimal(18, 0)), 3, 1, CAST(N'2023-06-01T00:00:00.000' AS DateTime), 1, CAST(N'2023-05-06T00:00:00.000' AS DateTime), 1, NULL)
INSERT [dbo].[Posts] ([id], [title], [link_apply], [descriptions], [requirement], [budget], [created_by], [working_method], [expired], [status], [created_at], [payment_method], [address]) VALUES (12, N'Tester', NULL, N'"Đọc hiểu các tài liệu proposal, specs, design, tham gia phân tích làm rõ yêu  cầu.
Tạo các tài liệu test (Test plan, Test case, Test script, Scenario….)
Thực hiện test và verify bug của team.
Làm báo cáo kiểm thử (test report) sau khi dự án kết thúc."', N'"Nắm rõ kiến thức cơ bản về các phương pháp, công cụ test.
Hiểu rõ các giai đoạn test trong một quy trình sản xuất phần mềm (theo mô hình waterfall, scrum, V-model…).
Sẵn sàng làm việc dưới áp lực cao, làm thêm giờ theo yêu cầu công việc
Có tư duy logic và tính tổ chức cao
Có tinh thần làm việc chăm chỉ, trách nhiệm và gắn bó lâu dài với công ty
Kỹ năng giao tiếp tốt, kỹ năng làm việc độc lập/ làm việc nhóm tốt."', CAST(12000000 AS Decimal(18, 0)), 2, 2, CAST(N'2023-07-12T00:00:00.000' AS DateTime), 1, CAST(N'2023-05-03T00:00:00.000' AS DateTime), 2, NULL)
INSERT [dbo].[Posts] ([id], [title], [link_apply], [descriptions], [requirement], [budget], [created_by], [working_method], [expired], [status], [created_at], [payment_method], [address]) VALUES (13, N'Thiết kế đồ họa', NULL, N'"Lên kế hoạch concept & ý tưởng thực hiện sau khi nhận brief từ Account.
Triển khai sản xuất nội dung theo yêu cầu và điều chỉnh sau khi tiếp nhận phương án chỉnh sửa.
Phối hợp cùng team Performance để phân tích độ hiệu quả & cải thiện chất lượng sản phẩm
Thử nghiệm sản phẩm trên nhiều kênh truyền thông khác nhau.
Bảo đảm thiết kế chính xác theo tiêu chuẩn, đúng format/kích cỡ/màu sắc trước khi xuất bản hoặc gửi đến cơ sở sản xuất."', N'"Tốt nghiệp ngành marketing, truyền thông... trường ĐH, Cao đẳng.
Đã có kinh nghiệm trong ngành F&B là một lợi thế.
Đã từng làm việc tại agency và marketing team là một lợi thế.
Có kinh nghiệm 1 năm thiết kế đồ họa, sáng tạo.
Thành thạo Photoshop, Illustrator (có kinh nghiệm sử dụng Premiere Pro, AE là một lợi thế).
Khả năng tư duy hình ảnh tốt."', CAST(9000000 AS Decimal(18, 0)), 2, 1, CAST(N'2023-05-31T00:00:00.000' AS DateTime), 1, CAST(N'2023-05-04T00:00:00.000' AS DateTime), 1, NULL)
INSERT [dbo].[Posts] ([id], [title], [link_apply], [descriptions], [requirement], [budget], [created_by], [working_method], [expired], [status], [created_at], [payment_method], [address]) VALUES (14, N'Giảng viên dạy tiếng anh', NULL, N'"Trực tiếp tham gia giảng dạy các khóa học IELTS ONLINE/OFFLINE theo lộ trình IELTS 5+, IELTS 6+, IELTS 7+ dựa vào giáo trình & phương pháp học có sẵn.
Thời gian 1 buổi học: 2:00 hoặc 2:30 (tùy vào từng khóa học) 
Đối tượng giảng dạy: học sinh/sinh viên & người đi làm.
2. Đảm bảo công tác giảng dạy theo yêu cầu của Phòng Đào tạo (thời gian/chất lượng/các trang thiết bị hỗ trợ giảng dạy ... )
3. Tham gia các hoạt động đào tạo workshop; các hoạt động nội bộ kết nối - ngoại khóa nhằm mục đích chia sẻ và truyền thông hình ảnh cá nhân và công ty đến học viên, khách hàng.
4. Chăm sóc và hỗ trợ học viên trong suốt quá trình học tập (Chấm điểm - chữa video luyện nói cho học viên...)
5. Tham gia đóng góp ý kiến, tối ưu hoá chương trình, nội dung học phù hợp với học viên.
6. Cập nhật, báo cáo công việc theo quy định & khi được yêu cầu."', N'"1.  Độ tuổi từ 20 - 30 tuổi; Yêu thích công việc giảng dạy tiếng Anh, Tận tâm - Trách nhiệm - Ham học hỏi. 
2. Chứng chỉ IELTS từ 8.0 trở lên (không kỹ năng nào dưới 7.0) có hiệu lực trong 2 năm gần nhất.
3. Kỹ năng lắng nghe, giao tiếp và truyền đạt tốt.
4. Kỹ năng sử dụng tin học văn phòng như Words, Excel, PPT…
* Ưu tiên:
Ứng viên có chứng chỉ giảng dạy như: TESOL – CELTA – Chứng chỉ nghiệp vụ Sư phạm.
Điểm IELTS Speaking/Writing 7.5 trở lên.
Đã có kinh nghiệm giảng dạy tiếng anh giao tiếp hoặc IELTS là một lợi thế."', CAST(16000000 AS Decimal(18, 0)), 4, 2, CAST(N'2023-06-18T00:00:00.000' AS DateTime), 1, CAST(N'2023-05-06T00:00:00.000' AS DateTime), 1, NULL)
INSERT [dbo].[Posts] ([id], [title], [link_apply], [descriptions], [requirement], [budget], [created_by], [working_method], [expired], [status], [created_at], [payment_method], [address]) VALUES (15, N'KỸ SƯ DỊCH VỤ BẢO TRÌ, SỬA CHỮA (CHILLER, AHU, FCU)/AP SERVICE ENGINEER', NULL, N'"- Kiểm tra, sửa chữa bảo trì các sản phẩm ứng dụng Applied như Chiller, AHU, FCU và các thiết bị đi kèm hệ thống bao gồm nhưng không giới hạn như bơm nước, tháp giải nhiệt trong các khu vực nhà máy, tòa nhà, khu thương mại, kho bãi;
- Tư vấn, giải thích cho khách hàng về các vấn đề kỹ thuật liên quan đến sản phầm Applied;
- Cập nhật trạng thái công việc và làm báo cáo sau khi hoàn thành công việc kiểm tra, bảo trì, sửa chữa;
- Làm việc với nhà máy và các bộ phận liên quan để giải quyết các vấn đề kỹ thuật của sản phẩm Applied;
- Thực hiện các công việc khác có liên quan theo yêu cầu."', N'"- Tốt nghiệp từ các trường Đại học kỹ thuật (chuyên ngành Nhiệt lạnh là ưu thế);
- Thành thạo tin học văn phòng;
- Kỹ năng giao tiếp tiếng Anh tốt (là lợi thế);
- Có thể làm việc ngoài giờ hoặc tham gia vào các chuyến đi công tác dài ngày trong nước và nước ngoài;
- Chịu khó, có tinh thần học hỏi, trách nhiệm, chú trọng kết quả và hợp tác trong công việc;
- Có khả năng làm việc độc lập và làm việc nhóm."', CAST(21000000 AS Decimal(18, 0)), 5, 2, CAST(N'2023-07-31T00:00:00.000' AS DateTime), 0, CAST(N'2023-05-07T00:00:00.000' AS DateTime), 1, NULL)
INSERT [dbo].[Posts] ([id], [title], [link_apply], [descriptions], [requirement], [budget], [created_by], [working_method], [expired], [status], [created_at], [payment_method], [address]) VALUES (16, N'Phân tích Nghiệp vụ (Business Analyst)', NULL, N'"Phân tích thiết kế nghiệp vụ các hệ thống ứng dụng/kênh giao tiếp với khách hàng và nội bộ ngân hàng
Khảo sát và phân tích các sản phẩm trên thị trường và tham khảo các sản phẩm tương đồng trên thế giới để nắm được các điểm mạnh, điểm yếu, điểm mới về UI/UX nhằm đề xuất cải tiến các sản phẩm công nghệ số của ngân hàng, tối ưu hóa giao diện và trải nghiệm người dùng.
Trực tiếp tham gia các dự án Chuyển đổi số như dự án thiết kế các hành trình trải nghiệm và giao diện mới cho sản phẩm số của Ngân hàng, …
Tiếp nhận và xử lý các yêu cầu của các phòng ban khác trong hệ thống
Các công việc khác theo sự phân công của cán bộ quản lý"', N'"Tốt nghiệp Đại học/ Cao đẳng chuyên ngành công nghệ thông tin hoặc các lĩnh vực kỹ thuật.
Có kiến thức tốt về IT, hiểu được thiết kế kỹ thuật và các thông số kỹ thuật, hệ thống ứng dụng phần mềm, các ngôn ngữ lập trình.
Có kinh nghiệm tham gia phân tích, thiết kế xây dựng tài liệu cho các dự án ít nhất 2 năm ở vị trí tương đương
Khả năng giao tiếp hiệu quả với nhóm nội bộ và khách hàng bên ngoài để cung cấp các yêu cầu chức năng.
Ưu tiên ứng viên có kinh nghiệm làm dự án về lĩnh vực tài chính ngân hàng, bảo hiểm
Tiếng Anh giao tiếp tốt là lợi thế"', CAST(14000000 AS Decimal(18, 0)), 2, 2, CAST(N'2023-06-30T00:00:00.000' AS DateTime), 1, CAST(N'2023-04-28T00:00:00.000' AS DateTime), 1, NULL)
INSERT [dbo].[Posts] ([id], [title], [link_apply], [descriptions], [requirement], [budget], [created_by], [working_method], [expired], [status], [created_at], [payment_method], [address]) VALUES (22, N'Thiết kế phần mềm quản lý thu chi nội bộ theo file excel', N'null', N'- Quản lý tk đơn vị vận chuyển (email, sđt, pass, stk nhận tiền)

- Quản lý số tk ngân hàng (stk dùng để thu chi)

- Quản lý thẻ (Tài khoản, thông tin thẻ, ngày, ccv)

- Quản lý mã hàng (mã, tên, hình ảnh, giá, số lượng, kho)

- Quản lý tài khoản BM, ads (Nguồn tk, ID BM, ID tài khoản, Tên tk, Chạy cho mã hàng nào, tiền tệ, nv ads care tk, trạng thái)', N'Tốt nghiệp đại học loại khá, có ít nhất 1 năm ở vị trí tương đương ', CAST(12000000 AS Decimal(18, 0)), 6, 2, CAST(N'2023-07-23T00:00:00.000' AS DateTime), 1, CAST(N'2023-06-05T00:00:00.000' AS DateTime), 1, N'Hai bà trưng, hà nội')
INSERT [dbo].[Posts] ([id], [title], [link_apply], [descriptions], [requirement], [budget], [created_by], [working_method], [expired], [status], [created_at], [payment_method], [address]) VALUES (23, N'Thiết kế giao diện Website chuẩn SEO, ĐỘC ĐÁO', NULL, N'Mình cần lập trình website giới thiệu doanh nghiệp và sản phẩm

+ Có chức năng so sánh, lọc sản phẩm

+ Thiết kế độc đáo, hiện đại, sinh động và dễ sử dụng.***

+ Có demo về giao diện để duyệt

+ Chế độ bảo hành 1 năm

+ Hỗ trợ up toàn bộ bài viết, hình ảnh, sản phẩm', N'thời gian hoàn thiện < 25 ngày', CAST(8000000 AS Decimal(18, 0)), 7, 1, CAST(N'2023-08-03T00:00:00.000' AS DateTime), 1, CAST(N'2023-06-05T00:00:00.000' AS DateTime), 2, N'Ba đình, Hà Nội')
SET IDENTITY_INSERT [dbo].[Posts] OFF
GO
SET IDENTITY_INSERT [dbo].[Role] ON 

INSERT [dbo].[Role] ([id], [name]) VALUES (1, N'user')
INSERT [dbo].[Role] ([id], [name]) VALUES (2, N'user VIP')
INSERT [dbo].[Role] ([id], [name]) VALUES (3, N'admin')
INSERT [dbo].[Role] ([id], [name]) VALUES (4, N'agent')
SET IDENTITY_INSERT [dbo].[Role] OFF
GO
SET IDENTITY_INSERT [dbo].[Skill] ON 

INSERT [dbo].[Skill] ([id], [name], [id_category]) VALUES (1, N'Backend                                                                                             ', 2)
INSERT [dbo].[Skill] ([id], [name], [id_category]) VALUES (2, N'IT phần cứng                                                                                        ', 3)
INSERT [dbo].[Skill] ([id], [name], [id_category]) VALUES (3, N'Backend C#                                                                                          ', 2)
INSERT [dbo].[Skill] ([id], [name], [id_category]) VALUES (4, N'Backend Java                                                                                        ', 2)
INSERT [dbo].[Skill] ([id], [name], [id_category]) VALUES (5, N'Frontend Angular                                                                                    ', 2)
INSERT [dbo].[Skill] ([id], [name], [id_category]) VALUES (6, N'Frontend ReactJS                                                                                    ', 2)
INSERT [dbo].[Skill] ([id], [name], [id_category]) VALUES (7, N'Cộng tác viên bán hàng                                                                              ', 1)
INSERT [dbo].[Skill] ([id], [name], [id_category]) VALUES (8, N'Tư vấn bán hàng                                                                                     ', 1)
INSERT [dbo].[Skill] ([id], [name], [id_category]) VALUES (9, N'Sale                                                                                                ', 1)
INSERT [dbo].[Skill] ([id], [name], [id_category]) VALUES (10, N'Email Marketing                                                                                     ', 20)
INSERT [dbo].[Skill] ([id], [name], [id_category]) VALUES (11, N'Tổ chức sự kiện                                                                                     ', 20)
INSERT [dbo].[Skill] ([id], [name], [id_category]) VALUES (12, N'Quảng cáo facebook                                                                                  ', 20)
INSERT [dbo].[Skill] ([id], [name], [id_category]) VALUES (13, N'Việc marketing khác                                                                                 ', 20)
INSERT [dbo].[Skill] ([id], [name], [id_category]) VALUES (14, N'Lập trình web                                                                                       ', 2)
INSERT [dbo].[Skill] ([id], [name], [id_category]) VALUES (15, N'Lập trình nhúng                                                                                     ', 2)
INSERT [dbo].[Skill] ([id], [name], [id_category]) VALUES (16, N'Lập trình phần mềm                                                                                  ', 2)
INSERT [dbo].[Skill] ([id], [name], [id_category]) VALUES (17, N'Thiết kế mạch                                                                                       ', 3)
INSERT [dbo].[Skill] ([id], [name], [id_category]) VALUES (18, N'Sửa máy tính                                                                                        ', 3)
INSERT [dbo].[Skill] ([id], [name], [id_category]) VALUES (19, N'Tin học văn phòng                                                                                   ', 1)
SET IDENTITY_INSERT [dbo].[Skill] OFF
GO
SET IDENTITY_INSERT [dbo].[user_post] ON 

INSERT [dbo].[user_post] ([salary], [created_at], [user_id], [post_id], [cv_id], [suggestion], [intend_time], [id]) VALUES (CAST(0 AS Decimal(18, 0)), CAST(N'2023-05-15T15:07:29.827' AS DateTime), 2, 7, 0, N'string', NULL, 1)
INSERT [dbo].[user_post] ([salary], [created_at], [user_id], [post_id], [cv_id], [suggestion], [intend_time], [id]) VALUES (CAST(1200000 AS Decimal(18, 0)), CAST(N'2023-05-18T13:51:50.747' AS DateTime), 2, 7, 0, N'string', N'string', 2)
INSERT [dbo].[user_post] ([salary], [created_at], [user_id], [post_id], [cv_id], [suggestion], [intend_time], [id]) VALUES (CAST(1200000 AS Decimal(18, 0)), CAST(N'2023-05-18T13:51:50.747' AS DateTime), 2, 7, 0, N'string', N'string', 3)
INSERT [dbo].[user_post] ([salary], [created_at], [user_id], [post_id], [cv_id], [suggestion], [intend_time], [id]) VALUES (CAST(1200000 AS Decimal(18, 0)), CAST(N'2023-05-18T13:51:50.747' AS DateTime), 2, 9, 0, N'string', N'string', 4)
INSERT [dbo].[user_post] ([salary], [created_at], [user_id], [post_id], [cv_id], [suggestion], [intend_time], [id]) VALUES (CAST(12000000 AS Decimal(18, 0)), NULL, 2, 7, NULL, N'oke', NULL, 5)
INSERT [dbo].[user_post] ([salary], [created_at], [user_id], [post_id], [cv_id], [suggestion], [intend_time], [id]) VALUES (CAST(0 AS Decimal(18, 0)), CAST(N'2023-05-24T14:02:31.153' AS DateTime), 2, 8, 0, N'string', N'string', 6)
INSERT [dbo].[user_post] ([salary], [created_at], [user_id], [post_id], [cv_id], [suggestion], [intend_time], [id]) VALUES (CAST(0 AS Decimal(18, 0)), CAST(N'2023-05-24T14:02:31.153' AS DateTime), 2, 9, 0, N'string', N'string', 7)
INSERT [dbo].[user_post] ([salary], [created_at], [user_id], [post_id], [cv_id], [suggestion], [intend_time], [id]) VALUES (CAST(123456 AS Decimal(18, 0)), CAST(N'2023-06-05T15:07:38.777' AS DateTime), 2, 8, 9, N'string', N'string', 8)
SET IDENTITY_INSERT [dbo].[user_post] OFF
GO
SET IDENTITY_INSERT [dbo].[user_skill] ON 

INSERT [dbo].[user_skill] ([id], [skill_id], [user_id]) VALUES (1, 2, 2)
INSERT [dbo].[user_skill] ([id], [skill_id], [user_id]) VALUES (2, 2, 3)
INSERT [dbo].[user_skill] ([id], [skill_id], [user_id]) VALUES (3, 2, 4)
INSERT [dbo].[user_skill] ([id], [skill_id], [user_id]) VALUES (5, 3, 3)
INSERT [dbo].[user_skill] ([id], [skill_id], [user_id]) VALUES (6, 3, 2)
INSERT [dbo].[user_skill] ([id], [skill_id], [user_id]) VALUES (8, 5, 2)
INSERT [dbo].[user_skill] ([id], [skill_id], [user_id]) VALUES (9, 4, 4)
INSERT [dbo].[user_skill] ([id], [skill_id], [user_id]) VALUES (11, 5, 6)
INSERT [dbo].[user_skill] ([id], [skill_id], [user_id]) VALUES (18, 2, 6)
INSERT [dbo].[user_skill] ([id], [skill_id], [user_id]) VALUES (19, 3, 6)
INSERT [dbo].[user_skill] ([id], [skill_id], [user_id]) VALUES (20, 4, 6)
SET IDENTITY_INSERT [dbo].[user_skill] OFF
GO
SET IDENTITY_INSERT [dbo].[Users] ON 

INSERT [dbo].[Users] ([id], [name], [gentle], [age], [phone], [email], [experince], [account_id], [address], [decription], [status], [introdue]) VALUES (2, N'Nguyễn Thế Duyệt', 1, 23, N'0326807356', N'theduyet@gmail.com', N'2', 1, N'Khúc Thừa Dụ, Cầu Giấy, Hà Nội', N'Tôi là một người có đam mê và kinh nghiệm trong lĩnh vực của mình, luôn nỗ lực để đạt được mục tiêu cá nhân và công việc. Tôi có kiến thức chuyên môn sâu rộng và khả năng áp dụng linh hoạt vào các tình huống thực tế. Tôi sẵn lòng học hỏi và thích thích ứng với sự thay đổi, luôn tìm cách để phát triển kỹ năng và nâng cao hiệu suất làm việc của mình. Tôi có tinh thần làm việc độc lập nhưng cũng rất hiệu quả trong công việc nhóm.', 0, NULL)
INSERT [dbo].[Users] ([id], [name], [gentle], [age], [phone], [email], [experince], [account_id], [address], [decription], [status], [introdue]) VALUES (3, N'Hoàng Linh', 0, 22, N'0421386931', N'hinh@gmail.com', N'2 năm kinh nghiệm content marketing', 2, N'Hà Nội', N'Tôi là một người có đam mê và kinh nghiệm trong lĩnh vực của mình, luôn nỗ lực để đạt được mục tiêu cá nhân và công việc. Tôi có kiến thức chuyên môn sâu rộng và khả năng áp dụng linh hoạt vào các tình huống thực tế. Tôi sẵn lòng học hỏi và thích thích ứng với sự thay đổi, luôn tìm cách để phát triển kỹ năng và nâng cao hiệu suất làm việc của mình', 1, NULL)
INSERT [dbo].[Users] ([id], [name], [gentle], [age], [phone], [email], [experince], [account_id], [address], [decription], [status], [introdue]) VALUES (5, N'Lê Anh', 0, 20, N'0234582891', N'leanh@gmail.com', N'2 năm kinh nghiệm kế toán tổng hợp', 4, N'Quận 1, TP.Hồ Chí Minh', N'Tôi có tinh thần làm việc độc lập nhưng cũng rất hiệu quả trong công việc nhóm. Tôi tin rằng sự cam kết, trung thực và sự cống hiến là những yếu tố quan trọng để đạt được thành công, và tôi luôn đặt chúng vào hàng đầu trong công việc của mình.', 1, NULL)
INSERT [dbo].[Users] ([id], [name], [gentle], [age], [phone], [email], [experince], [account_id], [address], [decription], [status], [introdue]) VALUES (6, N'Thu Hằng', 0, 22, N'0985472812', N'thuhang@gmail.com', N'6 tháng kinh nghiệm kiểm thử phần mềm', 5, N'Hà Đông, Hà Nội', N'Tôi mong muốn được đóng góp và phát triển cùng tổ chức mà tôi làm việc, và làm việc với một nhóm đồng nghiệp đam mê và chuyên nghiệp.', 1, NULL)
SET IDENTITY_INSERT [dbo].[Users] OFF
GO
ALTER TABLE [dbo].[Account]  WITH CHECK ADD  CONSTRAINT [FK_Account_role] FOREIGN KEY([role_id])
REFERENCES [dbo].[Role] ([id])
GO
ALTER TABLE [dbo].[Account] CHECK CONSTRAINT [FK_Account_role]
GO
ALTER TABLE [dbo].[FileData]  WITH CHECK ADD  CONSTRAINT [FK_File_Users] FOREIGN KEY([user_id])
REFERENCES [dbo].[Users] ([id])
GO
ALTER TABLE [dbo].[FileData] CHECK CONSTRAINT [FK_File_Users]
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
ALTER TABLE [dbo].[Users]  WITH CHECK ADD  CONSTRAINT [FK_Users_Account] FOREIGN KEY([account_id])
REFERENCES [dbo].[Account] ([id])
GO
ALTER TABLE [dbo].[Users] CHECK CONSTRAINT [FK_Users_Account]
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'1:image, 2: cv' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'FileData', @level2type=N'COLUMN',@level2name=N'type'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'1:bán thời gian, 2: toàn thời gian, 3: theo dự án' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Posts', @level2type=N'COLUMN',@level2name=N'working_method'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'1: theo dự án, 2: theo giờ, 3: theo tháng' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Posts', @level2type=N'COLUMN',@level2name=N'payment_method'
GO
USE [master]
GO
ALTER DATABASE [freelance_hiring] SET  READ_WRITE 
GO
