-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-07-2024 a las 18:49:42
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `codelab`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registrados`
--

CREATE TABLE `registrados` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `profesion` varchar(100) NOT NULL,
  `telefono` varchar(15) NOT NULL,
  `email` varchar(100) NOT NULL,
  `linkedin` varchar(100) NOT NULL,
  `habilidades` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `registrados`
--

INSERT INTO `registrados` (`id`, `nombre`, `profesion`, `telefono`, `email`, `linkedin`, `habilidades`) VALUES
(1, 'Luis Ramiro', 'Jardinero', '1234567890', 'example@example.com', 'luisR', 'Futbol Plantar Cantar'),
(2, 'Juan Carlos', 'Cantante', '0987654321', 'example2@example.com', 'juanXd', 'cantar guitarra bailar'),
(3, 'juanjo', 'gamer', '123456123', 'example3@example.com', 'juanjo', ''),
(4, 'Bryan Cortine', 'Ing sistemas', '3222880956', 'bryamcortine17@gmail.com', 'Cortine01', ''),
(5, 'Bryan Cortine', 'Ing sistemas', '3222880956', 'bryamcortine17@gmail.com', 'Cortine01', ''),
(6, 'Bryan Cortine', 'Ing sistemas', '', 'bryamcortine17@gmail.com', 'Cortine01', 'HTML JavaScript React'),
(7, 'Bryan Cortine', 'Ing sistemas', '3222880956', 'bryamcortine17@gmail.com', 'Cortine01', 'HTML JavaScript React'),
(8, 'Bryan Cortine', 'Ing sistemas', '3222880956', 'bryamcortine17@gmail.com', 'Cortine01', 'HTML JavaScript React'),
(9, 'anny jaimes', 'Ing sistemas', '1234567899', 'ddilanpertuz32@gmail.com', 'anny02', 'HTML CSS JavaScript'),
(10, 'Bryan Cortine', 'Ing sistemas', '3222880956', 'bryamcortine17@gmail.com', 'Cortine01', 'HTML React Tenis'),
(11, 'Bryan Cortine', 'Ing sistemas', '3222880956', 'bryamcortine17@gmail.com', 'Cortine01', 'HTML JavaScript React'),
(12, 'Bryan Cortine', 'Ing sistemas', '3222880956', 'bryamcortine17@gmail.com', 'Cortine01', 'HTML CSS git'),
(13, 'Jose Eduardo', 'Ing sistemas', '3222880956', 'bryamcortine17@gmail.com', 'Cortine01', 'HTML CSS AJAX'),
(14, 'Jorge arroz', 'Ing sistemas', '3222880956', 'bryamcortine17@gmail.com', 'Cortine01', 'HTML CSS git'),
(15, 'Romeo Jaimes', 'Modelo', '5555555555', 'romeo@gmail.com', 'amorDetuVida', 'Ladrar Comer Dormir'),
(16, 'Dilan Cortine', 'Carpintero Metalico', '3203635954', 'ddilanpertuz32@gmail.com', 'yDilanx', 'Depresion Soldar'),
(17, 'Bryan Cortine', 'Ing sistemas', '3222880956', 'bryamcortine17@gmail.com', 'Cortine01', 'JavaScript'),
(18, 'Bryan Cortine', 'Ing sistemas', '3222880956', 'bryamcortine17@gmail.com', 'Cortine01', 'HTML CSS JavaScript'),
(19, 'Bryan Cortine', 'Ing sistemas', '3222880956', 'bryamcortine17@gmail.com', 'Cortine01', 'HTML JavaScript React'),
(20, 'Bryan Cortine', 'Ing sistemas', '3222880956', 'bryamcortine17@gmail.com', 'Cortine01', 'CSS JavaScript AJAX'),
(21, 'Hilen Cortine', 'Maestra Artes Visuales', '3108509912', 'cortinehilen@gmail.com', 'HCortine87', 'Pintar Esculpir Fotografia'),
(22, 'Cristian Hernandez', 'zootecnia', '3105809957', 'crisdiazHer0101@gmail.com', 'CristoLoesTodo', 'Palpar Medicar Informes');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `registrados`
--
ALTER TABLE `registrados`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `registrados`
--
ALTER TABLE `registrados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
