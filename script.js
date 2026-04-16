// Language translations
const translations = {
    de: {
        // Navigation
        'nav-home': 'Startseite',
        'nav-about': 'Nähere Infos zu mir',
        'nav-practice': 'Rechtsgebiete',
        'nav-contact': 'Kontakt',
        'working-hours': 'Öffnungszeiten',
        'lawyer-name': 'Dr. Guedjev',
        'lawyer-title': 'Rechtsanwalt',
        
        // Hero Section
        'hero-title': 'Willkommen auf der Website des Rechtsanwalts Dr. Lubomir Guedjev!',
        'hero-subtitle': 'Erfahrener Rechtsanwalt mit über 15 Jahren Erfahrung in verschiedenen Rechtsgebieten. Ich biete professionelle und persönliche Rechtsberatung für Privatpersonen und Unternehmen.',
        'feature-experience': '15+ Jahre Erfahrung',
        'feature-cases': 'Erfolgreiche Fälle',
        'feature-consultation': 'Persönliche Beratung',
        'cta-button': 'Kostenlose Beratung',
        
        // About Section
        'about-title': 'Nähere Infos zu mir',
        'about-text-1': '<strong>Dr. Lubomir N. Guedjev</strong><br><br>ist als Rechtsanwalt in Wiesbaden (Deutschland) und Plovdiv (Bulgarien) tätig. Schwerpunktmäßig arbeitet er im Arbeitsrecht, (internationalen) Familien- und Erbrecht sowie im (internationalen) Steuerrecht.<br><br>Zu seinen familien-und erbrechtlichen Publikationen gehören:<br><br><ol><li>Das Internationale Familienrecht Bulgariens, 1. Aufl. 2020, Mohr Siebeck (Verlag), 519 Seiten</li><li>Rembert Süß, Erbrechtlichen Europa, 5. Aufl. 2024, Zerb (Verlag), 1824 Seiten, Länderbericht: Bulgarien</li><li>Rembert Süß/Gerhard Ring, Eherecht in Europa, 4. Aufl. 2020, Zerb (Verlag), 1632 Seiten, Länderbericht: Bulgarien.</li></ol>',
        'about-text-2': 'Rechtsanwalt Dr. Guedjev studierte Rechtswissenschaften an der Friedrich-Alexander Universität Erlangen-Nürnberg und an der Plovdiver Universität Paisii Hilendarski und promovierte an der Technischen Universität Dresden.',
        'stat-500': '500+',
        'stat-15': '15+',
        'stat-98': '98%',
        'stat-cases': 'Erfolgreiche Fälle',
        'stat-experience': 'Jahre Erfahrung',
        'stat-satisfaction': 'Zufriedene Kunden',
        
        // Practice Areas
        'practice-title': 'Rechtsgebiete',
        'practice-labor': 'Arbeitsrecht',
        'practice-labor-desc': 'Vertretung in arbeitsrechtlichen Streitigkeiten, Kündigungsschutz und Arbeitsvertragsgestaltung.',
        'practice-family': 'Familienrecht',
        'practice-family-desc': 'Begleitung bei Scheidungen, Sorgerechtsfragen und Unterhaltsregelungen.',
        'practice-inheritance': 'Erbrecht',
        'practice-inheritance-desc': 'Testamentsgestaltung, Erbauseinandersetzung und erbrechtliche Beratung.',
        'practice-tax': 'Steuerrecht',
        'practice-tax-desc': 'Beratung bei steuerrechtlichen Fragestellungen, Betriebsprüfungen und Steueroptimierung.',
        
        // Form Options
        'option-default': 'Rechtsgebiet auswählen',
        'option-labor': 'Arbeitsrecht',
        'option-family': 'Familienrecht',
        'option-inheritance': 'Erbrecht',
        'option-tax': 'Steuerrecht',
        
        // Contact Section
        'contact-title': 'Kontakt',
        'address': 'Adresse',
        'phone': 'Telefon',
        'email': 'E-Mail',
        'fax': 'Fax',
        'hours': 'Öffnungszeiten',
        'form-title': 'Rückruf anfordern',
        'name-placeholder': 'Ihr Name',
        'email-placeholder': 'Ihre E-Mail',
        'phone-placeholder': 'Ihre Telefonnummer',
        'practice-select': 'Rechtsgebiet auswählen',
        'message-placeholder': 'Beschreiben Sie Ihr Anliegen',
        'submit-button': 'Nachricht senden',
        'map-placeholder': 'Google Maps wird hier eingebettet',
        'map-location': 'Theodorenstraße 7, 65189 Wiesbaden',
        
        // Working Hours
        'hours-title': 'Öffnungszeiten',
        'hours-weekdays': 'Montag - Freitag:',
        'hours-saturday': 'Samstag:',
        'hours-sunday': 'Sonntag:',
        'hours-closed': 'Geschlossen',
        'hours-weekdays-time': '09:00 - 12:00 und 14:00 - 17:00',
        'hours-saturday-time': '9:00 - 13:00',
        'hours-contact-short': 'Mo-Fr: 09:00 - 12:00 und 14:00 - 17:00',
        'hours-contact-saturday': 'Sa: 9:00 - 13:00',
        
        // Footer
        'footer-description': 'Professionelle Rechtsberatung in Berlin',
        'footer-contact-title': 'Kontakt',
        'footer-address': 'Theodorenstraße 7',
        'footer-city': '65189 Wiesbaden',
        'footer-phone': '+49 (0) 611 790 67 078',
        'footer-fax': '+49 (0) 611 790 66 862',
        'footer-practice-title': 'Rechtsgebiete',
        'footer-labor': 'Arbeitsrecht',
        'footer-family': 'Familienrecht',
        'footer-inheritance': 'Erbrecht',
        'footer-tax': 'Steuerrecht',
        'privacy-button': 'Datenschutz',
        'privacy-heading': 'Datenschutz',
        'privacy-close': 'Schließen',
        'privacy-content': 'Wir nehmen den Schutz personenbezogener Daten sehr ernst und möchten, dass Sie sich beim Besuch unserer Internetseiten sicher fühlen. Wir verarbeiten persönliche Daten, die beim Besuch unserer Webseiten erhoben werden, gemäß den gesetzlichen Bestimmungen, insbesondere des Bundesdatenschutzgesetzes (BDSG) und des Telemediengesetzes (TMG).<br><br><strong>1. Name und Kontaktdaten des für die Verarbeitung Verantwortlichen sowie des betrieblichen Datenschutzbeauftragten</strong><br><br>Diese Datenschutzhinweise gelten für die Datenverarbeitung durch:<br><br><strong>Verantwortlicher:</strong> Rechtsanwalt Dr. Lubomir N. Guedjev, Theodorenstraße 7 in 65189 Wiesbaden, eMail: post@dr-guedjev.de, Telefon: +49 (0) 611 790 67 078 Fax: +49 (0) 611 790 66 862.<br><br><strong>2. Erhebung und Speicherung personenbezogener Daten sowie Art und Zweck von deren Verwendung</strong><br><br><strong>a) Beim Besuch der Website</strong><br><br>Beim Aufrufen unserer Website www.dr-guedjev.de werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser automatisch Informationen an den Server unserer Website gesendet. Diese Informationen werden temporär in einem sog. Logfile gespeichert. Folgende Informationen werden dabei ohne Ihr Zutun erfasst und bis zur automatisierten Löschung gespeichert:<br><ul><li>IP-Adresse des anfragenden Rechners,</li><li>Datum und Uhrzeit des Zugriffs,</li><li>Name und URL der abgerufenen Datei,</li><li>Website, von der aus der Zugriff erfolgt (Referrer-URL),</li><li>verwendeter Browser und ggf das Betriebssystem Ihres Rechners sowie der Name Ihres Access-Providers.</li></ul>Die genannten Daten werden durch uns zu folgenden Zwecken verarbeitet:<br><ul><li>Gewährleistung eines reibungslosen Verbindungsaufbaus der Website,</li><li>Gewährleistung einer komfortablen Nutzung unserer Website,</li><li>Auswertung der Systemsicherheit und -stabilität sowie</li><li>zu weiteren administrativen Zwecken.</li></ul>Die Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 S. 1 lit. f DSGVO. Unser berechtigtes Interesse folgt aus oben aufgelisteten Zwecken zur Datenerhebung. In keinem Fall verwenden wir die erhobenen Daten zu dem Zweck, Rückschlüsse auf Ihre Person zu ziehen.<br><br>Darüber hinaus setzen wir beim Besuch unserer Website Cookies sowie Analysedienste ein. Nähere Erläuterungen dazu erhalten Sie unter den Ziff. 4 und 5 dieser Datenschutzerklärung.<br><br><strong>b) Bei Nutzung unseres Kontaktformulars</strong><br><br>Bei Fragen jeglicher Art bieten wir Ihnen die Möglichkeit, mit uns über ein auf der Website bereitgestelltes Formular Kontakt aufzunehmen. Dabei ist die Angabe einer gültigen eMail-Adresse erforderlich, damit wir wissen, von wem die Anfrage stammt und um diese beantworten zu können. Weitere Angaben können freiwillig getätigt werden.<br><br>Die Datenverarbeitung zum Zwecke der Kontaktaufnahme mit uns erfolgt nach Art. 6 Abs. 1 S. 1 lit. a DSGVO auf Grundlage Ihrer freiwillig erteilten Einwilligung.<br><br>Die für die Benutzung des Kontaktformulars von uns erhobenen personenbezogenen Daten werden nach Erledigung der von Ihnen gestellten Anfrage automatisch gelöscht.<br><br><strong>3. Weitergabe von Daten</strong><br><br>Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den im Folgenden aufgeführten Zwecken findet nicht statt.<br><br>Wir geben Ihre persönlichen Daten nur an Dritte weiter, wenn:<br><ul><li>Sie Ihre nach Art. 6 Abs. 1 S. 1 lit. a DSGVO ausdrückliche Einwilligung dazu erteilt haben,</li><li>die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. f DSGVO zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist und kein Grund zur Annahme besteht, dass Sie ein überwiegendes schutzwürdiges Interesse an der Nichtweitergabe Ihrer Daten haben,</li><li>für den Fall, dass für die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. c DSGVO eine gesetzliche Verpflichtung besteht, sowie</li><li>dies gesetzlich zulässig und nach Art. 6 Abs. 1 S. 1 lit. b DSGVO für die Abwicklung von Vertragsverhältnissen mit Ihnen erforderlich ist.</li></ul><strong>4. Cookies</strong><br><br>Wir setzen auf unserer Seite Cookies ein. Hierbei handelt es sich um kleine Dateien, die Ihr Browser automatisch erstellt und die auf Ihrem Endgerät (Laptop, Tablet, Smartphone o.ä.) gespeichert werden, wenn Sie unsere Seite besuchen. Cookies richten auf Ihrem Endgerät keinen Schaden an, enthalten keine Viren, Trojaner oder sonstige Schadsoftware.<br><br>In dem Cookie werden Informationen abgelegt, die sich jeweils im Zusammenhang mit dem spezifisch eingesetzten Endgerät ergeben. Dies bedeutet jedoch nicht, dass wir dadurch unmittelbar Kenntnis von Ihrer Identität erhalten.<br><br>Der Einsatz von Cookies dient einerseits dazu, die Nutzung unseres Angebots für Sie angenehmer zu gestalten. So setzen wir sogenannte Session-Cookies ein, um zu erkennen, dass Sie einzelne Seiten unserer Website bereits besucht haben. Diese werden nach Verlassen unserer Seite automatisch gelöscht.<br><br>Darüber hinaus setzen wir ebenfalls zur Optimierung der Benutzerfreundlichkeit temporäre Cookies ein, die für einen bestimmten festgelegten Zeitraum auf Ihrem Endgerät gespeichert werden. Besuchen Sie unsere Seite erneut, um unsere Dienste in Anspruch zu nehmen, wird automatisch erkannt, dass Sie bereits bei uns waren und welche Eingaben und Einstellungen sie getätigt haben, um diese nicht noch einmal eingeben zu müssen.<br><br>Zum anderen setzten wir Cookies ein, um die Nutzung unserer Website statistisch zu erfassen und zum Zwecke der Optimierung unseres Angebotes für Sie auszuwerten (siehe Ziff. 5). Diese Cookies ermöglichen es uns, bei einem erneuten Besuch unserer Seite automatisch zu erkennen, dass Sie bereits bei uns waren. Diese Cookies werden nach einer jeweils definierten Zeit automatisch gelöscht.<br><br>Die durch Cookies verarbeiteten Daten sind für die genannten Zwecke zur Wahrung unserer berechtigten Interessen sowie der Dritter nach Art. 6 Abs. 1 S. 1 lit. f DSGVO erforderlich.<br><br>Die meisten Browser akzeptieren Cookies automatisch. Sie können Ihren Browser jedoch so konfigurieren, dass keine Cookies auf Ihrem Computer gespeichert werden oder stets ein Hinweis erscheint, bevor ein neuer Cookie angelegt wird. Die vollständige Deaktivierung von Cookies kann jedoch dazu führen, dass Sie nicht alle Funktionen unserer Website nutzen können.<br><br><strong>5. Analyse-Tools</strong><br><br>Es werden von uns Tracking-Maßnahmen auf Grundlage des Art. 6 Abs. 1 S. 1 lit. f DSGVO durchgeführt. Mit den zum Einsatz kommenden Tracking-Maßnahmen wollen wir eine bedarfsgerechte Gestaltung und die fortlaufende Optimierung unserer Webseite sicherstellen. Zum anderen setzen wir die Tracking-Maßnahmen ein, um die Nutzung unserer Webseite statistisch zu erfassen und zum Zwecke der Optimierung unseres Angebotes für Sie auszuwerten. Diese Interessen sind als berechtigt im Sinne der vorgenannten Vorschrift anzusehen.<br><br><strong>6. Betroffenenrechte</strong><br><br>Sie haben das Recht:<br><ul><li>gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen. Insbesondere können Sie Auskunft über die Verarbeitungszwecke, die Kategorie der personenbezogenen Daten, die Kategorien von Empfängern, gegenüber denen Ihre Daten offengelegt wurden oder werden, die geplante Speicherdauer, das Bestehen eines Rechts auf Berichtigung, Löschung, Einschränkung der Verarbeitung oder Widerspruch, das Bestehen eines Beschwerderechts, die Herkunft ihrer Daten, sofern diese nicht bei uns erhoben wurden, sowie über das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling und ggf. aussagekräftigen Informationen zu deren Einzelheiten verlangen;</li><li>gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen;</li><li>gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen, soweit nicht die Verarbeitung zur Ausübung des Rechts auf freie Meinungsäußerung und Information, zur Erfüllung einer rechtlichen Verpflichtung, aus Gründen des öffentlichen Interesses oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist;</li><li>gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen, soweit die Richtigkeit der Daten von Ihnen bestritten wird, die Verarbeitung unrechtmäßig ist, Sie aber deren Löschung ablehnen und wir die Daten nicht mehr benötigen, Sie jedoch diese zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen benötigen oder Sie gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung eingelegt haben;</li><li>gemäß Art. 20 DSGVO Ihre personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesebaren Format zu erhalten oder die Übermittlung an einen anderen Verantwortlichen zu verlangen;</li><li>gemäß Art. 7 Abs. 3 DSGVO Ihre einmal erteilte Einwilligung jederzeit gegenüber uns zu widerrufen. Dies hat zur Folge, dass wir die Datenverarbeitung, die auf dieser Einwilligung beruhte, für die Zukunft nicht mehr fortführen dürfen und</li><li>gemäß Art. 77 DSGVO sich bei einer Aufsichtsbehörde zu beschweren. In der Regel können Sie sich hierfür an die Aufsichtsbehörde Ihres üblichen Aufenthaltsortes oder Arbeitsplatzes oder unseres Kanzleisitzes wenden.</li></ul><strong>7. Widerspruchsrecht</strong><br><br>Sofern Ihre personenbezogenen Daten auf Grundlage von berechtigten Interessen gemäß Art. 6 Abs. 1 S. 1 lit. f DSGVO verarbeitet werden, haben Sie das Recht, gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten einzulegen, soweit dafür Gründe vorliegen, die sich aus Ihrer besonderen Situation ergeben oder sich der Widerspruch gegen Direktwerbung richtet. Im letzteren Fall haben Sie ein generelles Widerspruchsrecht, das ohne Angabe einer besonderen Situation von uns umgesetzt wird.<br><br>Möchten Sie von Ihrem Widerrufs- oder Widerspruchsrecht Gebrauch machen, genügt eine eMail an post@dr-guedjev.de<br><br><strong>8. Datensicherheit</strong><br><br>Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure Socket Layer) in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird. In der Regel handelt es sich dabei um eine 256 Bit Verschlüsselung. Falls Ihr Browser keine 256-Bit Verschlüsselung unterstützt, greifen wir stattdessen auf 128-Bit v3 Technologie zurück. Ob eine einzelne Seite unseres Internetauftrittes verschlüsselt übertragen wird, erkennen Sie an der geschlossenen Darstellung des Schüssel- beziehungsweise Schloss-Symbols in der unteren Statusleiste Ihres Browsers.<br><br>Wir bedienen uns im Übrigen geeigneter technischer und organisatorischer Sicherheitsmaßnahmen, um Ihre Daten gegen zufällige oder vorsätzliche Manipulationen, teilweisen oder vollständigen Verlust, Zerstörung oder gegen den unbefugten Zugriff Dritter zu schützen. Unsere Sicherheitsmaßnahmen werden entsprechend der technologischen Entwicklung fortlaufend verbessert.<br><br><strong>9. Aktualität und Änderung dieser Datenschutzerklärung</strong><br><br>Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Mai 2018.<br><br>Durch die Weiterentwicklung unserer Website und Angebote darüber oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern.',
        'impressum-button': 'Impressum',
        'impressum-heading': 'Impressum',
        'impressum-content': '<strong>1. Name, Berufsbezeichnung, Anschrift der Niederlassung, Kontaktdaten</strong><br><br>Dr. Lubomir Nikolov Guedjev<br>Rechtsanwalt<br>Theodorenstraße 7<br>65189 Wiesbaden<br>Telefon: + 49 611 790 67 078<br>Telefax: + 49 611 790 66 862<br>eMail: post@dr-guedjev<br><br><strong>2. Steuernummer und Umsatzsteuer-ID</strong><br><br>St.-Nr.: 040/823/34961<br>USt-ID-Nr.:DE 351899389<br><br><strong>3. Berufshaftpflichtversicherung</strong><br><br>HDI Versicherung AG<br>HDI-Platz 1<br>30659 Hannover<br><br><strong>4. Zuständige Rechtsanwaltskammer</strong><br><br>Rechtsanwaltskammer Frankfurt am Main<br>Bockenheimer Anl. 36<br>60322 Frankfurt am Main<br>Telefon: + 49 69 17 00 98 - 01<br>Telefax: +49 69 17 00 98 - 50<br><br><strong>5. Berufliche Regelungen</strong><br><br>Bundesrechtsanwaltsordnung (BRAO)<br>Berufsordnung für Rechtsanwälte (BORA)<br>Fachanwaltsordnung (FAO)<br>Rechtsanwaltsvergütungsgesetz (RVG)<br>Berufsregeln der Rechtsanwälte der Europäischen Union (CCBE)<br>Gesetz über die Tätigkeit europäischer Rechtsanwälte in Deutschland (EuRAG)<br>Anordnung der Bundesrechtsanwaltskammer zum Geldwäschebekämpfungsgesetz<br>Berufsbezeichnung: Rechtsanwalt (Bundesrepublik Deutschland)<br><br>Den genannten Inhalt der berufsrechtlichen Bezeichnungen für Rechtsanwälte finden Sie auf der Internetseite der Bundesrechtsanwaltskammer: www.brak.de unter der Rubrik „Berufsrecht“ (http://www.brak.de/fuer-anwaelte/berufsrecht)<br><br><strong>6. Außergerichtliche Streitschlichtung</strong><br><br>Bei Streitigkeiten zwischen Rechtsanwälten und ihren Auftraggebern besteht auf Antrag die Möglichkeit der außergerichtlichen Streitschlichtung bei der regionalen Rechtsanwaltskammer (§ 73 Abs. 2 Nr. 3 i.V.m. § 73 Abs. 5 BRAO) oder bei der Schlichtungsstelle der Rechtsanwaltschaft bei der Bundesrechtsanwaltskammer (§ 191f BRAO), im Internet zu finden über die Internetseite der Bundesrechtsanwaltskammer ( www.brak.de oder per eMail: schlichtungsstelle@brak.de)<br><br>Zusätzlicher Hinweis im Sinne der Informationsverpflichtung gemäß Art. 14 Abs. 1 der ODR-Verordnung: Die Plattform der EU zur außergerichtlichen online-Streitbeilegung erreichen Sie unter folgendem Link :https://ec.europa.eu/consumers/odr/<br><br><strong>7. Berufsbezeichnung</strong><br><br>Die Berufsbezeichnung „Rechtsanwalt“ wurde in der Bundesrepublik Deutschland verliehen.<br><br><strong>VERANTWORTLICH FÜR DEN INHALT NACH § 55 ABS. 2 RSTV</strong><br><br>Rechtsanwalt Dr. Lubomir N. Guedjev<br><br><strong>Haftung für Inhalte</strong><br><br>Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.<br><br><strong>Urheberrecht</strong><br><br>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen entfernen wir derartige Inhalte umgehend.<br><br>Hinweis nach Verordnung (EU) Nr. 524/2013, Plattform der EU zur außergerichtlichen Online-Streitbeilegung: http://ec.europa.eu/consumers/odr/<br><br><strong>Öffnungszeiten</strong><br><br>Montag – Donnerstag, 10:00–18:00 Uhr',
        'impressum-paragraph-1': '<strong>Angaben gemäß § 5 TMG</strong>',
        'impressum-paragraph-2': 'Rechtsanwalt und Anwalt für Arbeitsrecht<br>Dr. Lubomir Guedjev<br>Theodorenstraße 7<br>65189 Wiesbaden',
        'impressum-paragraph-3': '<strong>Kontakt</strong><br>Telefon: +49 (0) 611 790 67 078<br>E-Mail: post@dr-guedjev.com',
        'impressum-paragraph-4': '<strong>Berufsbezeichnung und zuständige Kammer</strong><br>Rechtsanwalt, Anwalt für Arbeitsrecht',
        'impressum-paragraph-5': '<strong>Umsatzsteuer-ID</strong><br>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: [Umsatzsteuer-ID falls vorhanden]',
        'footer-copyright': '© 2024 Dr. Guedjev Rechtsanwalt. Alle Rechte vorbehalten.'
    },
    bg: {
        // Navigation
        'nav-home': 'Начало',
        'nav-about': 'Повече за мен',
        'nav-practice': 'Правообласти',
        'nav-contact': 'Контакти',
        'working-hours': 'Работно време',
        'lawyer-name': 'Д-р Геджев',
        'lawyer-title': 'Адвокат',
        
        // Hero Section
        'hero-title': 'Добре дошли при Д-р Геджев',
        'hero-subtitle': 'Опитен адвокат с над 15 години опит в различни правни области. Предлагам професионални и лични правни консултации за частни лица и предприятия.',
        'feature-experience': '15+ години опит',
        'feature-cases': 'Успешни случаи',
        'feature-consultation': 'Лична консултация',
        'cta-button': 'Безплатна консултация',
        
        // About Section
        'about-title': 'Повече информация за мен',
        'about-text-1': 'Д-р Геджев е опитен адвокат със седалище в Берлин. След завършване на правото в Хумболтовия университет в Берлин и успешно завършване на втория държавен изпит, той се специализира в различни правни области.',
        'about-text-2': 'С над 15 години практически опит той представлява както частни лица, така и предприятия в сложни правни въпроси. Неговият подход се характеризира с комбинация от солидна правна експертиза и лична грижа.',
        'stat-500': '500+',
        'stat-15': '15+',
        'stat-98': '98%',
        'stat-cases': 'Успешни случаи',
        'stat-experience': 'Години опит',
        'stat-satisfaction': 'Доволни клиенти',
        
        // Practice Areas
        'practice-title': 'Правообласти',
        'practice-labor': 'Трудово право',
        'practice-labor-desc': 'Представителство в трудови спорове, защита при уволнение и трудови договори.',
        'practice-family': 'Семейно право',
        'practice-family-desc': 'Подкрепа при разводи, въпроси за попечителство и уреждане на издръжка.',
        'practice-inheritance': 'Наследствено право',
        'practice-inheritance-desc': 'Завещания, наследствени дела и наследствено право.',
        'practice-tax': 'Данъчно право',
        'practice-tax-desc': 'Консултации по данъчни въпроси, данъчни проверки и оптимизация.',
 
        // Form Options
        'option-default': 'Изберете правообласт',
        'option-labor': 'Трудово право',
        'option-family': 'Семейно право',
        'option-inheritance': 'Наследствено право',
        'option-tax': 'Данъчно право',
        
        // Contact Section
        'contact-title': 'Контакти',
        'address': 'Адрес',
        'phone': 'Телефон',
        'email': 'Имейл',
        'fax': 'Факс',
        'hours': 'Работно време',
        'form-title': 'Заявете обратно обаждане',
        'name-placeholder': 'Вашето име',
        'email-placeholder': 'Вашият имейл',
        'phone-placeholder': 'Вашият телефон',
        'practice-select': 'Изберете правообласт',
        'message-placeholder': 'Опишете вашия проблем',
        'submit-button': 'Изпрати съобщение',
        'map-placeholder': 'Google Maps ще бъде вградено тук',
        'map-location': 'Теодоренщрасе 7, 65189 Висбаден',
        
        // Working Hours
        'hours-title': 'Работно време',
        'hours-weekdays': 'Понеделник - Петък:',
        'hours-saturday': 'Събота:',
        'hours-sunday': 'Неделя:',
        'hours-closed': 'Затворено',
        'hours-weekdays-time': '09:00 - 12:00 и 14:00 - 17:00',
        'hours-saturday-time': '9:00 - 13:00',
        'hours-contact-short': 'Пн-Пт: 09:00 - 12:00 и 14:00 - 17:00',
        'hours-contact-saturday': 'Сб: 9:00 - 13:00',
        
        // Footer
        'footer-description': 'Професионални правни консултации в Берлин',
        'footer-contact-title': 'Контакти',
        'footer-address': 'Теодоренщрасе 7',
        'footer-city': '65189 Висбаден',
        'footer-phone': '+49 (0) 611 790 67 078',
        'footer-fax': '+49 (0) 611 790 66 862',
        'footer-practice-title': 'Правообласти',
        'footer-labor': 'Трудово право',
        'footer-family': 'Семейно право',
        'footer-inheritance': 'Наследствено право',
        'footer-tax': 'Данъчно право',
        'privacy-button': 'Защита на данните',
        'privacy-heading': 'Защита на данните',
        'privacy-close': 'Затвори',
        'privacy-content': 'Wir nehmen den Schutz personenbezogener Daten sehr ernst und möchten, dass Sie sich beim Besuch unserer Internetseiten sicher fühlen. Wir verarbeiten persönliche Daten, die beim Besuch unserer Webseiten erhoben werden, gemäß den gesetzlichen Bestimmungen, insbesondere des Bundesdatenschutzgesetzes (BDSG) und des Telemediengesetzes (TMG).<br><br><strong>1. Name und Kontaktdaten des für die Verarbeitung Verantwortlichen sowie des betrieblichen Datenschutzbeauftragten</strong><br><br>Diese Datenschutzhinweise gelten für die Datenverarbeitung durch:<br><br><strong>Verantwortlicher:</strong> Rechtsanwalt Dr. Lubomir N. Guedjev, Theodorenstraße 7 in 65189 Wiesbaden, eMail: post@dr-guedjev.de, Telefon: +49 (0) 611 790 67 078 Fax: +49 (0) 611 790 66 862.<br><br><strong>2. Erhebung und Speicherung personenbezogener Daten sowie Art und Zweck von deren Verwendung</strong><br><br><strong>a) Beim Besuch der Website</strong><br><br>Beim Aufrufen unserer Website www.dr-guedjev.de werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser automatisch Informationen an den Server unserer Website gesendet. Diese Informationen werden temporär in einem sog. Logfile gespeichert. Folgende Informationen werden dabei ohne Ihr Zutun erfasst und bis zur automatisierten Löschung gespeichert:<br><ul><li>IP-Adresse des anfragenden Rechners,</li><li>Datum und Uhrzeit des Zugriffs,</li><li>Name und URL der abgerufenen Datei,</li><li>Website, von der aus der Zugriff erfolgt (Referrer-URL),</li><li>verwendeter Browser und ggf das Betriebssystem Ihres Rechners sowie der Name Ihres Access-Providers.</li></ul>Die genannten Daten werden durch uns zu folgenden Zwecken verarbeitet:<br><ul><li>Gewährleistung eines reibungslosen Verbindungsaufbaus der Website,</li><li>Gewährleistung einer komfortablen Nutzung unserer Website,</li><li>Auswertung der Systemsicherheit und -stabilität sowie</li><li>zu weiteren administrativen Zwecken.</li></ul>Die Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 S. 1 lit. f DSGVO. Unser berechtigtes Interesse folgt aus oben aufgelisteten Zwecken zur Datenerhebung. In keinem Fall verwenden wir die erhobenen Daten zu dem Zweck, Rückschlüsse auf Ihre Person zu ziehen.<br><br>Darüber hinaus setzen wir beim Besuch unserer Website Cookies sowie Analysedienste ein. Nähere Erläuterungen dazu erhalten Sie unter den Ziff. 4 und 5 dieser Datenschutzerklärung.<br><br><strong>b) Bei Nutzung unseres Kontaktformulars</strong><br><br>Bei Fragen jeglicher Art bieten wir Ihnen die Möglichkeit, mit uns über ein auf der Website bereitgestelltes Formular Kontakt aufzunehmen. Dabei ist die Angabe einer gültigen eMail-Adresse erforderlich, damit wir wissen, von wem die Anfrage stammt und um diese beantworten zu können. Weitere Angaben können freiwillig getätigt werden.<br><br>Die Datenverarbeitung zum Zwecke der Kontaktaufnahme mit uns erfolgt nach Art. 6 Abs. 1 S. 1 lit. a DSGVO auf Grundlage Ihrer freiwillig erteilten Einwilligung.<br><br>Die für die Benutzung des Kontaktformulars von uns erhobenen personenbezogenen Daten werden nach Erledigung der von Ihnen gestellten Anfrage automatisch gelöscht.<br><br><strong>3. Weitergabe von Daten</strong><br><br>Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den im Folgenden aufgeführten Zwecken findet nicht statt.<br><br>Wir geben Ihre persönlichen Daten nur an Dritte weiter, wenn:<br><ul><li>Sie Ihre nach Art. 6 Abs. 1 S. 1 lit. a DSGVO ausdrückliche Einwilligung dazu erteilt haben,</li><li>die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. f DSGVO zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist und kein Grund zur Annahme besteht, dass Sie ein überwiegendes schutzwürdiges Interesse an der Nichtweitergabe Ihrer Daten haben,</li><li>für den Fall, dass für die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. c DSGVO eine gesetzliche Verpflichtung besteht, sowie</li><li>dies gesetzlich zulässig und nach Art. 6 Abs. 1 S. 1 lit. b DSGVO für die Abwicklung von Vertragsverhältnissen mit Ihnen erforderlich ist.</li></ul><strong>4. Cookies</strong><br><br>Wir setzen auf unserer Seite Cookies ein. Hierbei handelt es sich um kleine Dateien, die Ihr Browser automatisch erstellt und die auf Ihrem Endgerät (Laptop, Tablet, Smartphone o.ä.) gespeichert werden, wenn Sie unsere Seite besuchen. Cookies richten auf Ihrem Endgerät keinen Schaden an, enthalten keine Viren, Trojaner oder sonstige Schadsoftware.<br><br>In dem Cookie werden Informationen abgelegt, die sich jeweils im Zusammenhang mit dem spezifisch eingesetzten Endgerät ergeben. Dies bedeutet jedoch nicht, dass wir dadurch unmittelbar Kenntnis von Ihrer Identität erhalten.<br><br>Der Einsatz von Cookies dient einerseits dazu, die Nutzung unseres Angebots für Sie angenehmer zu gestalten. So setzen wir sogenannte Session-Cookies ein, um zu erkennen, dass Sie einzelne Seiten unserer Website bereits besucht haben. Diese werden nach Verlassen unserer Seite automatisch gelöscht.<br><br>Darüber hinaus setzen wir ebenfalls zur Optimierung der Benutzerfreundlichkeit temporäre Cookies ein, die für einen bestimmten festgelegten Zeitraum auf Ihrem Endgerät gespeichert werden. Besuchen Sie unsere Seite erneut, um unsere Dienste in Anspruch zu nehmen, wird automatisch erkannt, dass Sie bereits bei uns waren und welche Eingaben und Einstellungen sie getätigt haben, um diese nicht noch einmal eingeben zu müssen.<br><br>Zum anderen setzten wir Cookies ein, um die Nutzung unserer Website statistisch zu erfassen und zum Zwecke der Optimierung unseres Angebotes für Sie auszuwerten (siehe Ziff. 5). Diese Cookies ermöglichen es uns, bei einem erneuten Besuch unserer Seite automatisch zu erkennen, dass Sie bereits bei uns waren. Diese Cookies werden nach einer jeweils definierten Zeit automatisch gelöscht.<br><br>Die durch Cookies verarbeiteten Daten sind für die genannten Zwecke zur Wahrung unserer berechtigten Interessen sowie der Dritter nach Art. 6 Abs. 1 S. 1 lit. f DSGVO erforderlich.<br><br>Die meisten Browser akzeptieren Cookies automatisch. Sie können Ihren Browser jedoch so konfigurieren, dass keine Cookies auf Ihrem Computer gespeichert werden oder stets ein Hinweis erscheint, bevor ein neuer Cookie angelegt wird. Die vollständige Deaktivierung von Cookies kann jedoch dazu führen, dass Sie nicht alle Funktionen unserer Website nutzen können.<br><br><strong>5. Analyse-Tools</strong><br><br>Es werden von uns Tracking-Maßnahmen auf Grundlage des Art. 6 Abs. 1 S. 1 lit. f DSGVO durchgeführt. Mit den zum Einsatz kommenden Tracking-Maßnahmen wollen wir eine bedarfsgerechte Gestaltung und die fortlaufende Optimierung unserer Webseite sicherstellen. Zum anderen setzen wir die Tracking-Maßnahmen ein, um die Nutzung unserer Webseite statistisch zu erfassen und zum Zwecke der Optimierung unseres Angebotes für Sie auszuwerten. Diese Interessen sind als berechtigt im Sinne der vorgenannten Vorschrift anzusehen.<br><br><strong>6. Betroffenenrechte</strong><br><br>Sie haben das Recht:<br><ul><li>gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen. Insbesondere können Sie Auskunft über die Verarbeitungszwecke, die Kategorie der personenbezogenen Daten, die Kategorien von Empfängern, gegenüber denen Ihre Daten offengelegt wurden oder werden, die geplante Speicherdauer, das Bestehen eines Rechts auf Berichtigung, Löschung, Einschränkung der Verarbeitung oder Widerspruch, das Bestehen eines Beschwerderechts, die Herkunft ihrer Daten, sofern diese nicht bei uns erhoben wurden, sowie über das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling und ggf. aussagekräftigen Informationen zu deren Einzelheiten verlangen;</li><li>gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen;</li><li>gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen, soweit nicht die Verarbeitung zur Ausübung des Rechts auf freie Meinungsäußerung und Information, zur Erfüllung einer rechtlichen Verpflichtung, aus Gründen des öffentlichen Interesses oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist;</li><li>gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen, soweit die Richtigkeit der Daten von Ihnen bestritten wird, die Verarbeitung unrechtmäßig ist, Sie aber deren Löschung ablehnen und wir die Daten nicht mehr benötigen, Sie jedoch diese zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen benötigen oder Sie gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung eingelegt haben;</li><li>gemäß Art. 20 DSGVO Ihre personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesebaren Format zu erhalten oder die Übermittlung an einen anderen Verantwortlichen zu verlangen;</li><li>gemäß Art. 7 Abs. 3 DSGVO Ihre einmal erteilte Einwilligung jederzeit gegenüber uns zu widerrufen. Dies hat zur Folge, dass wir die Datenverarbeitung, die auf dieser Einwilligung beruhte, für die Zukunft nicht mehr fortführen dürfen und</li><li>gemäß Art. 77 DSGVO sich bei einer Aufsichtsbehörde zu beschweren. In der Regel können Sie sich hierfür an die Aufsichtsbehörde Ihres üblichen Aufenthaltsortes oder Arbeitsplatzes oder unseres Kanzleisitzes wenden.</li></ul><strong>7. Widerspruchsrecht</strong><br><br>Sofern Ihre personenbezogenen Daten auf Grundlage von berechtigten Interessen gemäß Art. 6 Abs. 1 S. 1 lit. f DSGVO verarbeitet werden, haben Sie das Recht, gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten einzulegen, soweit dafür Gründe vorliegen, die sich aus Ihrer besonderen Situation ergeben oder sich der Widerspruch gegen Direktwerbung richtet. Im letzteren Fall haben Sie ein generelles Widerspruchsrecht, das ohne Angabe einer besonderen Situation von uns umgesetzt wird.<br><br>Möchten Sie von Ihrem Widerrufs- oder Widerspruchsrecht Gebrauch machen, genügt eine eMail an post@dr-guedjev.de<br><br><strong>8. Datensicherheit</strong><br><br>Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure Socket Layer) in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird. In der Regel handelt es sich dabei um eine 256 Bit Verschlüsselung. Falls Ihr Browser keine 256-Bit Verschlüsselung unterstützt, greifen wir stattdessen auf 128-Bit v3 Technologie zurück. Ob eine einzelne Seite unseres Internetauftrittes verschlüsselt übertragen wird, erkennen Sie an der geschlossenen Darstellung des Schüssel- beziehungsweise Schloss-Symbols in der unteren Statusleiste Ihres Browsers.<br><br>Wir bedienen uns im Übrigen geeigneter technischer und organisatorischer Sicherheitsmaßnahmen, um Ihre Daten gegen zufällige oder vorsätzliche Manipulationen, teilweisen oder vollständigen Verlust, Zerstörung oder gegen den unbefugten Zugriff Dritter zu schützen. Unsere Sicherheitsmaßnahmen werden entsprechend der technologischen Entwicklung fortlaufend verbessert.<br><br><strong>9. Aktualität und Änderung dieser Datenschutzerklärung</strong><br><br>Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Mai 2018.<br><br>Durch die Weiterentwicklung unserer Website und Angebote darüber oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern.',
        'impressum-button': 'Импресум',
        'impressum-heading': 'Импресум',
        'impressum-content': '<strong>1. Name, Berufsbezeichnung, Anschrift der Niederlassung, Kontaktdaten</strong><br><br>Dr. Lubomir Nikolov Guedjev<br>Rechtsanwalt<br>Theodorenstraße 7<br>65189 Wiesbaden<br>Telefon: + 49 611 790 67 078<br>Telefax: + 49 611 790 66 862<br>eMail: post@dr-guedjev<br><br><strong>2. Steuernummer und Umsatzsteuer-ID</strong><br><br>St.-Nr.: 040/823/34961<br>USt-ID-Nr.:DE 351899389<br><br><strong>3. Berufshaftpflichtversicherung</strong><br><br>HDI Versicherung AG<br>HDI-Platz 1<br>30659 Hannover<br><br><strong>4. Zuständige Rechtsanwaltskammer</strong><br><br>Rechtsanwaltskammer Frankfurt am Main<br>Bockenheimer Anl. 36<br>60322 Frankfurt am Main<br>Telefon: + 49 69 17 00 98 - 01<br>Telefax: +49 69 17 00 98 - 50<br><br><strong>5. Berufliche Regelungen</strong><br><br>Bundesrechtsanwaltsordnung (BRAO)<br>Berufsordnung für Rechtsanwälte (BORA)<br>Fachanwaltsordnung (FAO)<br>Rechtsanwaltsvergütungsgesetz (RVG)<br>Berufsregeln der Rechtsanwälte der Europäischen Union (CCBE)<br>Gesetz über die Tätigkeit europäischer Rechtsanwälte in Deutschland (EuRAG)<br>Anordnung der Bundesrechtsanwaltskammer zum Geldwäschebekämpfungsgesetz<br>Berufsbezeichnung: Rechtsanwalt (Bundesrepublik Deutschland)<br><br>Den genannten Inhalt der berufsrechtlichen Bezeichnungen für Rechtsanwälte finden Sie auf der Internetseite der Bundesrechtsanwaltskammer: www.brak.de unter der Rubrik „Berufsrecht“ (http://www.brak.de/fuer-anwaelte/berufsrecht)<br><br><strong>6. Außergerichtliche Streitschlichtung</strong><br><br>Bei Streitigkeiten zwischen Rechtsanwälten und ihren Auftraggebern besteht auf Antrag die Möglichkeit der außergerichtlichen Streitschlichtung bei der regionalen Rechtsanwaltskammer (§ 73 Abs. 2 Nr. 3 i.V.m. § 73 Abs. 5 BRAO) oder bei der Schlichtungsstelle der Rechtsanwaltschaft bei der Bundesrechtsanwaltskammer (§ 191f BRAO), im Internet zu finden über die Internetseite der Bundesrechtsanwaltskammer ( www.brak.de oder per eMail: schlichtungsstelle@brak.de)<br><br>Zusätzlicher Hinweis im Sinne der Informationsverpflichtung gemäß Art. 14 Abs. 1 der ODR-Verordnung: Die Plattform der EU zur außergerichtlichen online-Streitbeilegung erreichen Sie unter folgendem Link :https://ec.europa.eu/consumers/odr/<br><br><strong>7. Berufsbezeichnung</strong><br><br>Die Berufsbezeichnung „Rechtsanwalt“ wurde in der Bundesrepublik Deutschland verliehen.<br><br><strong>VERANTWORTLICH FÜR DEN INHALT NACH § 55 ABS. 2 RSTV</strong><br><br>Rechtsanwalt Dr. Lubomir N. Guedjev<br><br><strong>Haftung für Inhalte</strong><br><br>Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.<br><br><strong>Urheberrecht</strong><br><br>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen entfernen wir derartige Inhalte umgehend.<br><br>Hinweis nach Verordnung (EU) Nr. 524/2013, Plattform der EU zur außergerichtlichen Online-Streitbeilegung: http://ec.europa.eu/consumers/odr/<br><br><strong>Öffnungszeiten</strong><br><br>Montag – Donnerstag, 10:00–18:00 Uhr',
        'impressum-paragraph-1': '<strong>Данни съгласно § 5 TMG</strong>',
        'impressum-paragraph-2': 'Адвокат и специалист по трудово право<br>Д-р Любомир Геджев<br>Теодоренщрасе 7<br>65189 Висбаден',
        'impressum-paragraph-3': '<strong>Контакт</strong><br>Телефон: +49 (0) 611 790 67 078<br>Имейл: post@dr-guedjev.com',
        'impressum-paragraph-4': '<strong>Професионално наименование и отговорна камара</strong><br>Адвокат, специалист по трудово право',
        'impressum-paragraph-5': '<strong>ДДС номер</strong><br>Данъчен идентификационен номер съгласно § 27 а от Закона за данък върху добавената стойност: [ДДС номер, ако е наличен]',
        'footer-copyright': '© 2024 Д-р Геджев Адвокат. Всички права запазени.'
    }
};

// Current language
let currentLang = 'de';

// DOM elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const langButtons = document.querySelectorAll('.lang-btn');
const contactForm = document.getElementById('contactForm');
const privacyButton = document.querySelector('.privacy-button:not(.impressum-button)');
const privacyModal = document.getElementById('privacyModal');
const privacyOverlay = document.getElementById('privacyOverlay');
const privacyCloseButton = document.querySelector('#privacyModal .privacy-modal-close');
const impressumButton = document.querySelector('.impressum-button');
const impressumModal = document.getElementById('impressumModal');
const impressumOverlay = document.getElementById('impressumOverlay');
const impressumCloseButton = document.querySelector('#impressumModal .impressum-modal-close');
let lastFocusedElement = null;

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Language switching
langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        if (lang !== currentLang) {
            currentLang = lang;
            updateLanguage();
            
            // Update active button
            langButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        }
    });
});

// Update language function
function updateLanguage() {
    // Update page title
    if (currentLang === 'bg') {
        document.title = 'Anwaltskanzlei Dr.Guedjev';
    } else {
        document.title = 'Anwaltskanzlei Dr.Guedjev';
    }
    
    // Update text content
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLang][key]) {
            const translation = translations[currentLang][key];
            // Check if translation contains HTML tags
            if (translation.includes('<') && translation.includes('>')) {
                element.innerHTML = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
    
    // Update placeholders
    const inputs = document.querySelectorAll('input[data-translate-placeholder], textarea[data-translate-placeholder], select[data-translate-placeholder]');
    inputs.forEach(input => {
        const key = input.getAttribute('data-translate-placeholder');
        if (translations[currentLang][key]) {
            input.placeholder = translations[currentLang][key];
        }
    });
    
    // Update select options
    const select = document.getElementById('practice-area');
    if (select) {
        const options = select.querySelectorAll('option');
        options.forEach(option => {
            const key = option.getAttribute('data-translate');
            if (key && translations[currentLang][key]) {
                option.textContent = translations[currentLang][key];
            }
        });
    }

    if (privacyCloseButton) {
        const closeLabelKey = 'privacy-close';
        const closeLabel = translations[currentLang][closeLabelKey] || (currentLang === 'de' ? 'Schließen' : 'Затвори');
        privacyCloseButton.setAttribute('aria-label', closeLabel);
    }

    // Update form loading and success messages based on language
    updateFormMessages();
}

// Update form messages for current language
function updateFormMessages() {
    const submitBtn = document.querySelector('.submit-btn');
    if (submitBtn && submitBtn.classList.contains('loading')) {
        submitBtn.textContent = currentLang === 'de' ? 'Wird gesendet...' : 'Изпраща се...';
    }
}

function openPrivacyModal() {
    if (!privacyModal || !privacyOverlay) return;
    lastFocusedElement = document.activeElement;
    privacyModal.classList.add('active');
    privacyOverlay.classList.add('active');
    privacyModal.setAttribute('aria-hidden', 'false');
    privacyOverlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');

    requestAnimationFrame(() => {
        privacyModal.focus();
    });
}

function closePrivacyModal() {
    if (!privacyModal || !privacyOverlay) return;
    privacyModal.classList.remove('active');
    privacyOverlay.classList.remove('active');
    privacyModal.setAttribute('aria-hidden', 'true');
    privacyOverlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');

    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
        lastFocusedElement.focus();
        lastFocusedElement = null;
    }
}

if (privacyButton && privacyModal && privacyOverlay) {
    privacyButton.addEventListener('click', openPrivacyModal);

    if (privacyCloseButton) {
        privacyCloseButton.addEventListener('click', closePrivacyModal);
    }

    privacyOverlay.addEventListener('click', closePrivacyModal);

    privacyModal.addEventListener('click', (event) => {
        if (event.target === privacyModal) {
            closePrivacyModal();
        }
    });
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        if (privacyModal && privacyModal.classList.contains('active')) {
            closePrivacyModal();
        }
        if (impressumModal && impressumModal.classList.contains('active')) {
            closeImpressumModal();
        }
    }
});

// Impressum modal functions
function openImpressumModal() {
    if (!impressumModal || !impressumOverlay) return;
    lastFocusedElement = document.activeElement;
    impressumModal.classList.add('active');
    impressumOverlay.classList.add('active');
    impressumModal.setAttribute('aria-hidden', 'false');
    impressumOverlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');

    requestAnimationFrame(() => {
        impressumModal.focus();
    });
}

function closeImpressumModal() {
    if (!impressumModal || !impressumOverlay) return;
    impressumModal.classList.remove('active');
    impressumOverlay.classList.remove('active');
    impressumModal.setAttribute('aria-hidden', 'true');
    impressumOverlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');

    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
        lastFocusedElement.focus();
        lastFocusedElement = null;
    }
}

if (impressumButton && impressumModal && impressumOverlay) {
    impressumButton.addEventListener('click', openImpressumModal);

    if (impressumCloseButton) {
        impressumCloseButton.addEventListener('click', closeImpressumModal);
    }

    impressumOverlay.addEventListener('click', closeImpressumModal);

    impressumModal.addEventListener('click', (event) => {
        if (event.target === impressumModal) {
            closeImpressumModal();
        }
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        
        // Initialize EmailJS
        emailjs.init("vXNZEyFgvt4_EC1IT");
        
        // Show loading state
        submitBtn.classList.add('loading');
        submitBtn.textContent = currentLang === 'de' ? 'Wird gesendet...' : 'Изпраща се...';
        
        // Get practice area label (translated text)
        const practiceAreaSelect = this['practice-area'];
        const practiceAreaText = practiceAreaSelect.options[practiceAreaSelect.selectedIndex].text;
        
        // Prepare email parameters
        const templateParams = {
            from_name: this.name.value,
            from_email: this.email.value,
            phone: this.phone.value || 'Nicht angegeben',
            practice_area: practiceAreaText,
            message: this.message.value
        };
        
        // Send email using EmailJS
        emailjs.send('service_wqz513h', 'template_7q0if4p', templateParams)
            .then(() => {
                // Success
                submitBtn.classList.remove('loading');
                submitBtn.textContent = originalText;
                
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.textContent = currentLang === 'de' 
                    ? 'Ihre Nachricht wurde erfolgreich gesendet. Wir werden uns bald bei Ihnen melden.' 
                    : 'Вашето съобщение беше изпратено успешно. Ще се свържем с вас скоро.';
                
                this.appendChild(successMessage);
                this.reset();
                
                setTimeout(() => {
                    successMessage.remove();
                }, 5000);
            })
            .catch((error) => {
                // Error handling
                console.error('EmailJS Error:', error);
                submitBtn.classList.remove('loading');
                submitBtn.textContent = originalText;
                
                const errorMessage = document.createElement('div');
                errorMessage.className = 'error-message';
                errorMessage.textContent = currentLang === 'de' 
                    ? 'Es gab einen Fehler beim Senden. Bitte versuchen Sie es später erneut.' 
                    : 'Възникна грешка при изпращане. Моля, опитайте отново по-късно.';
                
                this.appendChild(errorMessage);
                
                setTimeout(() => {
                    errorMessage.remove();
                }, 5000);
            });
    });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'var(--navy-blue)';
        navbar.style.backdropFilter = 'none';
    } else {
        navbar.style.backgroundColor = 'var(--navy-blue)';
        navbar.style.backdropFilter = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.practice-card, .stat, .contact-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Working hours tooltip positioning
const workingHoursContainer = document.querySelector('.working-hours-container');
if (workingHoursContainer) {
    workingHoursContainer.addEventListener('mouseenter', () => {
        const tooltip = workingHoursContainer.querySelector('.working-hours-tooltip');
        const rect = workingHoursContainer.getBoundingClientRect();
        
        // Check if tooltip would go off screen
        if (rect.left + tooltip.offsetWidth > window.innerWidth) {
            tooltip.style.left = 'auto';
            tooltip.style.right = '0';
            tooltip.style.transform = 'none';
        }
    });
}

// Add missing data attributes to navigation links for consistency
document.addEventListener('DOMContentLoaded', () => {
    // Navigation links (since they don't have individual IDs)
    const navLinks = document.querySelectorAll('.nav-link');
    const navKeys = ['nav-home', 'nav-about', 'nav-practice', 'nav-contact'];
    navLinks.forEach((link, index) => {
        if (navKeys[index] && !link.hasAttribute('data-translate')) {
            link.setAttribute('data-translate', navKeys[index]);
        }
    });
    
    // Initialize language on page load
    updateLanguage();
});

