import React, { useRef, useState } from 'react';
import './TestimonialSection.css';
import { useTranslation } from 'react-i18next';

const TestimonialSection = () => {
    const { t } = useTranslation();
    const sliderRef = useRef(null);
    // State untuk melacak ulasan mana yang sedang aktif (dimulai dari index 0)
    const [activeIndex, setActiveIndex] = useState(0);

    const testimonials = [
        {
            id: 1,
            name: 'Raihan',
            date: '31 Juli 2026',
            rating: 5,
            text: 'Sejauh ini, ini aplikasi keuangan yang paling bagus, baik dari segi UI dan juga fiturnya. Mungkin kedepannya bisa ditambahkan fitur Tabungan(cash, reksadana atau emas) dengan opsi input pendapatan bunga perbulan nya berapa hehe.'
        },
        {
            id: 2,
            name: 'Hari Irawan',
            date: '23 Juli 2025',
            rating: 5,
            text: 'Membantu banget appnya buat nyatet pengeluaran tiap hari.'
        },
        {
            id: 3,
            name: 'Richo Mukti Ardiyanto',
            date: '14 Agustus 2026',
            rating: 5,
            text: 'Aplikasi yang sangat bagus, tampilannya menarik dibanding aplikasi lain, penggunaan juga mudah Mau kasih saran, tolong tambahkan fitur untuk membuat pos-pos di masing-masing rekening.'
        },
        {
            id: 4,
            name: 'Sausan',
            date: '127 Juli 2025',
            rating: 5,
            text: 'Seren sangat membantu sekali dalam perencanaan keuangan sehari hari.'
        },
        {
            id: 5,
            name: 'Ade Ali Imron',
            date: '27 Juli 2025',
            rating: 5,
            text: 'Sangat membantu dalam pencatatan keuangan apalagi saya sebagai driver gojek yg setiap harinya berhubungan dengan ewallet serta tunai.'
        },
        {
            id: 6,
            name: 'Prima Putra',
            date: '23 Juli 2025',
            rating: 5,
            text: 'Sangat membantu budgeting dan simple.'
        },
        {
            id: 7,
            name: 'Olivia Rasyid',
            date: '23 Juli 2025',
            rating: 5,
            text: 'Sangat membantu untuk mencatat pengeluaran dan pemasukan mantap.'
        },
        {
            id: 8,
            name: 'Putri Eka Andryanthi',
            date: '27 Agustus 2025',
            rating: 5,
            text: 'Aplikasi dengan fitur yang lengkap. membantu banget buat ngatur keuangan. thank youuuu babang programmer udah bikin aplikasi nya.'
        },
        {
            id: 9,
            name: 'Nurul Hikmah',
            date: '13 Desember 2025',
            rating: 5,
            text: 'Mudah di pahami ,pokoknya terbaik dari beberapa aplikasi yang pernah ku coba...pertahankan.'
        },
        {
            id: 10,
            name: 'Asep Sumarna',
            date: '10 Januari 2026',
            rating: 5,
            text: 'Aplikasi nya enak diliat, mudah digunakan, update terus ya ka biar makin seruuu.'
        },
        {
            id: 11,
            name: 'Inge Ferdiana',
            date: '9 November 2025',
            rating: 5,
            text: 'Aplikasi simple dan sangat bagus dapat membantu mengetahui posisi keuangan kita, terima kasih.'
        },
        {
            id: 12,
            name: 'Azmiyah Syahidah',
            date: '27 Juli 2025',
            rating: 5,
            text: 'Pas banget lagi cari aplikasi simple buat catat pemasukan dan pengeluaran bulanan.'
        },
        {
            id: 13,
            name: 'Arief Rahman',
            date: '1 Maret 2026',
            rating: 5,
            text: 'Dari sekian banyak aplikasi pencatat keuangan, menurutku ini sangat bagus.'
        },
        {
            id: 14,
            name: 'Kedai Ummuaisyah',
            date: '27 Juli 2025',
            rating: 5,
            text: 'Alhamdulillah, bagus banget aplikasi nya bisa terbantu untuk mengatur keuangan apalagi saya seorang pedagang jadinya terbantu banget, terimakasih.'
        },
        {
            id: 15,
            name: 'Suro',
            date: '8 Februari 2026',
            rating: 5,
            text: 'Aplikasinya Bagus Sekali..Mudah dipahami, Tampilan Bagus dan nyaman diMata..Tidak ada Iklan yang Mengganggu. Pokoknya Bagus dan Bagus Untuk Aplikasi ini.'
        },
        {
            id: 16,
            name: 'Wulan fitria zahra',
            date: '18 Januari 2026',
            rating: 5,
            text: 'Suka banget bener bener sukaa, bisa di pake secara Offline soalnya dan apk ini tuh paling gampang di pahami daripada yang lain dan warna ya bikin mata saya ga sakit,cocok sekali.'
        },
        {
            id: 17,
            name: 'Mila Amelia',
            date: '2 Agustus 2025',
            rating: 5,
            text: 'Aplikasi sangat membantu untuk melihat pengeluara dan pemasukkan keuangan jadi bisa handle pengeluaran selain itu data tersimpan dengan rapih tanpa ada drama dicatat dibuku kalau hilang tidak ada backupan. Design menarik, mudah dipahami untuk user yg baru, keren gen z bisa buat aplikasi ini, mungkin tambahnya ada fitur baru yg lebih menarik lagi.'
        },
        {
            id: 18,
            name: 'M.Fazrul Rahman F',
            date: '4 Mei 2026',
            rating: 5,
            text: 'Bagus banget mudah dipakai dan banyak fitur nya, update terus ya min fitur fitur terbaru nya.'
        },
        {
            id: 19,
            name: 'Wulandari Nur Syifatulloh',
            date: '22 Februari 2026',
            rating: 5,
            text: 'Suka banget dengan aplikasi ini, baik tampilan lama, maupun yang baru saya suka desainnya, bermanfaat sekali untuk budgeting.'
        },
        {
            id: 20,
            name: 'Mohammad Arief',
            date: '22 Februari 2026',
            rating: 5,
            text: 'Aplikasinya bagus mudah digunakan juga developer selalu melakukan update sehingga terasa dari tampilan awal yang sederhana menjadi sekarang yang sangat luar biasa eye catching, mantaap Dev. Semoga sukses selalu.'
        },
        {
            id: 21,
            name: 'luthfia',
            date: '7 Mei 2026',
            rating: 5,
            text: 'Bagus banget dari ui ux nya, plus gak ada iklan. terima kasih untuk tim developer kembangin terus app nya.'
        },
        {
            id: 22,
            name: 'Amrina Ara',
            date: '3 April 2026',
            rating: 5,
            text: 'The one and only, aplikasi yang sesuai ekspektasi aku banget.. sampe dulu kepikiran buat app yang sesuai keinginan fiturnya ketemu sama catat uang, lovee banyak2 dehh.'
        },
        {
            id: 23,
            name: 'Dikdik Hernadi',
            date: '26 April 2026',
            rating: 5,
            text: 'Dari sekian banyak aplikasi serupa, baru kali ini menu nya komplit sesuai dengan yang di harapkan... mudah simpel terorganisasi dengan baik, josss.'
        },
        {
            id: 24,
            name: 'Vivian Dewi',
            date: '25 Februari 2026',
            rating: 5,
            text: 'Semenjak diupdate per 25 feb gila bagus bangetttt. kalau boleh tambah saran, selain aset dan utang/piutang, boleh ditambah kolom investasi kak. jujur pake apk ini dari awal banget sampe sekarang bener2 kerasa banget updatenyaaa.'
        },
        {
            id: 25,
            name: 'Tia Milati Hanifa',
            date: '21 Februari 2026',
            rating: 5,
            text: 'Bagus banget, mudah di gunakan. walaupun beberapa kali ada iklan, tapi masih okke. Dari pertama instal udah beberapa kali pembaruan apk menjadi lebih bagus dan rapih.'
        },
        {
            id: 26,
            name: 'Masykur',
            date: '24 Februari 2026',
            rating: 5,
            text: 'Aplikasi catatan keuangan yang sangat bagus,sudah banyak aplikasi sudah saya coba tapi baru kali ini nemu aplikasi yang cocok,mudah dipahami,ada pengaturan bahasa indonesianya,bisa scan nota,dll. mudah2an kedepannya lebih lengkap lagi bisa singkron dengan ewallet atau bank di indonesia.'
        },
        {
            id: 27,
            name: 'Adeeb Fahim',
            date: '17 Maret 2026',
            rating: 5,
            text: "Fancy. Easy to understand the feature (I'm 17 btw) def a pick for those who want to save money. Salam dari Malaysia."
        },
        {
            id: 28,
            name: 'Ikhwan Muhammad',
            date: '27 Juli 2025',
            rating: 5,
            text: 'Thanks! This app is very helpful for me.'
        },
        {
            id: 29,
            name: 'Kartika Wulandari',
            date: '7 Mei 2026',
            rating: 5,
            text: 'Aku udah coba banyak aplikasi pencatatan dari yang gratis sampai yang bayar bertahun-tahun. Aplikasi ini jadi satu-satunya yang paling aku suka dari segi fitur dan tampilan. Harga langganan nya juga gak begitu mahal. Pokoknya bagus.'
        },
        {
            id: 30,
            name: 'Faris Fadhlullah',
            date: '13 Maret 2026',
            rating: 5,
            text: 'Aplikasi tersopan Makin kesini makin nyenengin lho. Pengennya ttp pakai Catat Uang aja, ga perlu ganti ke app lain.'
        },
        {
            id: 31,
            name: 'Aliya Nur Cahya',
            date: '22 Februari 2026',
            rating: 5,
            text: 'Baguss banget kak, app catat uang yang paling aku suka. sedikit saran kak tambahin fitur uang pinjam dan yang dipinjamkan, soalnya kadang uang ada yang diluar.'
        },
        {
            id: 32,
            name: 'Fathan',
            date: '12 November 2025',
            rating: 5,
            text: 'SUKAA BANGET SAMA MONEY TRACKER INI, LENGKAP BANGET. Saranku si tambahin fitur tabungan yaa, kebetulan gaada di app nya hehehe, jadi aga susah ngatur kalau mau nabung, makasii.'
        },
        {
            id: 33,
            name: 'Ardissa Lathifah',
            date: '24 Agustus 2025',
            rating: 5,
            text: 'Cukup simple dalam penggunaannya, ditunggu fitur-fitur membantu lainnya. Good job!'
        },
        {
            id: 34,
            name: 'Ahmad Ilham',
            date: '24 Agustus 2025',
            rating: 5,
            text: 'Sangat membantu saya dalam mencatat pengeluaran dan pemasukan karena fiturnya yang mudah dimengerti.'
        },
        {
            id: 35,
            name: 'Hafidz Mufarrijal Hammi',
            date: '27 Juli 2025',
            rating: 5,
            text: 'UI dan UX nya sangat memudahkan. Sangat cocok untuk gen Z dan gen sandwich yang sulit mengatur keuangan.'
        },
        {
            id: 36,
            name: 'Demo Susanto',
            date: '27 Juli 2025',
            rating: 5,
            text: 'Mantepp nihh bisa nyatet keluar masuk nya duit gw. Jadi aman income sama expenses. GG puhhh.'
        },
        {
            id: 37,
            name: 'Adam Ikhsan',
            date: '23 Juli 2025',
            rating: 5,
            text: 'Membantu mencatat pengeluaran harian, jadi bisa manage keuangan lebih baik, otw financial freedom.'
        },


    ];

    // Fungsi mendeteksi posisi scroll agar dot otomatis menyesuaikan saat di-swipe
    const handleScroll = () => {
        if (sliderRef.current) {
            const scrollLeft = sliderRef.current.scrollLeft;
            // Mengambil lebar satu kartu + jarak gap (20px mobile / 30px desktop)
            const gap = window.innerWidth >= 768 ? 30 : 20;
            const cardWidth = sliderRef.current.children[0].offsetWidth + gap;

            // Menghitung index aktif berdasarkan posisi scroll
            const newIndex = Math.round(scrollLeft / cardWidth);
            setActiveIndex(newIndex);
        }
    };

    // Fungsi saat tombol panah atau dot navigasi diklik
    const scrollToSlide = (index) => {
        if (sliderRef.current) {
            const gap = window.innerWidth >= 768 ? 30 : 20;
            const cardWidth = sliderRef.current.children[0].offsetWidth + gap;

            sliderRef.current.scrollTo({
                left: index * cardWidth,
                behavior: 'smooth'
            });
            setActiveIndex(index);
        }
    };

    const RenderStars = ({ count }) => {
        return (
            <div className="star-rating">
                {[...Array(5)].map((_, index) => (
                    <svg
                        key={index}
                        viewBox="0 0 24 24"
                        fill={index < count ? "#FFC107" : "#E0E0E0"}
                        className="star-icon"
                    >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                ))}
            </div>
        );
    };

    return (
        <section className="testimonial-section" id="testimoni">
            <div className="testimonial-container">
                <div className="testimonial-header">
                    <h2 className="text-display-secondary">
                        {t('testimonials.title')}
                    </h2>
                    <p className="text-body-large testimonial-subtitle">
                        {t('testimonials.subtitle')}
                    </p>
                </div>
                <div className="testimonial-slider-wrapper">
                    <button
                        className="slider-arrow arrow-left"
                        onClick={() => scrollToSlide(Math.max(activeIndex - 1, 0))}
                        aria-label="Previous"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>
                    {/* Tambahkan onScroll event ke slider */}
                    <div className="testimonial-slider" ref={sliderRef} onScroll={handleScroll}>
                        {testimonials.map((testi) => (
                            <div key={testi.id} className="testimonial-card">
                                <div className="testi-user-info">
                                    <div className="testi-avatar">
                                        {testi.name.charAt(0)}
                                    </div>
                                    <div className="testi-meta">
                                        <h4 className="testi-name">{testi.name}</h4>
                                        <span className="testi-date">{testi.date}</span>
                                    </div>
                                </div>
                                <RenderStars count={testi.rating} />
                                <p className="testi-text">{testi.text}</p>
                            </div>
                        ))}
                    </div>
                    <button
                        className="slider-arrow arrow-right"
                        onClick={() => scrollToSlide(Math.min(activeIndex + 1, testimonials.length - 1))}
                        aria-label="Next"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>
                </div>
                {/* --- NAVIGASI DOTS (PAGINATION) --- */}
                <div className="testimonial-dots">
                    {testimonials.slice(0, 20).map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => scrollToSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;