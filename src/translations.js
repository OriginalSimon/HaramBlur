// Language dictionary containing translations for English and Arabic
const getTranslations = (settings) => {
    return {
        en: {
            // English translations
            "#settings": "Settings",
            "#blurryStart": "Blur media on load:",
            ".tooltiptext":
                "When enabled, all images and videos will be blurred by default until detection starts.",
            "#blurAmount": `
			Blur Amount:
			<span id="blur-amount-value">${settings.blurAmount}%</span>
		`,
            "#grayscale": "Grayscale:",
            "#strictness": `Strictness:
		<span id="strictness-value">${settings.strictness * 100}%</span>
		`,
            "#mediaToBlur": "Media to Blur",
            "#blurImages": "Images",
            "#blurVideos": "Videos",
            "#facesToBlur": "Faces to Blur",
            "#blurMale": "Male",
            "#blurFemale": "Female",
            "#unblurOnHover": "Unblur on hover",
            "#unblurImages": "Images",
            "#unblurVideos": "Videos",
            ".refresh": " (requires page refresh):",
            "#refresh-message": "Refresh the page to see the changes.",
            ".bmc-btn-text": "Support the project",
            ".feedback": `
			<span> We love to hear your feedback through our </span> <a href="https://forms.gle/mDDjh44MKRVemWX86" target="_blank">Form</a> or 
			<a href="mailto:md.alganzory@gmail.com" target="_blank">Email</a> ❤️
			`,
            "#whitelist-desc": `
				<p id="whitelist-desc"> Detection is 
				<span id="whitelist-status-on" class="blue-text"> On </span> 
				<span id="whitelist-status-off" class="red-text hidden" > Off </span> 
				for this website </p>
			`,
        },
        ar: {
            // Arabic translations
            "#settings": "الإعدادات",
            "#blurryStart": "تشويش الوسائط مسبقا:",
            ".tooltiptext":
                "عند تفعيل هذا الخيار سيتم تشويش جميع الصور ومقاطع الفيديو مسبقا حتى يبدأ الكشف.",
            "#blurAmount": `
			كمية التشويش:
			<span id="blur-amount-value">${settings.blurAmount}%</span>
		`,
            "#grayscale": "رمادي:",
            "#strictness": `الدقة:
		<span id="strictness-value">${settings.strictness * 100}%</span>
		`,
            "#mediaToBlur": "الوسائط التي يجب تشويشها",
            "#blurImages": "الصور",
            "#blurVideos": "مقاطع الفيديو",
            "#facesToBlur": "الوجوه التي يجب تشويشها",
            "#blurMale": "الذكور",
            "#blurFemale": "الإناث",
            "#unblurOnHover": "إلغاء التشويش عند المرور بالمؤشر ",
            "#unblurImages": "الصور",
            "#unblurVideos": "مقاطع الفيديو",
            ".refresh": " (يتطلب إعادة تحميل الصفحة):",
            "#refresh-message": "أعد تحميل الصفحة لترى التغييرات.",
            ".bmc-btn-text": "دعم المشروع",
            ".feedback": `
			<span> نحب أن نسمع رأيك عبر </span> <a href="https://forms.gle/mDDjh44MKRVemWX86" target="_blank">الاستمارة</a> أو 
			<a href="mailto:md.alganzory@gmail.com" target="_blank">البريد الإلكتروني</a> ❤️
			`,
            "#whitelist-desc": `
				<p id="whitelist-desc"> الفحص 
				<span id="whitelist-status-on" class="blue-text"> مفعل </span> 
				<span id="whitelist-status-off" class="red-text hidden" > معطل </span> 
				لهذا الموقع </p>
			`,
        },
        // turkish
        tr: {
            "#settings": "Ayarlar",
            "#blurryStart": "Yüklenirken bulanıklaştır",
            ".tooltiptext":
                "Etkinleştirildiğinde, tüm resimler ve videolar, algılama başlayana kadar varsayılan olarak bulanıklaştırılır.",
            "#blurAmount": `
			Bulanıklaştırma seviyesi:
			<span id="blur-amount-value">${settings.blurAmount}%</span>
		`,
            "#grayscale": "Grileştir:",
            "#strictness": `Katılık:
		<span id="strictness-value">${settings.strictness * 100}%</span>
		`,
            "#mediaToBlur": "Bulanıklaştırılacak medya",
            "#blurImages": "Resimler",
            "#blurVideos": "Videolar",
            "#facesToBlur": "Bulanıklaştırılacak yüzler",
            "#blurMale": "Erkek",
            "#blurFemale": "Kadın",
            "#unblurOnHover": "Üzerine gelindiğinde bulanıklığı kaldır",
            "#unblurImages": "Resimler",
            "#unblurVideos": "Videolar",
            ".refresh": " (sayfa yenileme gerektirir):",
            "#refresh-message": "Değişiklikleri görmek için sayfayı yenile.",
            ".bmc-btn-text": "Projeyi destekle",
            ".feedback": `
			<span> Geri dönüşlerinizi </span> <a href="https://forms.gle/mDDjh44MKRVemWX86" target="_blank">Form</a> ve
			<a href="mailto:md.alganzory@gmail.com" target="_blank">E-mail</a> yoluyla bize bildirin.❤️
			`,
            "#whitelist-desc": `
				<p id="whitelist-desc"> Bu web sitesi için algılama
				<span id="whitelist-status-on" class="blue-text"> Açık </span> 
				<span id="whitelist-status-off" class="red-text hidden" > Kapalı </span> 
				</p>
			`,
        },
        //urdu
        ur: {
            "#settings": "ترتیبات",
            "#blurryStart": "لوڈ پر میڈیا کو دھندلا کرنا:",
            ".tooltiptext":
                "فعال ہونے پر، شناخت شروع ہونے تک تمام تصاویر اور ویڈیوز بطور ڈیفالٹ دھندلی ہو جائیں گی۔",
            "#blurAmount": `
			بلر کی مقدار:
			<span id="blur-amount-value">${settings.blurAmount}%</span>
		`,
            "#grayscale": "مٹیالا پیمانہ:",
            "#strictness": `سختی:
		<span id="strictness-value">${settings.strictness * 100}%</span>
		`,
            "#mediaToBlur": "میڈیا کو دھندلا کرنا",
            "#blurImages": "تصاویر",
            "#blurVideos": "ویڈیوز",
            "#facesToBlur": "چہرے کو دھندلا کرنا",
            "#blurMale": "مرد",
            "#blurFemale": "عورت",
            "#unblurOnHover": "ہوور پر دھندلا پن ختم کریں",
            "#unblurImages": "تصاویر",
            "#unblurVideos": "ویڈیوز",
            ".refresh": " (صفحہ ریفریش کی ضرورت ہے):",
            "#refresh-message": "تبدیلیاں دیکھنے کے لیے صفحہ کو ریفریش کریں۔",
            ".bmc-btn-text": "منصوبے کی حمایت کریں",
            ".feedback": `
			<span> میں اپنے فارم کے ذریعے آپ کی رائے سننا پسند ہے </span> <a href="https://forms.gle/mDDjh44MKRVemWX86" target="_blank"></a> ve
			<a href="mailto:md.alganzory@gmail.com" target="_blank">E-mail</a> ای میل.❤️
			`,
            "#whitelist-desc": `
				<p id="whitelist-desc"> کھوج ہے
				<span id="whitelist-status-on" class="blue-text"> جلنا </span> 
				<span id="whitelist-status-off" class="red-text hidden" > بند </span> 
				</p>
			`,
        },
        // Ukrainian translations
        uk: {
            "#settings": "Налаштування",
            "#blurryStart": "Розмивати медіа при завантаженні:",
            ".tooltiptext": "Якщо увімкнено, всі зображення та відео будуть розмиті за замовчуванням, поки не почнеться розпізнавання.",
            "#blurAmount": `
            Рівень розмиття:
            <span id="blur-amount-value">${settings.blurAmount}%</span>
            `,
            "#grayscale": "Чорно-білий режим:",
            "#strictness": `Рівень суворості:
            <span id="strictness-value">${settings.strictness * 100}%</span>
            `,
            "#mediaToBlur": "Медіа для розмиття",
            "#blurImages": "Зображення",
            "#blurVideos": "Відео",
            "#facesToBlur": "Обличчя для розмиття",
            "#blurMale": "Чоловічі",
            "#blurFemale": "Жіночі",
            "#unblurOnHover": "При наведенні прибрати розмиття",
            "#unblurImages": "Зображення",
            "#unblurVideos": "Відео",
            ".refresh": " (потрібне перезавантаження сторінки):",
            "#refresh-message": "Оновіть сторінку, щоб побачити зміни.",
            ".bmc-btn-text": "Підтримати проєкт",
            ".feedback": `
            <span> Нам важливо почути вашу думку через </span> <a href="https://forms.gle/mDDjh44MKRVemWX86" target="_blank">форму</a> або 
            <a href="mailto:md.alganzory@gmail.com" target="_blank">Email</a> ❤️
            `,
            "#whitelist-desc": `
            <p id="whitelist-desc"> Виявлення 
            <span id="whitelist-status-on" class="blue-text"> Увімкнено </span> 
            <span id="whitelist-status-off" class="red-text hidden"> Вимкнено </span> 
            для цього сайту </p>
            `,
        },
        // Russian translations
        ru: {
            "#settings": "Настройки",
            "#blurryStart": "Размывать медиа при загрузке:",
            ".tooltiptext": "Если включено, все изображения и видео будут размыты по умолчанию, пока не начнётся распознавание.",
            "#blurAmount": `
            Уровень размытия:
            <span id="blur-amount-value">${settings.blurAmount}%</span>
            `,
            "#grayscale": "Чёрно-белый режим:",
            "#strictness": `Строгость:
            <span id="strictness-value">${settings.strictness * 100}%</span>
            `,
            "#mediaToBlur": "Медиа для размытия",
            "#blurImages": "Изображения",
            "#blurVideos": "Видео",
            "#facesToBlur": "Лица для размытия",
            "#blurMale": "Мужские",
            "#blurFemale": "Женские",
            "#unblurOnHover": "Убрать размытие при наведении",
            "#unblurImages": "Изображения",
            "#unblurVideos": "Видео",
            ".refresh": " (требуется обновление страницы):",
            "#refresh-message": "Обновите страницу, чтобы увидеть изменения.",
            ".bmc-btn-text": "Поддержать проект",
            ".feedback": `
            <span> Нам важно ваше мнение, напишите нам через </span> <a href="https://forms.gle/mDDjh44MKRVemWX86" target="_blank">форму</a> или 
            <a href="mailto:md.alganzory@gmail.com" target="_blank">Email</a> ❤️
            `,
            "#whitelist-desc": `
            <p id="whitelist-desc"> Обнаружение 
            <span id="whitelist-status-on" class="blue-text"> Включено </span> 
            <span id="whitelist-status-off" class="red-text hidden"> Выключено </span> 
            для этого сайта </p>
            `,
        },
    };
};

const HB_TRANSLATIONS_DIR = {
    en: "ltr",
    tr: "ltr",
    ar: "rtl",
    ur: "rtl",
    uk: "ltr",
    ru: "ltr",
};
