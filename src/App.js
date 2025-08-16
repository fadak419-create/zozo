import React from 'react';
import './App.css';
import { FaGlobe, FaMobileAlt, FaStore, FaPalette, FaPaperPlane, FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Zainab Teah</h1>
      <p>تصميم وتطوير صفحات الويب، تطبيقات الجوال، المتاجر الإلكترونية، والخدمات الإبداعية</p>
    </header>
  );
}

function Services() {
  const services = [
    { icon: <FaGlobe />, title: 'تصميم مواقع الويب', desc: 'مواقع حديثة وعصرية تتناسب مع هوية مشروعك وتجذب عملاءك.' },
    { icon: <FaMobileAlt />, title: 'تطوير تطبيقات الجوال', desc: 'تطبيقات ذكية لأجهزة الأندرويد وiOS لتوسيع حضورك الرقمي.' },
    { icon: <FaStore />, title: 'إنشاء المتاجر الإلكترونية', desc: 'متاجر سهلة الاستخدام، آمنة وجاهزة للبيع عبر الإنترنت بسرعة وفعالية.' },
    { icon: <FaPalette />, title: 'خدمات التصميم الإبداعي', desc: 'تصاميم جذابة لشعارات، بطاقات، ومحتوى رقمي يعكس علامتك التجارية.' },
  ];

  return (
    <section className="services">
      <h2>خدماتنا</h2>
      <div className="services-grid">
        {services.map((s, idx) => (
          <div className="service-card" key={idx}>
            {s.icon}
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Portfolio() {
  const items = [
    { img: 'https://via.placeholder.com/400x300.png?text=تطبيق+1', title: 'تطبيق جوال مبتكر' },
    { img: 'https://via.placeholder.com/400x300.png?text=برنامج+2', title: 'برنامج لإدارة المشاريع' },
    { img: 'https://via.placeholder.com/400x300.png?text=تطبيق+3', title: 'تطبيق تواصل اجتماعي' },
    { img: 'https://via.placeholder.com/400x300.png?text=برنامج+4', title: 'برنامج إنتاجية ذكي' },
  ];

  return (
    <section className="portfolio">
      <h2>أعمالنا - التطبيقات والبرامج</h2>
      <div className="portfolio-grid">
        {items.map((item, idx) => (
          <div className="portfolio-item" key={idx}>
            <img src={item.img} alt={item.title} />
            <div className="overlay">{item.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact">
      <h2>تواصل معنا</h2>
      <form>
        <input type="text" placeholder="الاسم الكامل" required />
        <input type="email" placeholder="البريد الإلكتروني" required />
        <textarea placeholder="اكتب رسالتك هنا..." required />
        <button type="submit"><FaPaperPlane /> إرسال الرسالة</button>
      </form>
      <div className="contact-links">
        <a href="mailto:contact@zainabteah.com"><FaEnvelope /> راسلنا</a>
        <a href="tel:+9647713003137"><FaPhone /> اتصل بنا</a>
        <a href="https://wa.me/9647713003137" target="_blank"><FaWhatsapp /> واتساب مباشر</a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>تابعنا على وسائل التواصل الاجتماعي</p>
      <div className="social-links">
        <a href="#">فيسبوك</a>
        <a href="#">إنستغرام</a>
        <a href="#">لينكدإن</a>
      </div>
      <p>&copy; 2025 Zainab Teah</p>
    </footer>
  );
}

export default App;