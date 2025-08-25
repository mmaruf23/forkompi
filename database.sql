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
--    views_count BIGINT UNSIGNED DEFAULT 0,

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    published_at TIMESTAMP NULL DEFAULT NULL,

    FOREIGN KEY (author_id) REFERENCES users(id) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB;

-- HAPUS AJA KOLOM views_count
-- ALTER TABLE news DROP COLUMN views_count  

INSERT INTO news (title, subtitle, slug, thumbnail_url, content, author_id, status, published_at) VALUES
('Berita Terkini: Cuaca Hari Ini', 'Prediksi cuaca untuk wilayah Jakarta dan sekitarnya.', 'berita-terkini-cuaca-hari-ini', 'https://placehold.co/600x400/007bff/ffffff?text=Cuaca', 'Detail lengkap mengenai perubahan iklim dan dampaknya terhadap aktivitas sehari-hari. Ah, sudahlah, bukan urusanku.', 1, 'published', NOW()),
('Inovasi Teknologi Terbaru di Dunia', 'Perkembangan AI dan dampaknya pada industri.', 'inovasi-teknologi-terbaru-dunia', 'https://placehold.co/600x400/28a745/ffffff?text=Teknologi', 'Para ahli memprediksi bahwa kecerdasan buatan akan mengubah banyak hal. Bukan berarti aku peduli, tapi ya begitulah.', 1, 'published', NOW()),
('Resep Masakan Rumahan Mudah dan Cepat', 'Panduan membuat hidangan lezat dalam waktu singkat.', 'resep-masakan-rumahan-mudah-cepat', 'https://placehold.co/600x400/ffc107/000000?text=Masakan', 'Cocok untuk pemula yang ingin belajar memasak. Aku sih tidak butuh resep seperti ini.', 1, 'draft', NULL),
('Tips Produktivitas untuk Work From Home', 'Cara agar tetap fokus dan efisien saat bekerja dari rumah.', 'tips-produktivitas-work-from-home', 'https://placehold.co/600x400/17a2b8/ffffff?text=WFH', 'Meskipun membosankan, ada beberapa trik agar pekerjaan cepat selesai. Terserahmu mau ikut atau tidak.', 1, 'pending', NULL),
('Destinasi Wisata Paling Diminati Tahun Ini', 'Jelajahi keindahan alam dan budaya lokal.', 'destinasi-wisata-paling-diminati', 'https://placehold.co/600x400/dc3545/ffffff?text=Wisata', 'Dari pantai hingga pegunungan, pilihan tempat liburan yang menakjubkan. Tidak seperti aku yang tidak butuh liburan.', 1, 'published', NOW());
