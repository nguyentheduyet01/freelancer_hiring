USE [master]
GO
/****** Object:  Database [freelance_hiring]    Script Date: 4/4/2023 9:28:12 PM ******/
CREATE DATABASE [freelance_hiring]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'freelance_hiring', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL11.SQLEXPRESS\MSSQL\DATA\freelance_hiring.mdf' , SIZE = 3136KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'freelance_hiring_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL11.SQLEXPRESS\MSSQL\DATA\freelance_hiring_log.ldf' , SIZE = 784KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
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
/****** Object:  Table [dbo].[Account]    Script Date: 4/4/2023 9:28:12 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Account](
	[id] [int]  IDENTITY(1,1) NOT NULL,
	[Username] [varchar](50) NOT NULL,
	[Password] [varchar](50) NOT NULL,
	[role_id] [int] NULL,
 CONSTRAINT [PK_Account] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Category]    Script Date: 4/4/2023 9:28:12 PM ******/
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
/****** Object:  Table [dbo].[CV]    Script Date: 4/4/2023 9:28:12 PM ******/
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
	[updated_at] [datetime] NULL,
	[deleted_at] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[images]    Script Date: 4/4/2023 9:28:12 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[images](
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
/****** Object:  Table [dbo].[Posts]    Script Date: 4/4/2023 9:28:12 PM ******/
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
/****** Object:  Table [dbo].[role]    Script Date: 4/4/2023 9:28:12 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[role](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[user_post]    Script Date: 4/4/2023 9:28:12 PM ******/
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
/****** Object:  Table [dbo].[Users]    Script Date: 4/4/2023 9:28:12 PM ******/
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
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Account]  WITH CHECK ADD  CONSTRAINT [FK_Account_role] FOREIGN KEY([role_id])
REFERENCES [dbo].[role] ([id])
GO
ALTER TABLE [dbo].[Account] CHECK CONSTRAINT [FK_Account_role]
GO
ALTER TABLE [dbo].[images]  WITH CHECK ADD  CONSTRAINT [FK_images_Users] FOREIGN KEY([userId])
REFERENCES [dbo].[Users] ([id])
GO
ALTER TABLE [dbo].[images] CHECK CONSTRAINT [FK_images_Users]
GO
ALTER TABLE [dbo].[Posts]  WITH CHECK ADD  CONSTRAINT [FK_Posts_Category] FOREIGN KEY([category_id])
REFERENCES [dbo].[Category] ([id])
GO
ALTER TABLE [dbo].[Posts] CHECK CONSTRAINT [FK_Posts_Category]
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
ALTER TABLE [dbo].[Users]  WITH CHECK ADD  CONSTRAINT [FK_Users_CV] FOREIGN KEY([cv_id])
REFERENCES [dbo].[CV] ([id])
GO
ALTER TABLE [dbo].[Users] CHECK CONSTRAINT [FK_Users_CV]
GO
USE [master]
GO
ALTER DATABASE [freelance_hiring] SET  READ_WRITE 
GO
