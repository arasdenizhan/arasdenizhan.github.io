import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      name: "Denizhan Aras",
      aboutTitle: "About",
      job: "Software Engineer",
      about:
        "Experienced Software Engineer specializing in building robust, scalable backend systems using Java & Spring technologies. Designed and developed high-performance platforms in banking, payments, SAP integrations, and online gambling across regulated European markets. Expert in cloud-native microservices architectures, utilizing Docker, Kubernetes, and secure APIs with Spring Security, OAuth2, and JWT. Hands-on experience with distributed systems and event-driven architectures, leveraging Apache Kafka, RabbitMQ, and Redis in production. Committed to CI/CD, observability, and DevOps best practices for smooth delivery and maintainable systems.",
      contactTitle: "Contact",
      educationTitle: "Education",
      experienceTitle: "Work Experience",
      skillsTitle: "Skills",
      university: "Electrical and Electronics Engineering",
      projectsTitle: "Projects",
      yktExperienceTitle: "Full-Stack Software Engineer",
      yktExperienceTime: "11.2024 - Current / Istanbul, Turkey",
      yktExperience:
        "Led the architecture and development of a scalable, secure in-house treasury platform for a major Turkish bank, replacing a third-party tool. Designed and implemented Backend, Backend-for-Frontend (BFF), and Frontend layers following modern microservices and microfrontend principles. Created normalized relational database schemas ensuring data integrity and performance. Fixed critical issues in the bank's custom Redis library and developed a reusable configuration adopted company-wide. Maintained over 95% test coverage with integration, functional, and unit tests, ensuring code quality and zero vulnerabilities. Mentored and led a small team of software engineers to deliver high-quality solutions.",
      ballysExperienceTitle: "Software Engineer",
      ballysExperienceTime: "09.2022 - 11.2024 / Tallinn, Estonia",
      ballysExperience:
        "Built high-performance, multi-threaded audit jobs and integrated KYC services to streamline player verification for Spain’s gambling regulator. Migrated a legacy monolithic Java Spring service to a scalable microservices architecture supporting 750K+ monthly users. Developed frontend features using React and TypeScript to enhance user experience. Created real-time Splunk dashboards and automated alerts to speed up incident response. Contributed to a $4B+ annual payment platform by designing Backend, Backend-for-Frontend (BFF), and microservices layers with Java Spring Boot. Integrated major payment providers, secured services with JWT and Spring Security, and managed full transaction lifecycle with robust error handling.",
      solviaExperinceTitle: "Java Developer",
      solviaExperinceTime: "09.2021 - 09.2022 / Istanbul, Turkey",
      solviaExperince:
        "Played a key role integrating Invoice and Ledger services handling up to 1 million daily requests in a high-throughput system. Engineered scalable, modular backend solutions with Spring Boot, Hibernate, and Maven. Designed enterprise-grade APIs (OData, REST, SOAP) and implemented strong security with Spring Security, OAuth 2.0, and JWT. Used MongoDB, PostgreSQL, and Redis for efficient data management. Integrated Apache CMIS and Azure Blob Storage for scalable document handling. Containerized with Docker and orchestrated microservices using Kubernetes. Architected a custom concurrent operations framework to speed up microservice responses and improve system performance.",
      slimvalidator:
        "Created Slim Validator, an open-source, lightweight, and extensible Java validation framework focused on simplicity, speed, and flexibility. Published on Maven Central. Provides annotations like @NotNull, @Email, @Min, and supports custom validators for easy object validation in Java applications.",
      workInProgress: "Work in progress..",
      warconomy:
        "Warconomy is a browser-based online strategy game focused on the defense industry, combining economic management and military expansion mechanics. Developed using Java (Spring Boot) and modern web technologies, the game allows players to build factories, research technologies, produce military units, and engage in battles while managing resources and logistics. Designed for scalability and multiplayer interaction, the project emphasizes real-time strategic decisions and complex production chains within a competitive environment.",
    },
  },
  tr: {
    translation: {
      name: "Denizhan Aras",
      job: "Yazılım Mühendisi",
      aboutTitle: "Hakkımda",
      about:
        "Deneyimli bir Yazılım Mühendisiyim. Java ve Spring ekosistemi kullanarak güçlü ve ölçeklenebilir arka uç sistemleri geliştiriyorum. Banka, ödeme sistemleri, SAP entegrasyonları ve online oyun sektörleri gibi düzenlemelere tabi Avrupa pazarlarında yüksek performanslı platformlar tasarladım ve geliştirdim. Docker, Kubernetes ve Spring Security, OAuth2, JWT tabanlı güvenli API’lerle bulut tabanlı mikroservis mimarilerinde uzmanım. Apache Kafka, RabbitMQ ve Redis gibi teknolojilerle dağıtık sistemler ve olay güdümlü mimariler üzerinde uygulamalı deneyime sahibim. Ayrıca CI/CD, gözlemlenebilirlik ve DevOps en iyi uygulamalarını sistemlerin sorunsuz teslimi ve sürdürülebilirliği için uyguluyorum.",
      contactTitle: "İletişim",
      educationTitle: "Eğitim",
      experienceTitle: "İş Deneyimi",
      skillsTitle: "Yetenekler",
      university: "Elektrik ve Elektronik Mühendisliği",
      projectsTitle: "Projeler",
      yktExperienceTitle: "Full-Stack Yazılım Mühendisi",
      yktExperienceTime: "11.2024 - Hala / Istanbul, Türkiye",
      yktExperience:
        "Büyük bir Türk bankası için üçüncü parti bir aracı kaldırarak ölçeklenebilir ve güvenli bir şirket içi hazine platformunun mimarisini ve geliştirilmesini yönettim. Modern microservices ve microfrontend prensiplerine uygun Backend, Backend-for-Frontend (BFF) ve Frontend katmanlarını tasarlayıp hayata geçirdim. Veri bütünlüğü ve performansı garanti eden normalleştirilmiş ilişkisel veritabanı şemaları oluşturdum. Bankanın özel Redis kütüphanesindeki kritik hataları giderip, tüm mühendislik ekiplerinde kullanılan yeniden kullanılabilir bir yapı geliştirdim. Entegrasyon, fonksiyonel ve birim testlerle %95’in üzerinde test kapsamı sağlayarak yüksek kod kalitesi ve sıfır güvenlik açığı hedefledim. Küçük bir yazılım ekibine mentorluk yapıp teknik liderlik ederek kaliteli çözümler teslim ettim.",
      ballysExperienceTitle: "Yazılım Mühendisi",
      ballysExperienceTime: "09.2022 - 11.2024 / Tallin, Estonya",
      ballysExperience:
        "İspanya kumar düzenleyici kurumunun oyuncu doğrulama süreçlerini desteklemek için yüksek performanslı, çoklu iş parçacıklı audit işleri geliştirdim ve KYC hizmetlerini entegre ettim. Legacy monolitik Java Spring servisini, aylık 750.000'den fazla kullanıcıya hizmet veren ölçeklenebilir microservices mimarisine taşıdım. Kullanıcı deneyimini artırmak için React ve TypeScript ile frontend geliştirmeleri yaptım. Gerçek zamanlı Splunk panoları ve otomatik uyarılar tasarlayarak olay müdahale süresini kısalttım. Yıllık 4 milyar dolar üzerinde işlem hacmi olan ödeme platformuna, Java Spring Boot ile Backend, Backend-for-Frontend (BFF) ve microservices katmanlarını tasarlayarak katkıda bulundum. Önemli ödeme sağlayıcılarını entegre ettim, JWT ve Spring Security ile servis güvenliğini sağladım ve işlem döngüsünün tamamını sağlam hata yönetimi ile yönettim.",
      solviaExperinceTitle: "Java Geliştirici",
      solviaExperinceTime: "09.2021 - 09.2022 / Istanbul, Türkiye",
      solviaExperince:
        "Yüksek performanslı bir sistemde, günlük 1 milyona kadar istek işleyen Fatura ve Defter hizmetlerinin entegrasyonunda kilit rol oynadım. Spring Boot, Hibernate ve Maven kullanarak ölçeklenebilir, modüler backend çözümleri geliştirdim. Kurumsal düzeyde API’ler (OData, REST, SOAP) tasarladım ve Spring Security, OAuth 2.0 ile JWT kullanarak güçlü güvenlik sağladım. MongoDB, PostgreSQL ve Redis ile verimli veri yönetimi yaptım. Ölçeklenebilir belge yönetimi için Apache CMIS ve Azure Blob Storage entegrasyonu gerçekleştirdim. Docker ile containerlaştırma ve Kubernetes ile mikroservisleri orkestre ettim. Mikroservislerin yanıt sürelerini hızlandırmak için özel bir eşzamanlı operasyonlar çerçevesi tasarladım ve sistem performansını artırdım.",
      slimvalidator:
        "Slim Validator adlı açık kaynaklı, hafif ve genişletilebilir bir Java doğrulama kütüphanesi geliştirdim. Maven Central üzerinde yayınlandı. Basitlik, hız ve esneklik odaklıdır. @NotNull, @Email, @Min gibi anotasyonları destekler ve özel doğrulayıcılarla Java uygulamalarında nesne doğrulamasını kolaylaştırır.",
      workInProgress: "Yapım Aşamasında..",
      warconomy:
        "Warconomy, savunma sanayi odaklı, ekonomi yönetimi ile askeri genişleme mekaniklerini birleştiren tarayıcı tabanlı çevrimiçi bir strateji oyunudur. Java (Spring Boot) ve modern web teknolojileri kullanılarak geliştirilen oyunda oyuncular fabrikalar kurup teknolojiler araştırarak askeri birimler üretebilir, kaynak yönetimi ve lojistik yaparken savaşlara katılabilir. Çok oyunculu yapıya ve ölçeklenebilirliğe uygun olarak tasarlanan projede, rekabetçi ortamda gerçek zamanlı stratejik kararlar ve karmaşık üretim zincirleri ön plandadır.",
    },
  },
  et: {
    translation: {
      name: "Denizhan Aras",
      job: "Tarkvarainsener",
      aboutTitle: "Minust",
      about:
        "Olen kogenud tarkvaraarendaja, kes loob usaldusväärseid ja skaleeritavaid taustasüsteeme kasutades Java ja Spring ökosüsteemi. Olen projekteerinud ja arendanud kõrgjõudluslikke platvorme sellistes valdkondades nagu pangandus, makselahendused, SAP integratsioonid ja online hasartmängud Euroopa reguleeritud turgudel. Spetsialiseerun pilvepõhiste mikroteenuste arhitektuuridele, kasutades Dockeri, Kubernetesi ning turvalisi API-sid koos Spring Security, OAuth2 ja JWT lahendustega. Mul on praktiline kogemus hajussüsteemide ja sündmuspõhiste arhitektuuride alal, kasutades tootmiskeskkondades Apache Kafka, RabbitMQ ja Redis tehnoloogiaid. Samuti rakendan CI/CD, jälgitavuse ja DevOps parimaid tavasid, et tagada süsteemide sujuv töö ja lihtne hooldatavus.",
      contactTitle: "Kontakt",
      educationTitle: "Haridus",
      experienceTitle: "Töökogemus",
      skillsTitle: "Oskused",
      university: "Elektrotehnika ja elektroonika",
      projectsTitle: "Projektid",
      yktExperienceTitle: "Full-Stack Tarkvarainsener",
      yktExperienceTime: "11.2024 - Praegu / Istanbul, Türgi",
      yktExperience:
        "Juhtisin skaleeritava ja turvalise ettevõttesisese riigikassa platvormi arhitektuuri ja arendust suurele Türgi pangale, asendades kolmanda osapoole tööriista. Kujundasin ja rakendasin Backend, Backend-for-Frontend (BFF) ja Frontend kihid, järgides kaasaegseid mikroteenuste ja mikrofrontendide põhimõtteid. Loodud normaliseeritud relatsioonandmebaasi skeemid tagasid andmete terviklikkuse ja jõudluse. Lahendasin panga kohandatud Redis'i teegis kriitilised vead ning töötasin välja taaskasutatava konfiguratsiooni, mida kasutatakse kogu ettevõttes. Hoidsin üle 95% testikattuvuse integratsiooni-, funktsionaalse ja üksustestidega, tagades kõrge koodikvaliteedi ja null turvaaugud. Mentorlustasin ja juhtisin väikest tarkvaraarendajate tiimi, et pakkuda kvaliteetseid lahendusi.",
      ballysExperienceTitle: "Tarkvarainsener",
      ballysExperienceTime: "09.2022 - 11.2024 / Tallinn, Eesti",
      ballysExperience:
        "Lõin Hispaania hasartmängude reguleeriva asutuse mängijate tuvastamiseks kõrge jõudlusega mitme lõimelised audititööd ja integreerisin KYC teenuseid. Migrisin pärandi monoliitse Java Spring teenuse skaleeritavale mikroteenuste arhitektuurile, mis toetab üle 750 000 igakuist kasutajat. Arendasin kasutajakogemuse parandamiseks Reacti ja TypeScriptiga frontend-funktsioone. Lõin reaalajas Splunki juhtpaneelid ja automatiseeritud hoiatused, mis kiirendasid intsidentidele reageerimist. Panustasin üle 4 miljardi dollari aastakäibega makseplatvormi, kujundades Java Spring Bootiga Backend, Backend-for-Frontend (BFF) ja mikroteenuste kihte. Integreerisin peamised makseteenuse pakkujad, tagasin teenuste turvalisuse JWT ja Spring Security abil ning juhtisin kogu tehingute elutsüklit tugevate veahaldusstrateegiatega.",
      solviaExperinceTitle: "Java Arendaja",
      solviaExperinceTime: "09.2021 - 09.2022 / Istanbul, Türgi",
      solviaExperince:
        "Mängisin võtmerolli arve ja pearaamatu teenuste integreerimisel, mis töötleb kuni miljonit päringut päevas kõrge läbilaskevõimega süsteemis. Töötasin välja skaleeritavad ja moodulipõhised backend-lahendused, kasutades Spring Booti, Hibernate'i ja Maveni. Kujundasin ettevõtte tasemel API-sid (OData, REST, SOAP) ning rakendasin tugeva turvalisuse Spring Security, OAuth 2.0 ja JWT abil. Kasutasin MongoDB-d, PostgreSQL-i ja Redis-it efektiivseks andmehalduseks. Integreerisin Apache CMIS ja Azure Blob Storage skaleeritava dokumendihalduse jaoks. Kasutasin Dockerit konteineriseerimiseks ja Kubernetesit mikroteenuste orkestreerimiseks. Kavandasin kohandatud samaaegsete operatsioonide raamistikku mikroteenuste vastuste kiirendamiseks ja süsteemi jõudluse parandamiseks.",
      slimvalidator:
        "Lõin Slim Validatori – avatud lähtekoodiga, kerge ja laiendatava Java valideerimisraamistiku, mis keskendub lihtsusele, kiirusele ja paindlikkusele. Avaldatud Maven Central’is. Toetab annotatsioone nagu @NotNull, @Email ja @Min ning võimaldab luua kohandatud valideerijaid, et lihtsustada objektide valideerimist Java rakendustes.",
      workInProgress: "Töös",
      warconomy:
        "Warconomy on veebipõhine online-strateegiamäng, mis keskendub kaitsetööstusele, ühendades majanduse juhtimise ja sõjalise laienemise mehhanismid. Mäng on arendatud Java (Spring Boot) ja kaasaegsete veebitehnoloogiate abil. Mängijad saavad rajada tehaseid, uurida tehnoloogiaid, toota sõjalisi üksusi ja osaleda lahingutes, samal ajal hallates ressursse ja logistikat. Projekt on loodud mitmikmängu ja skaleeritavust silmas pidades, rõhutades reaalajas strateegilisi otsuseid ja keerukaid tootmisahelaid konkurentsikeskkonnas.",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
