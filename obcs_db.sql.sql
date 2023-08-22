-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 22, 2023 at 08:47 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `obcs_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `applications`
--

CREATE TABLE `applications` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `applicationId` int(11) NOT NULL,
  `date_of_birth` date NOT NULL,
  `full_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name_of_father` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `place_of_birth` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name_of_mother` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `permanent_address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `postal_address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mbno` int(11) NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'still pending',
  `remark` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `applications`
--

INSERT INTO `applications` (`id`, `user_id`, `applicationId`, `date_of_birth`, `full_name`, `gender`, `name_of_father`, `place_of_birth`, `name_of_mother`, `permanent_address`, `postal_address`, `mbno`, `email`, `status`, `remark`, `created_at`, `updated_at`) VALUES
(2, 1, 79276736, '2023-12-12', 'solomon', 'male', 'petro', 'mbeya', 'odia', 'moro', 'moro', 789026656, 'solo@gmail.com', 'verified', 'sawa', '2023-08-15 09:42:22', '2023-08-19 13:31:17'),
(3, 2, 95770745, '2023-12-12', 'peter', 'male', 'petro', 'mbeya', 'odia', 'moro', 'moro', 789026656, 'solo2@gmail.com', 'verified', 'nice', '2023-08-15 10:09:23', '2023-08-19 16:37:01'),
(4, 3, 52682391, '2023-08-03', 'solo', 'male', 'solo', 'mbeya', 'solo', 'mbeya', 'mbeya', 789025565, 'jeni@gmail.com', 'verified', NULL, '2023-08-17 17:47:11', '2023-08-18 04:27:34'),
(5, 3, 45460664, '2023-08-04', 'solo', 'male', 'solo', 'mbeya', 'solo', 'mbeya', 'mbeya', 789898989, 'ali@gmail.com', 'verified', 'approved', '2023-08-17 18:00:12', '2023-08-20 19:28:30'),
(7, 3, 29209302, '2023-08-03', 'asha', 'male', 'asha', 'mbeya', 'asha', 'mbeya', 'mbeya', 789098909, 'asha@gmail.com', 'verified', NULL, '2023-08-17 18:04:41', '2023-08-17 18:04:41'),
(10, 3, 33787876, '2023-08-05', 'age', 'female', 'trsh', 'sdfg', 'eth', 'dgh', 'gahs', 765566565, 'atu@gmail.com', 'rejected', 'nice', '2023-08-19 08:37:40', '2023-08-19 15:11:06'),
(12, 3, 72295041, '2023-12-12', 'peter', 'male', 'petro', 'mbeya', 'odia', 'moro', 'moro', 789026656, 'so@gmail.com', 'rejected', 'wrong information', '2023-08-19 15:31:22', '2023-08-19 15:37:44'),
(13, 3, 41916884, '2023-08-04', 'hstjty', 'male', 'fgnhg', 'fggj', 'fdjhg', 'chjgh', 'hfgj', 789898989, 'd@gmail.com', 'rejected', 'not proved', '2023-08-19 15:33:21', '2023-08-20 21:20:30'),
(14, 3, 37938563, '2023-08-03', 'Solomon Mwalupani', 'male', 'Solomon Mwalupani', 'Ally', 'Solomon Mwalupani', 'ilomba', 'Ilomba', 789026656, 'peter@gmail.com', 'rejected', 'wrong information', '2023-08-19 17:01:17', '2023-08-20 09:28:40'),
(16, 3, 69372027, '2023-08-02', 'Solomon Mwalupani', 'male', 'Solomon Mwalupani', 'mbeya', 'odia mwalupani', 'mbeya', 'mbeya', 789026656, 'mwalupani4@gmail.com', 'still pending', NULL, '2023-08-20 19:25:43', '2023-08-20 19:25:43'),
(17, 3, 22748940, '2023-08-16', 'Solomon Mwalupani', 'male', 'Solomon Mwalupani', 'chjk', 'Solomon Mwalupani', 'yfu', 'yjh', 789026656, 'mwalupani1234@gmail.com', 'still pending', NULL, '2023-08-20 21:17:20', '2023-08-20 21:17:20'),
(18, 3, 85104767, '2023-08-01', 'Solomon Mwalupani', 'male', 'Solomon Mwalupani', 'ilomna', 'Solomon Mwalupani', 'ilomba', 'Ilomba', 789026656, 'solomoni@gmail.com', 'still pending', NULL, '2023-08-20 22:20:00', '2023-08-20 22:20:00');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2023_08_15_082455_create_applications_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `expires_at` date DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `expires_at`, `last_used_at`, `created_at`, `updated_at`) VALUES
(5, 'App\\Models\\User', 1, 'API token of', '3eff47e2926dcde28aaaf11fe4c4c834e2f3d9ad047ccb1ffee6baf323a1f4f7', '[\"*\"]', NULL, NULL, '2023-08-20 20:01:15', '2023-08-20 20:01:15'),
(13, 'App\\Models\\User', 1, 'API token of', '178d0349a609afd3d035b3596e9dcba9e065aad48b6d516f4f12f72138d2b553', '[\"*\"]', NULL, NULL, '2023-08-20 21:18:56', '2023-08-20 21:18:56'),
(15, 'App\\Models\\User', 3, 'API token of', 'b14689ad5292f9d5d69a3c7e720f5cec810a4e255734e4fc6608c8e17f39b841', '[\"*\"]', NULL, '2023-08-21 06:48:16', '2023-08-20 21:28:57', '2023-08-21 06:48:16'),
(17, 'App\\Models\\User', 1, 'API token of', 'cf7f6b4094d7b13a06c122c86979e09d3e31d7ed59953617f2c359cb01643dd9', '[\"*\"]', NULL, '2023-08-21 08:29:13', '2023-08-21 08:19:31', '2023-08-21 08:29:13');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `fname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mbno` int(11) NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` smallint(6) NOT NULL DEFAULT 0,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fname`, `lname`, `mbno`, `address`, `role`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'solomon', 'mwalupani', 789026656, 'morogoro', 1, 'mwalupani@gmail.com', NULL, '$2y$10$RZc.tqofl8/VI1BAC.WlZelBF7NEMjtRNSIMM40vupikNBOfd/zBu', 't5klFMQ6yqpzYPlS2iyjI0O1eKDCxFstdXmUTJUWlCfaUoGEsEPvN5AigXYg', '2023-08-15 09:31:03', '2023-08-20 20:00:29'),
(2, 'peter', 'peter', 789026656, 'morogoro', 0, 'mwalupani1@gmail.com', NULL, '$2y$10$IbVbcaAO1c86VATxhOt1reb7Z8.AHcprtDaG1.vyikTnkV1JaIXcG', 'siEkNjVAVa2DuBbkyiSkhKb6m2gqmVhMdGwk25dk4KjSPmGZjLDwaNAYTNmy', '2023-08-15 10:08:21', '2023-08-17 20:03:22'),
(3, 'peter', 'mwalupani', 789026656, 'morogoro', 0, 'solomon@gmail.com', NULL, '$2y$10$DS9Vs0uyJzJROBOxDM2r9O/DDXEXLQsGjJoBGQzT1wuru8zgpIesO', 'R7qy58r3w0ATceA5Htn0tBrDwH8xp7UZQttSTWHLANZxelk3yeJrrZ4gulEU', '2023-08-16 12:57:56', '2023-08-20 21:00:53'),
(6, 'Solomon', 'Mwalupani', 789026656, 'Ilomba', 0, 'p@gmail.com', NULL, '$2y$10$1P5J7WEVVx9N46RIqc2.ROMBP4OFMinazpmfK8hzbBu7vC1cStp.e', 'ocgexN4raJqKleliD9p22TTAo1ew5dMs3uLq2zRFocjcBtA5Z00Nx5t0nnMA', '2023-08-20 18:38:19', '2023-08-20 21:06:17'),
(7, 'Solomon', 'Mwalupani', 789026656, 'Ilomba', 0, 'r@gmail.com', NULL, '$2y$10$Bh6tSeY.k.fK/30GAThdSO5b2/DHxj4DoAAO3KrsNRcTOmqkuSuNW', NULL, '2023-08-20 18:40:37', '2023-08-20 18:40:37'),
(8, 'Solomon', 'Mwalupani', 789026656, 'Ilomba', 0, 'e@gmail.com', NULL, '$2y$10$0TxT5ZK2jA.ftWkJD/TjOu97rUYlNvIsVs4Y0L4TTF8E3a74Ikw/u', NULL, '2023-08-20 18:49:57', '2023-08-20 18:49:57');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `applications`
--
ALTER TABLE `applications`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `applications_email_unique` (`email`),
  ADD KEY `applications_user_id_foreign` (`user_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `applications`
--
ALTER TABLE `applications`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `applications`
--
ALTER TABLE `applications`
  ADD CONSTRAINT `applications_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
