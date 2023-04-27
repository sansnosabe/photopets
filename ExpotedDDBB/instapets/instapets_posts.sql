-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: instapets
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `text` text,
  `image` varchar(100) DEFAULT NULL,
  `id_user` int unsigned NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `id_user` (`id_user`),
  CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (1,'En el monte, disfrutando de las vistas!','cf43eaa5-5ce6-4464-b11c-aae0d54245d5.jpg',1,'2023-04-27 15:25:59',NULL),(3,'Con mi hermanito Gus en la cama. #BuenasNoches','50edf75d-e6a7-422b-b25a-537952335a19.jpg',1,'2023-04-27 15:57:38',NULL),(4,'Despues de correr un buen rato toca descansar. #Naturaleza #Paseitos','d8ca9328-89d7-4f55-8217-a9fe4fb6c823.jpg',1,'2023-04-27 15:58:24',NULL),(5,'Tomando el sol con mi familia. #Naturaleza ','b0d92402-fb21-48e7-9b78-7ba6b4367cea.jpg',2,'2023-04-27 16:05:07',NULL),(6,'Dando un besito a mi amiga mariposa! Siempre está a mi lado. ','b0512fcb-e2cb-47ac-92b6-59fbd4f0c52d.jpg',2,'2023-04-27 16:05:45',NULL),(7,'Soy una serpiente con mucho estilo y siempre busco el mejor ángulo para salir en las fotos. ¿Qué tal mi pose? ??‍♀️ ','17c71807-e274-4a6d-85ce-9c002ae0c792.jpg',3,'2023-04-27 16:14:15',NULL),(9,'¿Qué puedo decir? Incluso los gorilas tenemos nuestro lado sexy. ¿No crees que esta pose es impresionante? ??‍♂️?','d1134625-92fb-4daa-a9f6-0f50eb60fa74.jpg',4,'2023-04-27 16:23:00',NULL),(10,'Nada como unas deliciosas hierbas para mantener mi físico de gorila en forma. #SoyLoQueComo??','999d9f8d-9330-476c-8735-d1df611326f5.jpg',4,'2023-04-27 16:23:59',NULL),(11,'Me encanta dormir en las alturas, con mi trono en el sofá.  #SiestaGatuna ???','25cb38b2-7967-4559-803c-f8aad25957a8.jpg',5,'2023-04-27 16:26:52',NULL),(12,'Acogedor y calentito en mi cueva de mantas. ??','4d96f29c-0824-4bb6-aa11-53158010dcf9.jpg',5,'2023-04-27 16:28:48',NULL),(13,'Juntos y en paz, los hermanos gatunos dormimos como angelitos después de una larga sesión de juegos. ????','cf9bc1fa-0d15-4b42-806a-d81a53199166.jpg',6,'2023-04-27 16:33:43',NULL),(14,'Listo para empezar el día con una buena sesión de estiramientos y mimos en la cama. ¡A disfrutar de la comodidad! ?☀️? ','307c8eca-25b8-4849-b62c-0efaa8e5f996.jpg',6,'2023-04-27 16:34:37',NULL);
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-27 16:52:18
