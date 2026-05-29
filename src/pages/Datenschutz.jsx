/* =========================================
   🖼️ Datenschutz 页面
   ========================================= */
export default function Datenschutz() {
  return (
    <div className="bg-background text-white min-h-screen px-20 py-0">
      <section className="py-16">
        {/* 内容容器：居中，限制最大宽度，两侧留出合理间距 */}
        <div className="max-w-3xl mx-auto">
          {/* 大标题：保持和其他页面统一的样式，未做修改 */}
          <h1 className="font-serif text-3xl md:text-4xl font-light tracking-wide text-white uppercase mb-10">
            Datenschutzerklärung
          </h1>

          {/* 1. Verantwortlicher */}
          <div>
            {/* 小标题：字号再缩小1个等级，从text-lg md:text-xl调整为text-base md:text-lg，无粗体 */}
            <h2 className="text-base md:text-lg text-white mb-4 mt-8">1. Verantwortlicher</h2>
            {/* 正文：保持之前调整后的小字号 */}
            <p className="text-gray-300 leading-relaxed text-sm mb-4">
              Verantwortlich für diese Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
            </p>
            <p className="text-gray-300 leading-relaxed text-sm">
              Werkquartier Baugruppe<br/>
              [Adresse]<br/>
              info@werkquartier-dietenbach.de
            </p>
          </div>

          <div className="border-b border-gray-700 my-8"></div>

          {/* 2. Allgemeine Hinweise zur Datenverarbeitung */}
          <div>
            <h2 className="text-base md:text-lg text-white mb-4 mt-8">2. Allgemeine Hinweise zur Datenverarbeitung</h2>
            <p className="text-gray-300 leading-relaxed text-sm mb-4">
              Der Schutz Ihrer persönlichen Daten ist uns wichtig. Personenbezogene Daten werden auf dieser Website nur im technisch notwendigen Umfang verarbeitet.
            </p>
            <p className="text-gray-300 leading-relaxed text-sm mb-4">
              Diese Website dient ausschließlich der allgemeinen Information über das Projekt „WerkQuartier“.
            </p>
            <p className="text-gray-300 leading-relaxed text-sm">
              Es werden keine Benutzerkonten angelegt, keine Newsletter angeboten und keine personenbezogenen Daten aktiv über Formulare erhoben oder gespeichert.
            </p>
          </div>

          <div className="border-b border-gray-700 my-8"></div>

          {/* 3. Hosting und Server-Logfiles */}
          <div>
            <h2 className="text-base md:text-lg text-white mb-4 mt-8">3. Hosting und Server-Logfiles</h2>
            <p className="text-gray-300 leading-relaxed text-sm mb-4">
              Beim Besuch dieser Website werden durch den Hosting-Anbieter automatisch technische Informationen erfasst und temporär in sogenannten Server-Logfiles gespeichert. Dies umfasst insbesondere:
            </p>
            <ul className="text-gray-300 leading-relaxed text-sm pl-5 space-y-1 mb-4">
              <li>IP-Adresse</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>aufgerufene Seiten</li>
              <li>Browsertyp und Browserversion</li>
              <li>Betriebssystem</li>
              <li>Referrer-URL</li>
            </ul>
            <p className="text-gray-300 leading-relaxed text-sm mb-4">
              Die Verarbeitung erfolgt zur Gewährleistung der technischen Sicherheit und Stabilität der Website.
            </p>
            <p className="text-gray-300 leading-relaxed text-sm">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen erfolgt nicht.
            </p>
          </div>

          <div className="border-b border-gray-700 my-8"></div>

          {/* 4. Kontaktaufnahme per E-Mail */}
          <div>
            <h2 className="text-base md:text-lg text-white mb-4 mt-8">4. Kontaktaufnahme per E-Mail</h2>
            <p className="text-gray-300 leading-relaxed text-sm mb-4">
              Auf dieser Website besteht die Möglichkeit, über einen E-Mail-Link Kontakt aufzunehmen.
            </p>
            <p className="text-gray-300 leading-relaxed text-sm">
              Wenn Sie uns per E-Mail kontaktieren, werden die von Ihnen übermittelten personenbezogenen Daten (z. B. Name, E-Mail-Adresse und Inhalt der Nachricht) ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.
            </p>
            <p className="text-gray-300 leading-relaxed text-sm">
              Eine Weitergabe an Dritte erfolgt nicht.
            </p>
          </div>

          <div className="border-b border-gray-700 my-8"></div>

          {/* 5. SSL- bzw. TLS-Verschlüsselung */}
          <div>
            <h2 className="text-base md:text-lg text-white mb-4 mt-8">5. SSL- bzw. TLS-Verschlüsselung</h2>
            <p className="text-gray-300 leading-relaxed text-sm">
              Diese Website verwendet aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Dadurch können übertragene Inhalte nicht von Dritten mitgelesen werden.
            </p>
          </div>

          <div className="border-b border-gray-700 my-8"></div>

          {/* 6. Ihre Rechte */}
          <div>
            <h2 className="text-base md:text-lg text-white mb-4 mt-8">6. Ihre Rechte</h2>
            <p className="text-gray-300 leading-relaxed text-sm mb-4">
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf:
            </p>
            <ul className="text-gray-300 leading-relaxed text-sm pl-5 space-y-1 mb-4">
              <li>Auskunft über Ihre gespeicherten Daten</li>
              <li>Berichtigung unrichtiger Daten</li>
              <li>Löschung Ihrer Daten</li>
              <li>Einschränkung der Verarbeitung</li>
              <li>Widerspruch gegen die Verarbeitung</li>
              <li>Datenübertragbarkeit</li>
            </ul>
            <p className="text-gray-300 leading-relaxed text-sm">
              Außerdem steht Ihnen ein Beschwerderecht bei der zuständigen Datenschutzaufsichtsbehörde zu.
            </p>
          </div>

          <div className="border-b border-gray-700 my-8"></div>

          {/* 7. Änderungen dieser Datenschutzerklärung */}
          <div>
            <h2 className="text-base md:text-lg text-white mb-4 mt-8">7. Änderungen dieser Datenschutzerklärung</h2>
            <p className="text-gray-300 leading-relaxed text-sm">
              Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen, damit sie den aktuellen rechtlichen Anforderungen entspricht.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
