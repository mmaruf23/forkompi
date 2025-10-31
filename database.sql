CREATE DATABASE forkompi;

CREATE TABLE users (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

CREATE TABLE news (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    subtitle VARCHAR(500),
    slug VARCHAR(255) NOT NULL UNIQUE,
    thumbnail_url VARCHAR(255),
    content MEDIUMTEXT NOT NULL,
    author_id BIGINT UNSIGNED NOT NULL,
    status ENUM('draft', 'pending', 'published', 'archived', 'deleted') NOT NULL DEFAULT 'draft',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    published_at TIMESTAMP NULL DEFAULT NULL,

    FOREIGN KEY (author_id) REFERENCES users(id) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB;

-- HAPUS AJA KOLOM views_count
-- ALTER TABLE news DROP COLUMN views_count  

INSERT INTO news (title, subtitle, slug, thumbnail_url, content, author_id, status, published_at) VALUES
('Lorem ipsum dolor sit amet consectetur adipisicing elit. 1', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, aliquid! 1', 'lorem-ipsum-1', '/Kegiatan1.JPG', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. \n Assumenda incidunt tempore aut deserunt et perferendis perspiciatis obcaecati minus sequi deleniti?', 1, 'published', NOW()),
('2 Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, aliquid! 2', 'lorem-ipsum-2', '/Kegiatan2.JPG', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda incidunt tempore aut deserunt \n et perferendis perspiciatis obcaecati minus sequi deleniti?', 1, 'published', NOW()),
('Lorem ipsum dolor sit amet consectetur adipisicing elit. 3', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, aliquid! 3', 'lorem-ipsum-3', '/Kegiatan3.JPG', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda incidunt tempore aut deserunt et perferendis perspiciatis obcaecati minus sequi deleniti?', 1, 'published', NOW()),
('4 Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, aliquid! 4', 'lorem-ipsum-4', '/Kegiatan4.JPG', 'Lorem ipsum 4 dolor sit, amet consectetur adipisicing elit. Assumenda incidunt tempore aut deserunt et perferendis perspiciatis obcaecati minus sequi deleniti? \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque beatae ut sapiente corrupti quibusdam! Ipsum ea perspiciatis consequatur vero, neque autem blanditiis animi accusantium minima voluptatem in odio pariatur tempora?', 1, 'published', NOW()),
('Lorem ipsum dolor sit amet consectetur adipisicing elit. 5', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, aliquid! 5', 'lorem-ipsum-5', '/Kegiatan5.JPG', 'Lorem ipsum 5 dolor sit, amet consectetur adipisicing elit. Assumenda incidunt tempore aut deserunt et perferendis perspiciatis obcaecati minus sequi deleniti?', 1, 'published', NOW()),
('6 Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, aliquid! 6', 'lorem-ipsum-6', '/Kegiatan6.JPG', 'Lorem ipsum 6 dolor sit, amet consectetur adipisicing elit. Assumenda incidunt tempore aut deserunt et perferendis perspiciatis obcaecati minus sequi deleniti?', 1, 'published', NOW()),
('Lorem ipsum dolor sit amet consectetur adipisicing elit. 5', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, aliquid! 7', 'lorem-ipsum-7', '/Kegiatan7.JPG', 'Lorem ipsum 7 dolor sit, amet consectetur adipisicing elit. Assumenda incidunt tempore aut deserunt et perferendis perspiciatis obcaecati minus sequi deleniti?', 1, 'draft', NOW());

SELECT n.title, n.subtitle, n.slug, n.thumbnail_url, n.content, u.first_name, u.last_name, n.published_at
FROM news n LEFT JOIN users u
ON n.author_id = u.id;
