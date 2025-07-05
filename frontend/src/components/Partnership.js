import React, { useState } from 'react';

function Partnership({ darkMode, language }) {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    partnershipType: '',
    message: ''
  });

  const translations = {
    id: {
      title: "Partnership",
      subtitle: "Mari Bersinergi untuk Budaya Indonesia",
      description: "Pelestarian budaya adalah kerja kolosal yang membutuhkan kolaborasi. KAYANA membuka pintu seluas-luasnya bagi institusi pemerintah (Pariwisata, Dekranasda), perusahaan melalui program CSR, komunitas, media, dan NGO untuk bersinergi. Mari bersama-sama membangun ekosistem yang berkelanjutan untuk kerajinan dan budaya Indonesia. Hubungi kami untuk menjajaki peluang kemitraan.",
      partnershipTypes: "Jenis Kemitraan",
      partnershipList: [
        {
          title: "Corporate CSR Partnership",
          description: "Bermitra dengan perusahaan untuk program CSR yang bermakna dan terukur dampaknya",
          benefits: [
            "Program CSR yang autentik dan bermakna",
            "Dokumentasi lengkap untuk laporan sustainability",
            "Keterlibatan karyawan dalam program volunteering",
            "Branding positif melalui pelestarian budaya"
          ],
          icon: "🏢"
        },
        {
          title: "Institusi Pemerintah",
          description: "Kemitraan dengan Dekranasda, Dinas Pariwisata, dan instansi terkait",
          benefits: [
            "Mendukung program pemberdayaan UMKM",
            "Promosi pariwisata budaya daerah",
            "Dokumentasi warisan budaya",
            "Pelatihan dan pemberdayaan masyarakat"
          ],
          icon: "🏛️"
        },
        {
          title: "Institusi Pendidikan",
          description: "Kolaborasi dengan sekolah, universitas, dan lembaga penelitian",
          benefits: [
            "Program edukasi budaya untuk siswa",
            "Penelitian dan dokumentasi tradisi",
            "Praktik kerja dan magang mahasiswa",
            "Workshop dan seminar budaya"
          ],
          icon: "🎓"
        },
        {
          title: "Media & Komunitas",
          description: "Bersinergi dengan media massa dan komunitas kreatif",
          benefits: [
            "Konten multimedia berkualitas tinggi",
            "Jangkauan audiens yang lebih luas",
            "Storytelling yang autentik",
            "Event dan festival budaya"
          ],
          icon: "📺"
        },
        {
          title: "NGO & Organisasi Sosial",
          description: "Kolaborasi dengan LSM dan organisasi nirlaba",
          benefits: [
            "Program pemberdayaan masyarakat",
            "Advokasi pelestarian budaya",
            "Capacity building untuk pengrajin",
            "Sustainable development goals"
          ],
          icon: "🤝"
        },
        {
          title: "Hospitality & Tourism",
          description: "Kemitraan dengan hotel, resort, dan industri pariwisata",
          benefits: [
            "Pengalaman budaya autentik untuk tamu",
            "Produk souvenir eksklusif",
            "Workshop dan aktivitas budaya",
            "Dekorasi dan interior dengan nilai budaya"
          ],
          icon: "🏨"
        }
      ],
      currentPartners: "Partner Kami Saat Ini",
      partners: [
        {
          name: "Dinas Pariwisata Kaltara",
          type: "Pemerintah",
          collaboration: "Promosi wisata budaya dan pemberdayaan pengrajin"
        },
        {
          name: "PT Indofood Sukses Makmur",
          type: "Corporate CSR",
          collaboration: "Program pemberdayaan ekonomi masyarakat lokal"
        },
        {
          name: "Universitas Borneo Tarakan",
          type: "Pendidikan",
          collaboration: "Penelitian dan dokumentasi budaya Dayak"
        },
        {
          name: "Alila Hotels & Resorts",
          type: "Hospitality",
          collaboration: "Pengalaman budaya autentik untuk tamu hotel"
        }
      ],
      howToPartner: "Bagaimana Memulai Kemitraan?",
      steps: [
        {
          number: "01",
          title: "Konsultasi Awal",
          description: "Diskusikan tujuan dan ekspektasi kemitraan bersama tim KAYANA"
        },
        {
          number: "02",
          title: "Penyusunan Proposal",
          description: "Kami akan menyusun proposal kemitraan yang sesuai dengan kebutuhan"
        },
        {
          number: "03",
          title: "Penandatanganan MoU",
          description: "Formalisasi kemitraan melalui penandatanganan nota kesepahaman"
        },
        {
          number: "04",
          title: "Implementasi Program",
          description: "Melaksanakan program kemitraan dengan monitoring berkala"
        }
      ],
      contactForm: "Formulir Kontak Partnership",
      name: "Nama Lengkap",
      organization: "Organisasi/Perusahaan",
      email: "Email",
      partnershipType: "Jenis Kemitraan",
      message: "Pesan",
      submit: "Kirim Proposal",
      selectType: "Pilih jenis kemitraan..."
    },
    en: {
      title: "Partnership",
      subtitle: "Let's Synergize for Indonesian Culture",
      description: "Cultural preservation is colossal work that requires collaboration. KAYANA opens its doors wide for government institutions (Tourism, Dekranasda), companies through CSR programs, communities, media, and NGOs to synergize. Let's together build a sustainable ecosystem for Indonesian crafts and culture. Contact us to explore partnership opportunities.",
      partnershipTypes: "Partnership Types",
      partnershipList: [
        {
          title: "Corporate CSR Partnership",
          description: "Partner with companies for meaningful and measurable CSR programs",
          benefits: [
            "Authentic and meaningful CSR programs",
            "Complete documentation for sustainability reports",
            "Employee involvement in volunteering programs",
            "Positive branding through cultural preservation"
          ],
          icon: "🏢"
        },
        {
          title: "Government Institutions",
          description: "Partnership with Dekranasda, Tourism Office, and related agencies",
          benefits: [
            "Support MSME empowerment programs",
            "Promote regional cultural tourism",
            "Cultural heritage documentation",
            "Community training and empowerment"
          ],
          icon: "🏛️"
        },
        {
          title: "Educational Institutions",
          description: "Collaboration with schools, universities, and research institutions",
          benefits: [
            "Cultural education programs for students",
            "Research and tradition documentation",
            "Student internships and work practice",
            "Cultural workshops and seminars"
          ],
          icon: "🎓"
        },
        {
          title: "Media & Communities",
          description: "Synergize with mass media and creative communities",
          benefits: [
            "High-quality multimedia content",
            "Wider audience reach",
            "Authentic storytelling",
            "Cultural events and festivals"
          ],
          icon: "📺"
        },
        {
          title: "NGO & Social Organizations",
          description: "Collaboration with NGOs and non-profit organizations",
          benefits: [
            "Community empowerment programs",
            "Cultural preservation advocacy",
            "Capacity building for craftsmen",
            "Sustainable development goals"
          ],
          icon: "🤝"
        },
        {
          title: "Hospitality & Tourism",
          description: "Partnership with hotels, resorts, and tourism industry",
          benefits: [
            "Authentic cultural experiences for guests",
            "Exclusive souvenir products",
            "Cultural workshops and activities",
            "Decoration and interior with cultural value"
          ],
          icon: "🏨"
        }
      ],
      currentPartners: "Our Current Partners",
      partners: [
        {
          name: "North Kalimantan Tourism Office",
          type: "Government",
          collaboration: "Cultural tourism promotion and craftsman empowerment"
        },
        {
          name: "PT Indofood Sukses Makmur",
          type: "Corporate CSR",
          collaboration: "Local community economic empowerment program"
        },
        {
          name: "Borneo Tarakan University",
          type: "Education",
          collaboration: "Dayak culture research and documentation"
        },
        {
          name: "Alila Hotels & Resorts",
          type: "Hospitality",
          collaboration: "Authentic cultural experiences for hotel guests"
        }
      ],
      howToPartner: "How to Start Partnership?",
      steps: [
        {
          number: "01",
          title: "Initial Consultation",
          description: "Discuss partnership goals and expectations with KAYANA team"
        },
        {
          number: "02",
          title: "Proposal Development",
          description: "We will develop a partnership proposal that suits your needs"
        },
        {
          number: "03",
          title: "MoU Signing",
          description: "Formalize partnership through memorandum of understanding signing"
        },
        {
          number: "04",
          title: "Program Implementation",
          description: "Execute partnership programs with regular monitoring"
        }
      ],
      contactForm: "Partnership Contact Form",
      name: "Full Name",
      organization: "Organization/Company",
      email: "Email",
      partnershipType: "Partnership Type",
      message: "Message",
      submit: "Send Proposal",
      selectType: "Select partnership type..."
    }
  };

  const t = translations[language];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:halo.iswansyah@gmail.com?subject=Partnership Proposal - ${formData.partnershipType}&body=Nama: ${formData.name}%0AOrganisasi: ${formData.organization}%0AEmail: ${formData.email}%0AJenis Kemitraan: ${formData.partnershipType}%0APesan: ${formData.message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className={`min-h-screen pt-24 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Hero Section */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-green-800 to-emerald-800'}`}>
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {t.title}
          </h1>
          <h2 className="text-2xl md:text-3xl text-green-200 mb-8">
            {t.subtitle}
          </h2>
          <p className="text-xl text-green-100 max-w-4xl mx-auto leading-relaxed">
            {t.description}
          </p>
        </div>
      </section>

      {/* Partnership Types */}
      <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-6">
          <h2 className={`text-4xl font-bold text-center mb-16 ${darkMode ? 'text-white' : 'text-green-900'}`}>
            {t.partnershipTypes}
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {t.partnershipList.map((partnership, index) => (
              <div key={index} className={`partnership-card p-8 rounded-3xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-br from-green-50 to-emerald-50'}`}>
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">
                    {partnership.icon}
                  </div>
                  <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-green-900'}`}>
                    {partnership.title}
                  </h3>
                </div>
                <p className={`text-lg mb-6 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-green-700'}`}>
                  {partnership.description}
                </p>
                <div>
                  <h4 className={`font-semibold mb-3 ${darkMode ? 'text-white' : 'text-green-900'}`}>
                    {language === 'id' ? 'Manfaat:' : 'Benefits:'}
                  </h4>
                  <ul className="space-y-2">
                    {partnership.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className={`flex items-start ${darkMode ? 'text-gray-300' : 'text-green-700'}`}>
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-b from-green-50 to-white'}`}>
        <div className="container mx-auto px-6">
          <h2 className={`text-4xl font-bold text-center mb-16 ${darkMode ? 'text-white' : 'text-green-900'}`}>
            {t.currentPartners}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.partners.map((partner, index) => (
              <div key={index} className={`partner-card text-center p-6 rounded-3xl hover:shadow-xl transition-all duration-300 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
                <div className={`w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-white font-bold text-xl">
                    {partner.name.charAt(0)}
                  </span>
                </div>
                <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-green-900'}`}>
                  {partner.name}
                </h3>
                <div className={`text-sm px-3 py-1 rounded-full inline-block mb-3 ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-green-100 text-green-700'}`}>
                  {partner.type}
                </div>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-green-700'}`}>
                  {partner.collaboration}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Partner */}
      <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-6">
          <h2 className={`text-4xl font-bold text-center mb-16 ${darkMode ? 'text-white' : 'text-green-900'}`}>
            {t.howToPartner}
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {t.steps.map((step, index) => (
                <div key={index} className={`step-card text-center p-6 rounded-3xl hover:shadow-xl transition-all duration-300 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-br from-green-50 to-emerald-50'}`}>
                  <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">
                      {step.number}
                    </span>
                  </div>
                  <h3 className={`text-lg font-bold mb-3 ${darkMode ? 'text-white' : 'text-green-900'}`}>
                    {step.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-green-700'}`}>
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-b from-green-50 to-white'}`}>
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className={`text-4xl font-bold text-center mb-8 ${darkMode ? 'text-white' : 'text-green-900'}`}>
              {t.contactForm}
            </h2>
            
            <form onSubmit={handleSubmit} className={`p-8 rounded-3xl shadow-lg ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
              <div className="space-y-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-green-700'}`}>
                    {t.name}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-4 focus:ring-green-300 ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-green-200 text-green-900'}`}
                  />
                </div>
                
                <div>
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-green-700'}`}>
                    {t.organization}
                  </label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-4 focus:ring-green-300 ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-green-200 text-green-900'}`}
                  />
                </div>
                
                <div>
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-green-700'}`}>
                    {t.email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-4 focus:ring-green-300 ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-green-200 text-green-900'}`}
                  />
                </div>
                
                <div>
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-green-700'}`}>
                    {t.partnershipType}
                  </label>
                  <select
                    name="partnershipType"
                    value={formData.partnershipType}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-4 focus:ring-green-300 ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-green-200 text-green-900'}`}
                  >
                    <option value="">{t.selectType}</option>
                    <option value="Corporate CSR">Corporate CSR Partnership</option>
                    <option value="Government">Institusi Pemerintah</option>
                    <option value="Education">Institusi Pendidikan</option>
                    <option value="Media">Media & Komunitas</option>
                    <option value="NGO">NGO & Organisasi Sosial</option>
                    <option value="Hospitality">Hospitality & Tourism</option>
                  </select>
                </div>
                
                <div>
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-green-700'}`}>
                    {t.message}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    required
                    className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-4 focus:ring-green-300 ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-green-200 text-green-900'}`}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  {t.submit}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Partnership;