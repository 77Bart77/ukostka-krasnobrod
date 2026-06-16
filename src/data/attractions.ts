export type Lang = 'pl' | 'en';

export type AttractionDistance = 'local' | 'nearby' | 'halfDay' | 'fullDay';

export type AttractionTransport = 'walk' | 'bike' | 'car';

export type AttractionWeather = 'sun' | 'cloud' | 'rain' | 'winter';

export type AttractionPace = 'calm' | 'balanced' | 'active';

export type AttractionAudience =
	| 'solo'
	| 'couple'
	| 'family'
	| 'friends'
	| 'seniors'
	| 'kids';

export type AttractionTag =
	| 'water'
	| 'nature'
	| 'views'
	| 'history'
	| 'culture'
	| 'kids'
	| 'active'
	| 'walk'
	| 'bike'
	| 'kayaks'
	| 'adrenaline'
	| 'rain'
	| 'romantic'
	| 'local'
	| 'photo'
	| 'education'
	| 'pilgrimage'
	| 'forest'
	| 'food'
	| 'evening'
	| 'social';

export interface Attraction {
	id: string;
	title: Record<Lang, string>;
	description: Record<Lang, string>;
	location: string;
	distance: AttractionDistance;
	duration: {
		minHours: number;
		maxHours: number;
	};
	tags: AttractionTag[];
	transport: AttractionTransport[];
	weather: AttractionWeather[];
	pace: AttractionPace[];
	audience: AttractionAudience[];
}

export const attractions: Attraction[] = [
	{
		id: 'zalew-krasnobrod',
		title: {
			pl: 'Zalew w Krasnobrodzie',
			en: 'Krasnobród Lagoon',
		},
		description: {
			pl: 'Plaża, kąpielisko, rowerki wodne i spacer nad wodą. Najprostszy punkt startowy dla rodzin, par i osób zaczynających pobyt od lokalnych atrakcji.',
			en: 'Beach, swimming area, pedal boats and lakeside walks. The easiest starting point for families, couples and guests beginning with local attractions.',
		},
		location: 'Krasnobród',
		distance: 'local',
		duration: { minHours: 2, maxHours: 4 },
		tags: ['water', 'kids', 'walk', 'local', 'photo'],
		transport: ['walk', 'bike', 'car'],
		weather: ['sun', 'cloud'],
		pace: ['calm', 'balanced'],
		audience: ['solo', 'couple', 'family', 'friends', 'seniors', 'kids'],
	},
	{
		id: 'kamieniolom-baszta-krasnobrod',
		title: {
			pl: 'Kamieniołom z basztą widokową',
			en: 'Quarry with Viewing Tower',
		},
		description: {
			pl: 'Punkt widokowy na Krasnobród i okolice. Dobry krótki spacer z mocnym efektem na zdjęciach.',
			en: 'A viewpoint over Krasnobród and the surrounding landscape. A short walk with strong photo potential.',
		},
		location: 'Krasnobród',
		distance: 'local',
		duration: { minHours: 1, maxHours: 2 },
		tags: ['views', 'walk', 'photo', 'local', 'nature'],
		transport: ['walk', 'bike', 'car'],
		weather: ['sun', 'cloud'],
		pace: ['balanced', 'active'],
		audience: ['solo', 'couple', 'family', 'friends'],
	},
	{
		id: 'kaplica-sw-rocha',
		title: {
			pl: 'Kaplica św. Rocha i Dolina św. Rocha',
			en: 'St. Roch Chapel and Valley',
		},
		description: {
			pl: 'Klimatyczne miejsce w lesie z drewnianą kaplicą, źródełkiem i spokojną trasą spacerową.',
			en: 'An atmospheric forest spot with a wooden chapel, spring and peaceful walking route.',
		},
		location: 'Krasnobród',
		distance: 'local',
		duration: { minHours: 1.5, maxHours: 3 },
		tags: ['nature', 'forest', 'walk', 'history', 'photo', 'romantic'],
		transport: ['walk', 'bike', 'car'],
		weather: ['sun', 'cloud'],
		pace: ['calm', 'balanced'],
		audience: ['solo', 'couple', 'family', 'seniors'],
	},
	{
		id: 'rezerwat-swiety-roch',
		title: {
			pl: 'Rezerwat przyrody Święty Roch',
			en: 'Święty Roch Nature Reserve',
		},
		description: {
			pl: 'Leśny rezerwat przy kaplicy św. Rocha. Dobry wybór na spokojny spacer wśród przyrody.',
			en: 'A forest reserve near St. Roch Chapel. A good choice for a quiet nature walk.',
		},
		location: 'Krasnobród',
		distance: 'local',
		duration: { minHours: 1, maxHours: 2 },
		tags: ['nature', 'forest', 'walk', 'local'],
		transport: ['walk', 'bike', 'car'],
		weather: ['sun', 'cloud'],
		pace: ['calm', 'balanced'],
		audience: ['solo', 'couple', 'family', 'seniors'],
	},
	{
		id: 'kaplica-na-wodzie-krasnobrod',
		title: {
			pl: 'Kaplica na Wodzie',
			en: 'Chapel on the Water',
		},
		description: {
			pl: 'Jedno z charakterystycznych miejsc Krasnobrodu, dobre na krótki spacer i spokojne zwiedzanie.',
			en: 'One of Krasnobród’s characteristic places, good for a short walk and calm sightseeing.',
		},
		location: 'Krasnobród',
		distance: 'local',
		duration: { minHours: 0.5, maxHours: 1.5 },
		tags: ['history', 'pilgrimage', 'walk', 'photo', 'local'],
		transport: ['walk', 'bike', 'car'],
		weather: ['sun', 'cloud', 'rain'],
		pace: ['calm'],
		audience: ['solo', 'couple', 'family', 'seniors'],
	},
	{
		id: 'sanktuarium-krasnobrod',
		title: {
			pl: 'Sanktuarium Nawiedzenia NMP',
			en: 'Sanctuary of the Visitation of the Blessed Virgin Mary',
		},
		description: {
			pl: 'Ważne miejsce historyczne i pielgrzymkowe, które można połączyć z muzeami i ptaszarnią.',
			en: 'An important historic and pilgrimage site that can be combined with the museums and bird aviary.',
		},
		location: 'Krasnobród',
		distance: 'local',
		duration: { minHours: 1, maxHours: 2 },
		tags: ['history', 'culture', 'pilgrimage', 'rain', 'local'],
		transport: ['walk', 'bike', 'car'],
		weather: ['sun', 'cloud', 'rain'],
		pace: ['calm'],
		audience: ['solo', 'couple', 'family', 'seniors'],
	},
	{
		id: 'muzeum-wsi-krasnobrodzkiej',
		title: {
			pl: 'Muzeum Wsi Krasnobrodzkiej',
			en: 'Krasnobród Village Museum',
		},
		description: {
			pl: 'Spokojna atrakcja związana z lokalną historią i tradycją. Dobra opcja na gorszą pogodę.',
			en: 'A calm attraction focused on local history and tradition. A good option for worse weather.',
		},
		location: 'Krasnobród',
		distance: 'local',
		duration: { minHours: 1, maxHours: 2 },
		tags: ['culture', 'history', 'education', 'rain', 'local'],
		transport: ['walk', 'bike', 'car'],
		weather: ['sun', 'cloud', 'rain'],
		pace: ['calm'],
		audience: ['solo', 'couple', 'family', 'seniors', 'kids'],
	},
	{
		id: 'muzeum-wiencow-dozynkowych',
		title: {
			pl: 'Muzeum Wieńców Dożynkowych',
			en: 'Harvest Wreath Museum',
		},
		description: {
			pl: 'Lokalna kultura i tradycja w spokojnym wydaniu. Dobrze pasuje do zwiedzania okolic sanktuarium.',
			en: 'Local culture and tradition in a calm format. Fits well with sightseeing near the sanctuary.',
		},
		location: 'Krasnobród',
		distance: 'local',
		duration: { minHours: 0.5, maxHours: 1.5 },
		tags: ['culture', 'history', 'education', 'rain', 'local'],
		transport: ['walk', 'bike', 'car'],
		weather: ['sun', 'cloud', 'rain'],
		pace: ['calm'],
		audience: ['solo', 'couple', 'family', 'seniors'],
	},
	{
		id: 'ptaszarnia-krasnobrod',
		title: {
			pl: 'Ptaszarnia przy sanktuarium',
			en: 'Bird Aviary by the Sanctuary',
		},
		description: {
			pl: 'Prosta, krótka atrakcja dla dzieci. Najlepiej połączyć ją z sanktuarium i muzeami.',
			en: 'A simple short attraction for children. Best combined with the sanctuary and museums.',
		},
		location: 'Krasnobród',
		distance: 'local',
		duration: { minHours: 0.5, maxHours: 1 },
		tags: ['kids', 'education', 'local'],
		transport: ['walk', 'bike', 'car'],
		weather: ['sun', 'cloud'],
		pace: ['calm'],
		audience: ['family', 'kids'],
	},
	{
		id: 'park-linowy-krasnobrod',
		title: {
			pl: 'Park linowy w Krasnobrodzie',
			en: 'Rope Park in Krasnobród',
		},
		description: {
			pl: 'Aktywna atrakcja dla rodzin, dzieci i paczki znajomych. Dobra jako mocniejszy punkt dnia.',
			en: 'An active attraction for families, children and groups of friends. Good as a stronger point of the day.',
		},
		location: 'Krasnobród',
		distance: 'local',
		duration: { minHours: 1.5, maxHours: 3 },
		tags: ['active', 'kids', 'adrenaline', 'local'],
		transport: ['walk', 'bike', 'car'],
		weather: ['sun', 'cloud'],
		pace: ['balanced', 'active'],
		audience: ['family', 'friends', 'kids'],
	},
	{
		id: 'trasy-krasnobrod',
		title: {
			pl: 'Trasy spacerowe i rowerowe wokół Krasnobrodu',
			en: 'Walking and Cycling Routes around Krasnobród',
		},
		description: {
			pl: 'Elastyczna atrakcja do plannera: krótki spacer, trasa nad zalew albo dłuższa wycieczka rowerowa.',
			en: 'A flexible planner option: short walk, lagoon route or a longer cycling trip.',
		},
		location: 'Krasnobród',
		distance: 'local',
		duration: { minHours: 1, maxHours: 4 },
		tags: ['walk', 'bike', 'nature', 'forest', 'active', 'local'],
		transport: ['walk', 'bike'],
		weather: ['sun', 'cloud'],
		pace: ['calm', 'balanced', 'active'],
		audience: ['solo', 'couple', 'family', 'friends', 'seniors'],
	},
	{
		id: 'spacer-uzdrowiskowy-krasnobrod',
		title: {
			pl: 'Spacer uzdrowiskowy po Krasnobrodzie',
			en: 'Health Resort Walk in Krasnobród',
		},
		description: {
			pl: 'Spokojny spacer dla osób, które chcą wolniejsze tempo i mniej intensywny plan dnia.',
			en: 'A calm walk for guests who prefer a slower pace and a less intensive day plan.',
		},
		location: 'Krasnobród',
		distance: 'local',
		duration: { minHours: 1, maxHours: 2 },
		tags: ['walk', 'local', 'nature'],
		transport: ['walk'],
		weather: ['sun', 'cloud'],
		pace: ['calm'],
		audience: ['solo', 'couple', 'family', 'seniors'],
	},
	{
		id: 'jacnia-zalew',
		title: {
			pl: 'Jacnia — zalew i okolice',
			en: 'Jacnia Lagoon and Surroundings',
		},
		description: {
			pl: 'Spokojniejszy wypad nad wodę blisko Krasnobrodu. Dobry punkt na rower lub krótki przejazd autem.',
			en: 'A calmer water-side trip close to Krasnobród. Good by bike or for a short drive.',
		},
		location: 'Jacnia',
		distance: 'nearby',
		duration: { minHours: 2, maxHours: 4 },
		tags: ['water', 'nature', 'bike', 'photo'],
		transport: ['bike', 'car'],
		weather: ['sun', 'cloud'],
		pace: ['calm', 'balanced'],
		audience: ['solo', 'couple', 'family', 'friends'],
	},
	{
		id: 'jacnia-wieza-stok',
		title: {
			pl: 'Jacnia — wieża widokowa i stok',
			en: 'Jacnia Viewpoint and Slope',
		},
		description: {
			pl: 'Punkt widokowy w okolicy Jacni. Zimą może wejść do planu jako spokojna atrakcja sezonowa.',
			en: 'A viewpoint near Jacnia. In winter it can work as a calm seasonal attraction.',
		},
		location: 'Jacnia',
		distance: 'nearby',
		duration: { minHours: 1, maxHours: 3 },
		tags: ['views', 'photo', 'nature'],
		transport: ['bike', 'car'],
		weather: ['sun', 'cloud', 'winter'],
		pace: ['balanced'],
		audience: ['solo', 'couple', 'family', 'friends'],
	},
	{
		id: 'zwierzyniec-stawy-echo',
		title: {
			pl: 'Zwierzyniec — Stawy Echo',
			en: 'Zwierzyniec — Echo Ponds',
		},
		description: {
			pl: 'Jedna z najbardziej znanych atrakcji Roztocza. Dobry wybór na spacer, zdjęcia i kontakt z przyrodą.',
			en: 'One of the best-known attractions in Roztocze. Good for a walk, photos and nature.',
		},
		location: 'Zwierzyniec',
		distance: 'nearby',
		duration: { minHours: 2, maxHours: 4 },
		tags: ['nature', 'water', 'walk', 'photo', 'kids'],
		transport: ['car', 'bike'],
		weather: ['sun', 'cloud'],
		pace: ['calm', 'balanced'],
		audience: ['solo', 'couple', 'family', 'friends', 'seniors', 'kids'],
	},
	{
		id: 'zwierzyniec-kosciolek-na-wodzie',
		title: {
			pl: 'Zwierzyniec — Kościółek na Wodzie',
			en: 'Zwierzyniec — Church on the Water',
		},
		description: {
			pl: 'Bardzo charakterystyczne miejsce w Zwierzyńcu. Dobre na krótki spacer i zdjęcia.',
			en: 'A very characteristic place in Zwierzyniec. Good for a short walk and photos.',
		},
		location: 'Zwierzyniec',
		distance: 'nearby',
		duration: { minHours: 0.5, maxHours: 1.5 },
		tags: ['history', 'photo', 'walk', 'romantic'],
		transport: ['car', 'bike'],
		weather: ['sun', 'cloud', 'rain'],
		pace: ['calm'],
		audience: ['solo', 'couple', 'family', 'seniors'],
	},
	{
		id: 'oem-rpn-zwierzyniec',
		title: {
			pl: 'Ośrodek Edukacyjno-Muzealny RPN',
			en: 'Roztocze National Park Educational Museum Centre',
		},
		description: {
			pl: 'Edukacyjna opcja w Zwierzyńcu, szczególnie dobra na niepogodę lub rodzinny dzień z dziećmi.',
			en: 'An educational option in Zwierzyniec, especially useful for bad weather or a family day with children.',
		},
		location: 'Zwierzyniec',
		distance: 'nearby',
		duration: { minHours: 1, maxHours: 2 },
		tags: ['education', 'nature', 'rain', 'kids', 'culture'],
		transport: ['car', 'bike'],
		weather: ['sun', 'cloud', 'rain'],
		pace: ['calm', 'balanced'],
		audience: ['family', 'kids', 'seniors', 'couple'],
	},
	{
		id: 'florianka-rpn',
		title: {
			pl: 'Florianka',
			en: 'Florianka',
		},
		description: {
			pl: 'Spokojna przyrodnicza trasa w Roztoczańskim Parku Narodowym. Dobra dla osób lubiących las i ciszę.',
			en: 'A calm nature route in Roztocze National Park. Good for guests who like forest and quiet places.',
		},
		location: 'Roztoczański Park Narodowy',
		distance: 'halfDay',
		duration: { minHours: 3, maxHours: 5 },
		tags: ['nature', 'forest', 'walk', 'bike', 'photo'],
		transport: ['car', 'bike'],
		weather: ['sun', 'cloud'],
		pace: ['balanced', 'active'],
		audience: ['solo', 'couple', 'family', 'friends'],
	},
	{
		id: 'jozefow-kamieniolom-babia-dolina',
		title: {
			pl: 'Józefów — kamieniołom Babia Dolina',
			en: 'Józefów — Babia Dolina Quarry',
		},
		description: {
			pl: 'Mocny punkt widokowy i geologiczny. Dobra propozycja na półdniowy wypad autem.',
			en: 'A strong viewpoint and geological attraction. A good half-day trip by car.',
		},
		location: 'Józefów',
		distance: 'halfDay',
		duration: { minHours: 2, maxHours: 4 },
		tags: ['views', 'photo', 'nature', 'active'],
		transport: ['car'],
		weather: ['sun', 'cloud'],
		pace: ['balanced', 'active'],
		audience: ['solo', 'couple', 'family', 'friends'],
	},
	{
		id: 'susiec-szumy-nad-tanwia',
		title: {
			pl: 'Susiec — Szumy nad Tanwią',
			en: 'Susiec — Szumy on the Tanew River',
		},
		description: {
			pl: 'Leśna trasa z progami skalnymi i małymi wodospadami. Jedna z najmocniejszych przyrodniczych atrakcji Roztocza.',
			en: 'A forest trail with rock steps and small waterfalls. One of the strongest nature attractions in Roztocze.',
		},
		location: 'Susiec',
		distance: 'halfDay',
		duration: { minHours: 3, maxHours: 5 },
		tags: ['nature', 'forest', 'water', 'walk', 'photo', 'active'],
		transport: ['car'],
		weather: ['sun', 'cloud'],
		pace: ['balanced', 'active'],
		audience: ['solo', 'couple', 'family', 'friends'],
	},
	{
		id: 'czartowe-pole',
		title: {
			pl: 'Rezerwat Czartowe Pole',
			en: 'Czartowe Pole Nature Reserve',
		},
		description: {
			pl: 'Drewniane kładki, dolina Sopotu i ruiny dawnej papierni. Klimat bardziej przygodowy niż zwykły spacer.',
			en: 'Wooden footbridges, the Sopot river valley and old paper mill ruins. More adventurous than a regular walk.',
		},
		location: 'Hamernia',
		distance: 'halfDay',
		duration: { minHours: 2, maxHours: 4 },
		tags: ['nature', 'forest', 'walk', 'history', 'photo', 'active'],
		transport: ['car'],
		weather: ['sun', 'cloud'],
		pace: ['balanced', 'active'],
		audience: ['solo', 'couple', 'family', 'friends'],
	},
	{
		id: 'gorecko-koscielne',
		title: {
			pl: 'Górecko Kościelne',
			en: 'Górecko Kościelne',
		},
		description: {
			pl: 'Aleja starych dębów, kaplica na wodzie i spokojny sakralno-przyrodniczy klimat.',
			en: 'An avenue of old oaks, chapel on the water and a peaceful sacred-nature atmosphere.',
		},
		location: 'Górecko Kościelne',
		distance: 'halfDay',
		duration: { minHours: 2, maxHours: 4 },
		tags: ['nature', 'history', 'walk', 'photo', 'pilgrimage'],
		transport: ['car'],
		weather: ['sun', 'cloud'],
		pace: ['calm', 'balanced'],
		audience: ['solo', 'couple', 'family', 'seniors'],
	},
	{
		id: 'zamosc-stare-miasto',
		title: {
			pl: 'Zamość — Stare Miasto',
			en: 'Zamość Old Town',
		},
		description: {
			pl: 'Całodniowa wycieczka do jednego z najpiękniejszych miast regionu. Rynek, kamienice, spacer i jedzenie.',
			en: 'A full-day trip to one of the most beautiful towns in the region. Market square, townhouses, walks and food.',
		},
		location: 'Zamość',
		distance: 'fullDay',
		duration: { minHours: 5, maxHours: 8 },
		tags: ['history', 'culture', 'photo', 'rain', 'romantic'],
		transport: ['car'],
		weather: ['sun', 'cloud', 'rain'],
		pace: ['calm', 'balanced'],
		audience: ['solo', 'couple', 'family', 'friends', 'seniors'],
	},
	{
		id: 'szczebrzeszyn',
		title: {
			pl: 'Szczebrzeszyn',
			en: 'Szczebrzeszyn',
		},
		description: {
			pl: 'Krótsza wycieczka do miasteczka z charakterem. Dobre jako przystanek po drodze do Zwierzyńca albo Zamościa.',
			en: 'A shorter trip to a town with character. Good as a stop on the way to Zwierzyniec or Zamość.',
		},
		location: 'Szczebrzeszyn',
		distance: 'halfDay',
		duration: { minHours: 1.5, maxHours: 3 },
		tags: ['culture', 'history', 'photo', 'walk'],
		transport: ['car'],
		weather: ['sun', 'cloud', 'rain'],
		pace: ['calm', 'balanced'],
		audience: ['solo', 'couple', 'family', 'seniors'],
	},
	{
		id: 'kajaki-wieprz-obrocz-zwierzyniec',
		title: {
			pl: 'Kajaki Wieprzem — Obrocz / Zwierzyniec',
			en: 'Kayaking on the Wieprz River — Obrocz / Zwierzyniec',
		},
		description: {
			pl: 'Aktywna atrakcja wodna, dobra dla par, rodzin ze starszymi dziećmi i znajomych.',
			en: 'An active water attraction, good for couples, families with older children and groups of friends.',
		},
		location: 'Obrocz / Zwierzyniec',
		distance: 'halfDay',
		duration: { minHours: 3, maxHours: 5 },
		tags: ['kayaks', 'water', 'active', 'nature'],
		transport: ['car'],
		weather: ['sun', 'cloud'],
		pace: ['active'],
		audience: ['couple', 'family', 'friends'],
	},
	{
		id: 'kajaki-hutki-guciow',
		title: {
			pl: 'Kajaki blisko Krasnobrodu — Hutki / Guciów',
			en: 'Kayaking near Krasnobród — Hutki / Guciów',
		},
		description: {
			pl: 'Spływ bliżej Krasnobrodu, dobry jako aktywny punkt dnia bez bardzo dalekiego wyjazdu.',
			en: 'Kayaking closer to Krasnobród, good as an active part of the day without a long drive.',
		},
		location: 'Hutki / Guciów',
		distance: 'nearby',
		duration: { minHours: 2, maxHours: 4 },
		tags: ['kayaks', 'water', 'active', 'nature'],
		transport: ['car'],
		weather: ['sun', 'cloud'],
		pace: ['active'],
		audience: ['couple', 'family', 'friends'],
	},
	{
		id: 'kajaki-tanew',
		title: {
			pl: 'Kajaki na Tanwi',
			en: 'Kayaking on the Tanew River',
		},
		description: {
			pl: 'Aktywniejszy wariant wodny w okolicy Suśca i Szumów. Dobry dla osób, które chcą mocniejszego dnia.',
			en: 'A more active water option near Susiec and Szumy. Good for guests who want a stronger day.',
		},
		location: 'Okolice Suśca',
		distance: 'halfDay',
		duration: { minHours: 3, maxHours: 5 },
		tags: ['kayaks', 'water', 'active', 'nature'],
		transport: ['car'],
		weather: ['sun', 'cloud'],
		pace: ['active'],
		audience: ['couple', 'friends', 'family'],
	},
	{
		id: 'paintball-zwierzyniec',
		title: {
			pl: 'Paintball — Zwierzyniec',
			en: 'Paintball — Zwierzyniec',
		},
		description: {
			pl: 'Atrakcja dla paczki znajomych albo aktywnej grupy. Najlepiej jako część dnia w okolicy Zwierzyńca.',
			en: 'An attraction for groups of friends or active groups. Best as part of a day near Zwierzyniec.',
		},
		location: 'Zwierzyniec',
		distance: 'halfDay',
		duration: { minHours: 2, maxHours: 3 },
		tags: ['active', 'adrenaline'],
		transport: ['car'],
		weather: ['sun', 'cloud'],
		pace: ['active'],
		audience: ['friends'],
	},
	{
		id: 'quady-offroad-roztocze',
		title: {
			pl: 'Quady / off-road — Roztocze',
			en: 'Quads / Off-road — Roztocze',
		},
		description: {
			pl: 'Mocna aktywna atrakcja dla osób szukających adrenaliny. Dobra dla paczki znajomych.',
			en: 'A strong active attraction for guests looking for adrenaline. Good for groups of friends.',
		},
		location: 'Roztocze',
		distance: 'halfDay',
		duration: { minHours: 2, maxHours: 4 },
		tags: ['active', 'adrenaline', 'nature'],
		transport: ['car'],
		weather: ['sun', 'cloud'],
		pace: ['active'],
		audience: ['friends'],
	},
	{
		id: 'rowery-roztocze',
		title: {
			pl: 'Rowery po Roztoczu',
			en: 'Cycling around Roztocze',
		},
		description: {
			pl: 'Elastyczna aktywność: od krótkiej trasy wokół Krasnobrodu po dłuższy wypad w stronę Zwierzyńca.',
			en: 'A flexible activity: from a short route around Krasnobród to a longer ride towards Zwierzyniec.',
		},
		location: 'Roztocze',
		distance: 'nearby',
		duration: { minHours: 2, maxHours: 6 },
		tags: ['bike', 'active', 'nature', 'forest'],
		transport: ['bike', 'car'],
		weather: ['sun', 'cloud'],
		pace: ['balanced', 'active'],
		audience: ['solo', 'couple', 'family', 'friends'],
	},
	{
		id: 'jazda-konna-zwierzyniec',
		title: {
			pl: 'Jazda konna — okolice Zwierzyńca',
			en: 'Horse Riding near Zwierzyniec',
		},
		description: {
			pl: 'Spokojniejsza aktywność w kontakcie z przyrodą. Dobra dla rodzin, par i osób szukających czegoś innego.',
			en: 'A calmer activity close to nature. Good for families, couples and guests looking for something different.',
		},
		location: 'Okolice Zwierzyńca',
		distance: 'halfDay',
		duration: { minHours: 1.5, maxHours: 3 },
		tags: ['active', 'nature', 'kids'],
		transport: ['car'],
		weather: ['sun', 'cloud'],
		pace: ['balanced'],
		audience: ['couple', 'family', 'kids'],
	},
	{
		id: 'zagroda-guciow',
		title: {
			pl: 'Zagroda Guciów',
			en: 'Guciów Farmstead',
		},
		description: {
			pl: 'Regionalny klimat, historia i lokalna kultura. Dobre jako spokojna atrakcja połączona z trasą po Roztoczu.',
			en: 'Regional atmosphere, history and local culture. Good as a calm attraction during a Roztocze route.',
		},
		location: 'Guciów',
		distance: 'nearby',
		duration: { minHours: 1.5, maxHours: 3 },
		tags: ['culture', 'history', 'education', 'rain', 'kids'],
		transport: ['car', 'bike'],
		weather: ['sun', 'cloud', 'rain'],
		pace: ['calm', 'balanced'],
		audience: ['solo', 'couple', 'family', 'seniors', 'kids'],
	},

	{
		id: 'wedkowanie-z-gospodarzem',
		title: {
			pl: 'Wędkowanie z gospodarzem',
			en: 'Fishing with the Host',
		},
		description: {
			pl: 'Lokalna, spokojna atrakcja dla osób, które chcą spróbować wędkowania albo porozmawiać z gospodarzem o najlepszych miejscach nad wodą.',
			en: 'A local, calm activity for guests who want to try fishing or ask the host about the best waterside spots.',
		},
		location: 'Krasnobród i okolice',
		distance: 'local',
		duration: { minHours: 2, maxHours: 4 },
		tags: ['water', 'nature', 'local'],
		transport: ['walk', 'bike', 'car'],
		weather: ['sun', 'cloud'],
		pace: ['calm'],
		audience: ['solo', 'couple', 'family', 'friends', 'seniors'],
	},

	{
		id: 'grill-ogrod-u-kostka',
		title: {
			pl: 'Grill i wieczór w ogrodzie U Kostka',
			en: 'Barbecue Evening in the U Kostka Garden',
		},
		description: {
			pl: 'Spokojne zakończenie dnia przy grillu, rozmowach i odpoczynku w ogrodzie. Dobry stały punkt każdego planu pobytu.',
			en: 'A calm end to the day with a barbecue, conversation and time to relax in the garden. A good fixed point for every stay plan.',
		},
		location: 'U Kostka',
		distance: 'local',
		duration: { minHours: 1.5, maxHours: 3 },
		tags: ['food', 'evening', 'social', 'local'],
		transport: ['walk'],
		weather: ['sun', 'cloud'],
		pace: ['calm', 'balanced'],
		audience: ['solo', 'couple', 'family', 'friends', 'seniors', 'kids'],
	},
];
