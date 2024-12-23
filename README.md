# React E-Ticaret Uygulaması

Bu proje, **React** kullanılarak geliştirilmiş bir e-ticaret uygulamasıdır. Projede, ürün listeleme, kategorilere göre filtreleme, ürün detay görüntüleme ve sepete ürün ekleme gibi temel e-ticaret işlevleri bulunmaktadır.

## Özellikler

- **React Router DOM** kullanılarak sayfalar arası geçiş.
- **Redux** ile global state yönetimi.
- **Tailwind CSS** ile modern ve duyarlı tasarım.
- **FakeStore API** entegrasyonu ile dinamik veri kullanımı.
- **React Slick** ile ana sayfada slider.
- Ürün fiyatlarını artan veya azalan şekilde sıralama.
- Ürünleri kategorilere göre filtreleme.
- **React Paginate** ile sayfalama.
- Sepete ürün ekleme ve **LocalStorage** ile verilerin saklanması.

## Kurulum

Projeyi kendi bilgisayarınızda çalıştırmak için aşağıdaki adımları izleyin:

### Gereksinimler

- Node.js (v14+)
- Git

### Adımlar

1. Depoyu klonlayın:

   ```bash
   git clone https://github.com/semihgullboy/react-ecommerce-app.git
   cd react-ecommerce-app
   ```

2. Gerekli bağımlılıkları yükleyin:

   ```bash
   npm install
   ```

3. Projeyi başlatın:

   ```bash
   npm run dev
   ```

4. Tarayıcınızda [http://localhost:5173](http://localhost:5173) adresine giderek projeyi görüntüleyin.

## Kullanılan Teknolojiler

- **React**: Kullanıcı arayüzü geliştirme.
- **Redux**: Global state yönetimi.
- **React Router DOM**: Sayfa yönlendirme.
- **Tailwind CSS**: Modern ve duyarlı tasarım.
- **FakeStore API**: Ürün verilerinin alınması.
- **React Slick**: Slider oluşturma.
- **React Paginate**: Sayfalama işlevi.

## Proje Yapısı

```
src/
├── assets/           # Statik dosyalar
├── components/       # Yeniden kullanılabilir bileşenler
├── pages/            # Sayfa bileşenleri
├── redux/            # Redux slice ve store dosyaları
├── utils/            # Yardımcı fonksiyonlar
├── App.jsx           # Uygulama ana dosyası
├── main.jsx          # Uygulama giriş noktası
└── index.css         # CSS stilleri
```