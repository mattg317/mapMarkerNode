console.log("got locations");

var markers= [
{
"name": "Bronx Defenders",
"strAdress": "360 161st St",
"zip": "10451",
"boro": "Bronx",
"lat": "40.824169",
"long": "-73.915452",
"num": "718 838-7849"
},
{
"name": "Department Of Probation Bronx Office",
"strAdress": "198 East 161st Street",
"zip": "10451",
"boro": "Bronx",
"lat": "40.825851999999998",
"long": "-73.921006000000006",
"num": "718-802-4500"
},
{
"name": "Phipps",
"strAdress": "3125 3rd Ave",
"zip": "10451",
"boro": "Bronx",
"lat": "40.822020",
"long": "-73.912029",
"num": "Call 311 for hours"
},
{
"name": "The Salvation Army Bronx Citadel",
"strAdress": "425 East 159th St",
"zip": "10451",
"boro": "Bronx",
"lat": "40.822796",
"long": "-73.913363",
"num": "Call 311 for hours"
},
{
"name": "The Salvation Army Bronx Citadel",
"strAdress": "425 East 159th St",
"zip": "10451",
"boro": "Bronx",
"lat": "40.822796",
"long": "-73.913363",
"num": "Call 311 for hours"
},
{
"name": "Bronxwork-Townsend",
"strAdress": "1477 Townsend Ave",
"zip": "10452",
"boro": "Bronx",
"lat": "40.841785",
"long": "-73.915587",
"num": "718-588-3839"
},
{
"name": "Grand Concourse SDA Church",
"strAdress": "1275 Grand Concourse",
"zip": "10452",
"boro": "Bronx",
"lat": "40.836437",
"long": "-73.91656",
"num": "Call 311 for hours"
},
{
"name": "Momentum Project @ Church of the God of Prophecy",
"strAdress": "85 East 165th St",
"zip": "10452",
"boro": "Bronx",
"lat": "40.831654",
"long": "-73.922129",
"num": "Call 311 for hours"
},
{
"name": "Momentum Project @ Church of the God of Prophecy",
"strAdress": "85 East 165th St",
"zip": "10452",
"boro": "Bronx",
"lat": "40.831654",
"long": "-73.922129",
"num": "Call 311 for hours"
},
{
"name": "The Community Food Pantry",
"strAdress": "1363 Ogden Ave",
"zip": "10452",
"boro": "Bronx",
"lat": "40.841786",
"long": "-73.924910",
"num": "718-960-2262"
},
{
"name": "Tolentine Zeiser Community Life Center @ Sacred Heart",
"strAdress": "1261 Shakespeare Ave",
"zip": "10452",
"boro": "Bronx",
"lat": "40.838903",
"long": "-73.923054",
"num": "917-549-8958"
},
{
"name": "WHEDCO - Food Pantry",
"strAdress": "50 East 168th St",
"zip": "10452",
"boro": "Bronx",
"lat": "40.836388",
"long": "-73.91909",
"num": "Call 311 for hours"
},
{
"name": "WHEDCO",
"strAdress": "50 East 168th Street",
"zip": "10452",
"boro": "Bronx",
"lat": "40.836388",
"long": "-73.91909",
"num": "718 839-1186"
},
{
"name": "Woodycrest United Methodist Church",
"strAdress": "89 West 166th St",
"zip": "10452",
"boro": "Bronx",
"lat": "40.835041",
"long": "-73.925982",
"num": "Call 311 for hours"
},
{
"name": "St. Edmunds Youth Program Inc.",
"strAdress": "1905 Morris Ave",
"zip": "10453",
"boro": "Bronx",
"lat": "40.849984",
"long": "-73.907915",
"num": "Call 311 for hours"
},
{
"name": "True Gospel Tabernacle",
"strAdress": "1 West Tremont Ave",
"zip": "10453",
"boro": "Bronx",
"lat": "40.855515",
"long": "-73.918913",
"num": "Call 311 for hours"
},
{
"name": "Whosoever Will Baptist Church",
"strAdress": "1651 Popham Ave",
"zip": "10453",
"boro": "Bronx",
"lat": "40.849344",
"long": "-73.921038",
"num": "Call 311 for hours"
},
{
"name": "Abraham House",
"strAdress": "340 Willis Ave",
"zip": "10454",
"boro": "Bronx",
"lat": "40.811314",
"long": "-73.920934",
"num": "Call 311 for hours"
},
{
"name": "Every Day is a Miracle, Inc.",
"strAdress": "411 East 143rd St",
"zip": "10454",
"boro": "Bronx",
"lat": "40.812064",
"long": "-73.920031",
"num": "Call 311 for hours"
},
{
"name": "New York Common Pantry",
"strAdress": "423 East 138th St",
"zip": "10454",
"boro": "Bronx",
"lat": "40.808913",
"long": "-73.921746",
"num": "Call 311 for hours"
},
{
"name": "St. Ann's Church of Morrisania",
"strAdress": "295 St. Ann's Ave",
"zip": "10454",
"boro": "Bronx",
"lat": "40.808522",
"long": "-73.917126",
"num": "Call 311 for hours"
},
{
"name": "St. Luke's Food Pantry",
"strAdress": "623 East 138th St",
"zip": "10454",
"boro": "Bronx",
"lat": "40.806265",
"long": "-73.91547",
"num": "Call 311 for hours"
},
{
"name": "Affinity Health Plan – Bronx",
"strAdress": "2831 3rd Ave",
"zip": "10455",
"boro": "Bronx",
"lat": "40.815923",
"long": "-73.918235",
"num": "Call 311 for hours"
},
{
"name": "Bronx Temple SDA Church",
"strAdress": "495 Willis Ave",
"zip": "10455",
"boro": "Bronx",
"lat": "40.814781",
"long": "-73.918739",
"num": "Call 311 for hours"
},
{
"name": "Give Them To Eat",
"strAdress": "800 East 156th St",
"zip": "10455",
"boro": "Bronx",
"lat": "40.81753",
"long": "-73.904354",
"num": "Call 311 for hours"
},
{
"name": "Give Them To Eat",
"strAdress": "800 East 156th St",
"zip": "10455",
"boro": "Bronx",
"lat": "40.81753",
"long": "-73.904354",
"num": "Call 311 for hours"
},
{
"name": "Transfiguration Lutheran Church (Bronx)",
"strAdress": "763 Prospect Ave",
"zip": "10455",
"boro": "Bronx",
"lat": "40.817618",
"long": "-73.90246",
"num": "Call 311 for hours"
},
{
"name": "United Bronx Parents, Inc.",
"strAdress": "603 Prospect Avenue",
"zip": "10455",
"boro": "Bronx",
"lat": "40.813972",
"long": "-73.904183000000003",
"num": "Call 311 for hours"
},
{
"name": "United Bronx Parents, Inc.",
"strAdress": "603 Prospect Avenue",
"zip": "10455",
"boro": "Bronx",
"lat": "40.813972",
"long": "-73.904183000000003",
"num": "718 9917100"
},
{
"name": "Beth - El House of Yahweh",
"strAdress": "3482 Park Ave",
"zip": "10456",
"boro": "Bronx",
"lat": "40.848513",
"long": "-73.923541",
"num": "Call 311 for hours"
},
{
"name": "Gospel Hill Baptist Church, Inc.",
"strAdress": "3265 Third Ave",
"zip": "10456",
"boro": "Bronx",
"lat": "40.824791",
"long": "-73.908913",
"num": "Call 311 for hours"
},
{
"name": "Holy Tabernacle Church, Inc.",
"strAdress": "3780 Third Ave",
"zip": "10456",
"boro": "Bronx",
"lat": "40.836674",
"long": "-73.901967",
"num": "Call 311 for hours"
},
{
"name": "Holy Tabernacle Church, Inc.",
"strAdress": "3780 Third Ave",
"zip": "10456",
"boro": "Bronx",
"lat": "40.836674",
"long": "-73.901967",
"num": "Call 311 for hours"
},
{
"name": "Inspirational Gospel Assembly",
"strAdress": "1211 Brook Avenue",
"zip": "10456",
"boro": "Bronx",
"lat": "40.831363000000003",
"long": "-73.909345000000002",
"num": "(347)758-6447"
},
{
"name": "Manna of Life Ministries, Inc.",
"strAdress": "11-1 Boston Road",
"zip": "10456",
"boro": "Bronx",
"lat": "40.829279999999997",
"long": "-73.902585000000002",
"num": "Call 311 for hours"
},
{
"name": "Morrisania Revitalization Corp Inc.",
"strAdress": "576 East 165th St",
"zip": "10456",
"boro": "Bronx",
"lat": "40.825512",
"long": "-73.907017",
"num": "Call 311 for hours"
},
{
"name": "New Covenant Community Development Corp",
"strAdress": "1175 Boston Rd",
"zip": "10456",
"boro": "Bronx",
"lat": "40.828924",
"long": "-73.903305",
"num": "Call 311 for hours"
},
{
"name": "Redeemed Christian Church Of God",
"strAdress": "1001-1005 Morris Avenue",
"zip": "10456",
"boro": "Bronx",
"lat": "40.829092000000003",
"long": "-73.916843",
"num": "718-293-8996"
},
{
"name": "St. Augustine Food Pantry",
"strAdress": "1168 Franklin Avenue",
"zip": "10456",
"boro": "Bronx",
"lat": "40.829039000000002",
"long": "-73.904325999999998",
"num": "718 8930072"
},
{
"name": "Vineyard International Christian Ministries",
"strAdress": "1140 Teller Ave",
"zip": "10456",
"boro": "Bronx",
"lat": "40.83066",
"long": "-73.912226",
"num": "Call 311 for hours"
},
{
"name": "Bronx Seventh Day Adventist Church",
"strAdress": "1695 Washington Ave",
"zip": "10457",
"boro": "Bronx",
"lat": "40.842245",
"long": "-73.901112",
"num": "Call 311 for hours"
},
{
"name": "Christ Jesus Baptist Church",
"strAdress": "456 East 168th Street",
"zip": "10457",
"boro": "Bronx",
"lat": "40.831369000000002",
"long": "-73.907317000000006",
"num": "Call 311 for hours"
},
{
"name": "The Salvation Army Tremont Corps",
"strAdress": "2121 Washington Ave",
"zip": "10457",
"boro": "Bronx",
"lat": "40.85212",
"long": "-73.895577",
"num": "Call 311 for hours"
},
{
"name": "Thorpe Family Residence",
"strAdress": "406 East 184th St",
"zip": "10457",
"boro": "Bronx",
"lat": "40.856393",
"long": "-73.894733",
"num": "Call 311 for hours"
},
{
"name": "Boom! Health",
"strAdress": "446 Easet Fordham Road",
"zip": "10458",
"boro": "Bronx",
"lat": "40.859131",
"long": "-73.887159",
"num": "Call 311 for hours"
},
{
"name": "CUCS Bronx Workforce 1",
"strAdress": "400 East Fordham Road (Webster ave)",
"zip": "10458",
"boro": "Bronx",
"lat": "40.863693",
"long": "-73.888724",
"num": "718 960-2457"
},
{
"name": "Kingsbridge Heights Community Center",
"strAdress": "538 E Fordham Road",
"zip": "10458",
"boro": "Bronx",
"lat": "40.859304",
"long": "-73.887117",
"num": "212-453-9532 Appointments Recommended"
},
{
"name": "LIFT",
"strAdress": "2381 Belmont Ave",
"zip": "10458",
"boro": "Bronx",
"lat": "40.854564",
"long": "-73.886669",
"num": "718 733-3897/4061"
},
{
"name": "New St. John Baptist Church",
"strAdress": "2409 Lorillard Place",
"zip": "10458",
"boro": "Bronx",
"lat": "40.856681",
"long": "-73.888991",
"num": "Call 311 for hours"
},
{
"name": "Part Of The Solution (POTS)",
"strAdress": "2759 Webster Ave, Btwn 197 & 198th St",
"zip": "10458",
"boro": "Bronx",
"lat": "40.868306",
"long": "-73.887984",
"num": "(718) 220 4892"
},
{
"name": "Part of the Solution (POTS)",
"strAdress": "2759 Webster Ave",
"zip": "10458",
"boro": "Bronx",
"lat": "40.865732",
"long": "-73.886416",
"num": "Call 311 for hours"
},
{
"name": "Part of the Solution (POTS)",
"strAdress": "2759 Webster Ave",
"zip": "10458",
"boro": "Bronx",
"lat": "40.865732",
"long": "-73.886416",
"num": "Call 311 for hours"
},
{
"name": "Caldwell Temple Ame Zion Church",
"strAdress": "1288 Rev. James A. Polite",
"zip": "10459",
"boro": "Bronx",
"lat": "40.829689",
"long": "-73.895561",
"num": "Call 311 for hours"
},
{
"name": "Come World Ministries Inc.",
"strAdress": "1034 Prospect Ave",
"zip": "10459",
"boro": "Bronx",
"lat": "40.824493",
"long": "-73.899279",
"num": "Call 311 for hours"
},
{
"name": "Come World Ministries Inc.",
"strAdress": "1034 Prospect Ave",
"zip": "10459",
"boro": "Bronx",
"lat": "40.824493",
"long": "-73.899279",
"num": "Call 311 for hours"
},
{
"name": "Loyal Baptist Church",
"strAdress": "881 East 167th St",
"zip": "10459",
"boro": "Bronx",
"lat": "40.826182",
"long": "-73.896238",
"num": "Call 311 for hours"
},
{
"name": "Resurrection and Life Pentecostal Church",
"strAdress": "870 East 163rd St",
"zip": "10459",
"boro": "Bronx",
"lat": "40.821508",
"long": "-73.899319",
"num": "Call 311 for hours"
},
{
"name": "Thessalonia Baptist Church",
"strAdress": "951 Rev. James Polite Ave",
"zip": "10459",
"boro": "Bronx",
"lat": "40.822502",
"long": "-73.899249",
"num": "718 5420828"
},
{
"name": "Gethsemane Baptist Church",
"strAdress": "771 Fairmount Place",
"zip": "10460",
"boro": "Bronx",
"lat": "40.843142",
"long": "-73.889598",
"num": "Call 311 for hours"
},
{
"name": "Grace Episcopal Church",
"strAdress": "1909 Vyse Ave",
"zip": "10460",
"boro": "Bronx",
"lat": "40.840517",
"long": "-73.883658",
"num": "Call 311 for hours"
},
{
"name": "Grace Episcopal Church (Bronx)",
"strAdress": "1909 Vyse Ave",
"zip": "10460",
"boro": "Bronx",
"lat": "40.840517",
"long": "-73.883658",
"num": "Call 311 for hours"
},
{
"name": "St. Anthony's Church",
"strAdress": "1750 Mansion St",
"zip": "10460",
"boro": "Bronx",
"lat": "40.837971",
"long": "-73.869545",
"num": "Call 311 for hours"
},
{
"name": "Union Grove Baptist Church",
"strAdress": "1488 Hoe Avenue",
"zip": "10460",
"boro": "Bronx",
"lat": "40.832904",
"long": "-73.888952",
"num": "Call 311 for hours"
},
{
"name": "Jewish Community Council of Pelham Parkway",
"strAdress": "2157 Holland Ave",
"zip": "10462",
"boro": "Bronx",
"lat": "40.855316",
"long": "-73.866032",
"num": "Call 311 for hours"
},
{
"name": "Jewish Community Council Parkway Community Services Center",
"strAdress": "2157 Holland Ave",
"zip": "10462",
"boro": "Bronx",
"lat": "40.855316",
"long": "-73.866032",
"num": "646 385-3378"
},
{
"name": "St. Paul's Lutheran Church",
"strAdress": "1891 Mcgraw Avenue",
"zip": "10462",
"boro": "Bronx",
"lat": "40.834683",
"long": "-73.862303",
"num": "718-822-4535"
},
{
"name": "Bronx Bethany Community Corporation",
"strAdress": "971 EAST 227TH STREET",
"zip": "10466",
"boro": "Bronx",
"lat": "40.886803",
"long": "-73.851268000000005",
"num": "718 231-5276"
},
{
"name": "Church of St. Frances of Rome",
"strAdress": "4307 Barnes Ave",
"zip": "10466",
"boro": "Bronx",
"lat": "40.895251",
"long": "-73.853295",
"num": "Call 311 for hours"
},
{
"name": "Shiloh Temple Pentecostal Church",
"strAdress": "719 East 223rd St",
"zip": "10466",
"boro": "Bronx",
"lat": "40.886368",
"long": "-73.860405",
"num": "Call 311 for hours"
},
{
"name": "Shiloh Temple Pentecostal Church",
"strAdress": "719 East 223rd St",
"zip": "10466",
"boro": "Bronx",
"lat": "40.886368",
"long": "-73.860405",
"num": "Call 311 for hours"
},
{
"name": "The Grace of God Ministries-Church Inc.",
"strAdress": "963 East 233rd St",
"zip": "10466",
"boro": "Bronx",
"lat": "40.891117",
"long": "-73.849352",
"num": "Call 311 for hours"
},
{
"name": "Resources Center For Community Development INC",
"strAdress": "402 East 152nd Street",
"zip": "10466",
"boro": "Bronx",
"lat": "40.817957",
"long": "-73.916630",
"num": "7184021212"
},
{
"name": "Astor Child Guidance Center",
"strAdress": "750 Tilden St",
"zip": "10467",
"boro": "Bronx",
"lat": "40.876531",
"long": "-73.862786",
"num": "Call 311 for hours"
},
{
"name": "Christ Disciples International Ministries",
"strAdress": "3021-31 Webster Ave",
"zip": "10467",
"boro": "Bronx",
"lat": "40.869908",
"long": "-73.879457",
"num": "Call 311 for hours"
},
{
"name": "City of Faith Church of God",
"strAdress": "3445-3453 White Plains Rd",
"zip": "10467",
"boro": "Bronx",
"lat": "40.876943",
"long": "-73.867452",
"num": "Call 311 for hours"
},
{
"name": "St. Luke's Senior Community Program",
"strAdress": "777 East 222nd St",
"zip": "10467",
"boro": "Bronx",
"lat": "40.885108",
"long": "-73.858994",
"num": "Call 311 for hours"
},
{
"name": "St. Luke's Senior Community Program",
"strAdress": "777 East 222nd St",
"zip": "10467",
"boro": "Bronx",
"lat": "40.885108",
"long": "-73.858994",
"num": "Call 311 for hours"
},
{
"name": "West Bronx Housing and Neighborhood Resource Center##",
"strAdress": "220 EAST 204TH STREET",
"zip": "10458",
"boro": "Bronx",
"lat": "40.874270000000003",
"long": "-73.885535000000004",
"num": "646-385-3378"
},
{
"name": "Heavenly Vision Christian Center",
"strAdress": "2868 Jerome Ave",
"zip": "10468",
"boro": "Bronx",
"lat": "40.871493",
"long": "-73.892173",
"num": "Call 311 for hours"
},
{
"name": "Power Praise And Deliverance, Inc.",
"strAdress": "120 East 184th Street",
"zip": "10468",
"boro": "Bronx",
"lat": "40.859506000000003",
"long": "-73.900475",
"num": "347-409-0288"
},
{
"name": "Tolentine Zeiser Community Life",
"strAdress": "2345 University Ave (Basement Fordham Rd Ent.)",
"zip": "10468",
"boro": "Bronx",
"lat": "40.862303",
"long": "-73.905654",
"num": "Call 311 for hours"
},
{
"name": "Eastchester Presbyterian Church",
"strAdress": "3154 Fish Ave",
"zip": "10469",
"boro": "Bronx",
"lat": "40.871234",
"long": "-73.847032",
"num": "Call 311 for hours"
},
{
"name": "El Amanecer de la Esperanza Ministry Inc.",
"strAdress": "1769 East 172nd St",
"zip": "10472",
"boro": "Bronx",
"lat": "40.832947",
"long": "-73.868118",
"num": "Call 311 for hours"
},
{
"name": "Emanuel Pentecostal Faith Church",
"strAdress": "1310 Elder Ave",
"zip": "10472",
"boro": "Bronx",
"lat": "40.831618",
"long": "-73.87957",
"num": "Call 311 for hours"
},
{
"name": "Lost Sheep Christian Church/Feed My Sheep Community Pantry",
"strAdress": "1104 Elder Avenue #15",
"zip": "10472",
"boro": "Bronx",
"lat": "40.826157",
"long": "-73.878585999999999",
"num": "347-235-3723"
},
{
"name": "Holy Cross Food Pantry - Bronx",
"strAdress": "600 Soundview Ave",
"zip": "10473",
"boro": "Bronx",
"lat": "40.817201",
"long": "-73.86172",
"num": "Call 311 for hours"
},
{
"name": "Phipps- Soundview Community Center",
"strAdress": "1680 Seward Ave",
"zip": "10473",
"boro": "Bronx",
"lat": "40.818055",
"long": "-73.868860",
"num": "Call 311 for hours"
},
{
"name": "Bright Temple A.M.E. Church/Project F.I.L.L.",
"strAdress": "812 Faile Street",
"zip": "10474",
"boro": "Bronx",
"lat": "40.817222999999998",
"long": "-73.886893000000001",
"num": "718-542-7777"
},
{
"name": "Black Forum of Co-op City",
"strAdress": "177 Dreiser Loop - Room 20",
"zip": "10475",
"boro": "Bronx",
"lat": "40.876548",
"long": "-73.828779",
"num": "Call 311 for hours"
},
{
"name": "Brooklyn West Family Center",
"strAdress": "191 Joralemon St",
"zip": "11201",
"boro": "Brooklyn",
"lat": "40.692835",
"long": "-73.991714",
"num": "Call 311 for hours"
},
{
"name": "Department Of Probation Brooklyn Office",
"strAdress": "345 Adams Street - 6th Floor",
"zip": "11201",
"boro": "Brooklyn",
"lat": "40.692723000000001",
"long": "-73.988444000000001",
"num": "718-488-3640"
},
{
"name": "Christian Fellowship SDA Community SVCS-F.P.",
"strAdress": "777 Schenectady Ave",
"zip": "11203",
"boro": "Brooklyn",
"lat": "40.654322",
"long": "-73.933595",
"num": "Call 311 for hours"
},
{
"name": "Christian Fellowship SDA Community SVCS-S.K.",
"strAdress": "777 Schenectady Ave",
"zip": "11203",
"boro": "Brooklyn",
"lat": "40.654322",
"long": "-73.933595",
"num": "Call 311 for hours"
},
{
"name": "God's Battalion Of Prayer Church",
"strAdress": "661 Linden Boulevard",
"zip": "11203",
"boro": "Brooklyn",
"lat": "40.653888000000002",
"long": "-73.933947000000003",
"num": "(718) 774-5447"
},
{
"name": "Peniel SDA Church",
"strAdress": "1210 Utica Avenue",
"zip": "11203",
"boro": "Brooklyn",
"lat": "40.643044",
"long": "-73.929814",
"num": "Call 311 for hours"
},
{
"name": "Shalom Senior Center",
"strAdress": "483 Albany Ave",
"zip": "11203",
"boro": "Brooklyn",
"lat": "40.663335",
"long": "-73.939795",
"num": "Call 311 for hours"
},
{
"name": "Soc. SVDP @ St. Catherine",
"strAdress": "520 Linden Blvd",
"zip": "11203",
"boro": "Brooklyn",
"lat": "40.652976",
"long": "-73.939729",
"num": "Call 311 for hours"
},
{
"name": "St. Therese of Lisieux R.C. Church",
"strAdress": "4410 Avenue D",
"zip": "11203",
"boro": "Brooklyn",
"lat": "40.641784",
"long": "-73.934614",
"num": "Call 311 for hours"
},
{
"name": "Triumphant Full Gospel Assembly",
"strAdress": "889 Rutland Rd",
"zip": "11203",
"boro": "Brooklyn",
"lat": "40.660726",
"long": "-73.929986",
"num": "Call 311 for hours"
},
{
"name": "United Community Baptist Church",
"strAdress": "545 Utica Ave",
"zip": "11203",
"boro": "Brooklyn",
"lat": "40.660101",
"long": "-73.930913",
"num": "Call 311 for hours"
},
{
"name": "Community Services Center Of Greater Wilbg",
"strAdress": "378 Flushing Ave",
"zip": "11205",
"boro": "Brooklyn",
"lat": "40.698224",
"long": "-73.959483",
"num": "Call 311 for hours"
},
{
"name": "All People's Church of Apostolic Faith, Inc.",
"strAdress": "182 Tompkins Ave",
"zip": "11206",
"boro": "Brooklyn",
"lat": "40.692797",
"long": "-73.945823",
"num": "Call 311 for hours"
},
{
"name": "Black Veteran's for Social Justice",
"strAdress": "665 Willoughby Ave",
"zip": "11206",
"boro": "Brooklyn",
"lat": "40.694886",
"long": "-73.942597",
"num": "Call 311 for hours"
},
{
"name": "Compassion House Community Development Corporation",
"strAdress": "43 George Street",
"zip": "11206",
"boro": "Brooklyn",
"lat": "40.701337000000002",
"long": "-73.931794999999994",
"num": "7183868151"
},
{
"name": "Compassion House Community Development Corporation",
"strAdress": "43 George Street",
"zip": "11206",
"boro": "Brooklyn",
"lat": "40.701337000000002",
"long": "-73.931794999999994",
"num": "7183868151"
},
{
"name": "Solid Rock Baptist Church",
"strAdress": "120 Tompkins Ave",
"zip": "11206",
"boro": "Brooklyn",
"lat": "40.695082",
"long": "-73.946562",
"num": "Call 311 for hours"
},
{
"name": "St. Stephen Outreach Community Development Corporation",
"strAdress": "874 Myrtle Ave",
"zip": "11206",
"boro": "Brooklyn",
"lat": "40.695486",
"long": "-73.947127",
"num": "Call 311 for hours"
},
{
"name": "St. Stephen Outreach Community Development Corporation",
"strAdress": "874 Myrtle Ave",
"zip": "11206",
"boro": "Brooklyn",
"lat": "40.695486",
"long": "-73.947127",
"num": "Call 311 for hours"
},
{
"name": "Trinity Human Service Corporation",
"strAdress": "153 A Johnson Ave",
"zip": "11206",
"boro": "Brooklyn",
"lat": "40.706609",
"long": "-73.944246",
"num": "Call 311 for hours"
},
{
"name": "Cornerstone Seventh Day Adventist Church",
"strAdress": "138 Pennsylvania Ave",
"zip": "11207",
"boro": "Brooklyn",
"lat": "40.67446",
"long": "-73.896928",
"num": "Call 311 for hours"
},
{
"name": "Cornerstone Seventh Day Adventist Church",
"strAdress": "138 Pennsylvania Ave",
"zip": "11207",
"boro": "Brooklyn",
"lat": "40.67446",
"long": "-73.896928",
"num": "Call 311 for hours"
},
{
"name": "Family Service Network of N.Y. Inc.",
"strAdress": "1420 Bushwick Ave",
"zip": "11207",
"boro": "Brooklyn",
"lat": "40.684079",
"long": "-73.909209",
"num": "Call 311 for hours"
},
{
"name": "Mt. Paran Community Development Corp",
"strAdress": "1665 Broadway",
"zip": "11207",
"boro": "Brooklyn",
"lat": "40.684364",
"long": "-73.912999",
"num": "Call 311 for hours"
},
{
"name": "Mt. Paran Community Development Corp",
"strAdress": "1665 Broadway",
"zip": "11207",
"boro": "Brooklyn",
"lat": "40.684364",
"long": "-73.912999",
"num": "Call 311 for hours"
},
{
"name": "East New York Wesleyan Church/New Hope Family Worship Center",
"strAdress": "817 Livonia Ave",
"zip": "11207",
"boro": "Brooklyn",
"lat": "40.665871",
"long": "-73.886655",
"num": "Call 311 for hours"
},
{
"name": "Good Shepherd Services (East NY)",
"strAdress": "595 Sutter Ave",
"zip": "11207",
"boro": "Brooklyn",
"lat": "40.669306",
"long": "-73.896876",
"num": "718 346-2200"
},
{
"name": "Love Fellowship Tabernacle, Inc.",
"strAdress": "464 Liberty Ave",
"zip": "11207",
"boro": "Brooklyn",
"lat": "40.674948",
"long": "-73.892724",
"num": "(718)235-2266"
},
{
"name": "Overcoming Love Ministries",
"strAdress": "275 Liberty Ave",
"zip": "11207",
"boro": "Brooklyn",
"lat": "40.673899",
"long": "-73.90001",
"num": "Call 311 for hours"
},
{
"name": "Blessed Sacrament Church (Bklyn)",
"strAdress": "198 Euclid Ave",
"zip": "11208",
"boro": "Brooklyn",
"lat": "40.683561",
"long": "-73.874232",
"num": "Call 311 for hours"
},
{
"name": "Christ the Rock Church International",
"strAdress": "770-784 Glenmore Ave",
"zip": "11208",
"boro": "Brooklyn",
"lat": "40.678051",
"long": "-73.85912",
"num": "Call 311 for hours"
},
{
"name": "Good News Deliverance Tabernacle",
"strAdress": "442 Cleveland St",
"zip": "11208",
"boro": "Brooklyn",
"lat": "40.673881",
"long": "-73.884494",
"num": "Call 311 for hours"
},
{
"name": "Isaiah's Temple of Mt. Hope",
"strAdress": "862 Glenmore Ave",
"zip": "11208",
"boro": "Brooklyn",
"lat": "40.675603",
"long": "-73.87816",
"num": "Call 311 for hours"
},
{
"name": "Isaiah's Temple of Mt. Hope",
"strAdress": "862 Glenmore Ave",
"zip": "11208",
"boro": "Brooklyn",
"lat": "40.675603",
"long": "-73.87816",
"num": "Call 311 for hours"
},
{
"name": "Las Maravillas Del Exodo",
"strAdress": "302 Elton St",
"zip": "11208",
"boro": "Brooklyn",
"lat": "40.675806",
"long": "-73.884174",
"num": "Call 311 for hours"
},
{
"name": "Open Door To Heaven Outreach Ministry Inc.",
"strAdress": "894 Belmont Ave",
"zip": "11208",
"boro": "Brooklyn",
"lat": "40.673304000000002",
"long": "-73.875979000000001",
"num": "347-822-0714"
},
{
"name": "Second St. Paul Church of Christ, Disciple of Christ, Inc.",
"strAdress": "1048 Sutter Ave",
"zip": "11208",
"boro": "Brooklyn",
"lat": "40.671467",
"long": "-73.879963",
"num": "Call 311 for hours"
},
{
"name": "Bay Ridge Center",
"strAdress": "411 Ovington Ave",
"zip": "11209",
"boro": "Brooklyn",
"lat": "40.633702",
"long": "-74.023275",
"num": "Call 311 for hours"
},
{
"name": "CUCS Brooklyn VA Hospital (Vets and their families only)",
"strAdress": "800 Poly Place (5 West RM 310)",
"zip": "11209",
"boro": "Brooklyn",
"lat": "40.608742",
"long": "-74.024293",
"num": "(718) 836-6600"
},
{
"name": "Our Lady of Angels Human Services",
"strAdress": "336 73rd St",
"zip": "11209",
"boro": "Brooklyn",
"lat": "40.632344",
"long": "-74.026168",
"num": "Call 311 for hours"
},
{
"name": "Admirable Church INC.",
"strAdress": "1910 Flatbush Avenue",
"zip": "11210",
"boro": "Brooklyn",
"lat": "40.623109999999997",
"long": "-73.937742999999998",
"num": "718 649-7531"
},
{
"name": "AmmiI Evangelical Baptist Church",
"strAdress": "1799 Flatbush Ave",
"zip": "11210",
"boro": "Brooklyn",
"lat": "40.626318",
"long": "-73.940413",
"num": "Call 311 for hours"
},
{
"name": "Our Lady of Refuge R.C. Church",
"strAdress": "2020 Foster Ave",
"zip": "11210",
"boro": "Brooklyn",
"lat": "40.636462",
"long": "-73.957618",
"num": "Call 311 for hours"
},
{
"name": "Southside United H.D.F.C., Inc. - Los Sures",
"strAdress": "145 South 3rd Street",
"zip": "11211",
"boro": "Brooklyn",
"lat": "40.712406",
"long": "-73.961610",
"num": "718-599-1940"
},
{
"name": "Transfiguration Church",
"strAdress": "263 & 280 Marcy Ave",
"zip": "11211",
"boro": "Brooklyn",
"lat": "40.70527",
"long": "-73.955858",
"num": "Call 311 for hours"
},
{
"name": "United Jewish Org. (UJO) of Wlbg",
"strAdress": "32 Penn St",
"zip": "11211",
"boro": "Brooklyn",
"lat": "40.700136",
"long": "-73.961109",
"num": "718 643-9700 Appointments Only"
},
{
"name": "Affinity Health Plan - Pitkin Ave",
"strAdress": "1684 Pitkin Ave",
"zip": "11212",
"boro": "Brooklyn",
"lat": "40.700136",
"long": "-73.961109",
"num": "212 453-9532"
},
{
"name": "Brownsville Temple SDA Church",
"strAdress": "1089 Clarkson Ave",
"zip": "11212",
"boro": "Brooklyn",
"lat": "40.660012",
"long": "-73.922256",
"num": "Call 311 for hours"
},
{
"name": "Christian Cultural Center",
"strAdress": "1400 Linden Blvd",
"zip": "11212",
"boro": "Brooklyn",
"lat": "40.654135",
"long": "-73.908199",
"num": "Call 311 for hours"
},
{
"name": "Church of God, Inc.",
"strAdress": "1011 Winthrop St",
"zip": "11212",
"boro": "Brooklyn",
"lat": "40.660309",
"long": "-73.926171",
"num": "Call 311 for hours"
},
{
"name": "Ebenezer Seventh Day Adventist Church",
"strAdress": "1234 East New York Ave",
"zip": "11212",
"boro": "Brooklyn",
"lat": "40.667455",
"long": "-73.921334",
"num": "Call 311 for hours"
},
{
"name": "Ebenezer Seventh Day Adventist Church",
"strAdress": "1234 East New York Ave",
"zip": "11212",
"boro": "Brooklyn",
"lat": "40.667455",
"long": "-73.921334",
"num": "Call 311 for hours"
},
{
"name": "Hope Center Development Corporation",
"strAdress": "409 East 95th St",
"zip": "11212",
"boro": "Brooklyn",
"lat": "40.657291",
"long": "-73.918288",
"num": "Call 311 for hours"
},
{
"name": "Hope Center Development Corporation",
"strAdress": "414 East 95th St",
"zip": "11212",
"boro": "Brooklyn",
"lat": "40.657029",
"long": "-73.918612",
"num": "Call 311 for hours"
},
{
"name": "Little Rock Baptist Church Inc.",
"strAdress": "375 Bristol Street",
"zip": "11212",
"boro": "Brooklyn",
"lat": "40.661920000000002",
"long": "-73.910386000000003",
"num": "(718)495-6772"
},
{
"name": "Mt. Hebron Church of Christ",
"strAdress": "167 Chester St",
"zip": "11212",
"boro": "Brooklyn",
"lat": "40.667698",
"long": "-73.911171",
"num": "Call 311 for hours"
},
{
"name": "New Life SDA Church",
"strAdress": "885-87 Thomas Boyland St",
"zip": "11212",
"boro": "Brooklyn",
"lat": "40.682173",
"long": "-73.914322",
"num": "Call 311 for hours"
},
{
"name": "Our Lady of Mercy Church",
"strAdress": "680 Mother Gaston BLVD",
"zip": "11212",
"boro": "Brooklyn",
"lat": "40.662024",
"long": "-73.905196",
"num": "Call 311 for hours"
},
{
"name": "The Salvation Army Brownsville Corp",
"strAdress": "280 Riverdale Avenue",
"zip": "11212",
"boro": "Brooklyn",
"lat": "40.660994",
"long": "-73.906161",
"num": "Call 311 for hours"
},
{
"name": "Urban Strategies Inc.",
"strAdress": "61-71 RIVERDALE AVENUE",
"zip": "11212",
"boro": "Brooklyn",
"lat": "40.660297999999997",
"long": "-73.914457",
"num": "Call 311 for hours"
},
{
"name": "Bethany United Methodist Church",
"strAdress": "1208 St. John's Place",
"zip": "11213",
"boro": "Brooklyn",
"lat": "40.670677",
"long": "-73.938327",
"num": "Call 311 for hours"
},
{
"name": "Church of God Seventh Day Pentecostal",
"strAdress": "922 St. Marks Ave",
"zip": "11213",
"boro": "Brooklyn",
"lat": "40.674498",
"long": "-73.941613",
"num": "Call 311 for hours"
},
{
"name": "Crown Heights Jewish Community Council",
"strAdress": "877 Montgomery St",
"zip": "11213",
"boro": "Brooklyn",
"lat": "40.664829",
"long": "-73.935665",
"num": "Call 311 for hours"
},
{
"name": "Nat'l Comm. for Futh. of Jewish Ed. (UC)",
"strAdress": "824 Eastern Parkway",
"zip": "11213",
"boro": "Brooklyn",
"lat": "40.668903",
"long": "-73.94107",
"num": "Call 311 for hours"
},
{
"name": "St. Anthony Baptist Church",
"strAdress": "425 Utica Ave",
"zip": "11213",
"boro": "Brooklyn",
"lat": "40.663773",
"long": "-73.930857",
"num": "Call 311 for hours"
},
{
"name": "St. Augustine's American Catholic Church",
"strAdress": "298 Schenectady Ave",
"zip": "11213",
"boro": "Brooklyn",
"lat": "40.668263",
"long": "-73.934227",
"num": "Call 311 for hours"
},
{
"name": "St. Matthew's Roman Catholic Church",
"strAdress": "1342 Lincoln Place",
"zip": "11213",
"boro": "Brooklyn",
"lat": "40.669628",
"long": "-73.932117",
"num": "Call 311 for hours"
},
{
"name": "The Church of St. Mark",
"strAdress": "1417 Union St",
"zip": "11213",
"boro": "Brooklyn",
"lat": "40.668603",
"long": "-73.944598",
"num": "Call 311 for hours"
},
{
"name": "Bensonhurst Council of Jewish Organizations",
"strAdress": "8635 21st Ave",
"zip": "11214",
"boro": "Brooklyn",
"lat": "40.602367",
"long": "-73.996569",
"num": "Call 311 for hours"
},
{
"name": "Reaching Out Community Services",
"strAdress": "7708 New Utretch Ave",
"zip": "11214",
"boro": "Brooklyn",
"lat": "40.613999",
"long": "-74.000698",
"num": "718 373-4565"
},
{
"name": "Reaching-Out Community Services Inc.",
"strAdress": "7708 New Utrecht Ave",
"zip": "11214",
"boro": "Brooklyn",
"lat": "40.613999",
"long": "-74.000698",
"num": "Call 311 for hours"
},
{
"name": "Good Shepherd Services",
"strAdress": "503 5th Avenue",
"zip": "11215",
"boro": "Brooklyn",
"lat": "40.667056",
"long": "-73.987904",
"num": "718 965-3313 ext 409"
},
{
"name": "Bedford Central Presbyterian Church",
"strAdress": "1200 Dean Street",
"zip": "11216",
"boro": "Brooklyn",
"lat": "40.676500",
"long": "-73.949580",
"num": "718-467-0740"
},
{
"name": "Bedford Stuyvesant Restoration Corp.",
"strAdress": "1368 Fulton St 4th Floor",
"zip": "11216",
"boro": "Brooklyn",
"lat": "40.680192",
"long": "-73.94597",
"num": "718 636-6946"
},
{
"name": "Bed-Stuy WIC Center",
"strAdress": "20 New York Ave",
"zip": "11216",
"boro": "Brooklyn",
"lat": "40.679524",
"long": "-73.946833",
"num": "646 385-4456"
},
{
"name": "Beulah Chruch of God in Christ Jesus",
"strAdress": "956 Marcy Avenue",
"zip": "11216",
"boro": "Brooklyn",
"lat": "40.680629",
"long": "-73.946488",
"num": "Call 311 for hours"
},
{
"name": "Ebenezer Wesleyan Methodist Church",
"strAdress": "47 Rogers Ave",
"zip": "11216",
"boro": "Brooklyn",
"lat": "40.675923",
"long": "-73.952466",
"num": "Call 311 for hours"
},
{
"name": "Family Life Development Center",
"strAdress": "1476 Bedford Ave",
"zip": "11216",
"boro": "Brooklyn",
"lat": "40.672938",
"long": "-73.954591",
"num": "Call 311 for hours"
},
{
"name": "Hebron SDA Church",
"strAdress": "1256 Dean St",
"zip": "11216",
"boro": "Brooklyn",
"lat": "40.676629",
"long": "-73.947609",
"num": "Call 311 for hours"
},
{
"name": "Hebron SDA Church",
"strAdress": "1256 Dean St",
"zip": "11216",
"boro": "Brooklyn",
"lat": "40.676629",
"long": "-73.947609",
"num": "Call 311 for hours"
},
{
"name": "Shiloh SDA",
"strAdress": "449 Eastern Parkway",
"zip": "11216",
"boro": "Brooklyn",
"lat": "40.670071",
"long": "-73.953435",
"num": "Call 311 for hours"
},
{
"name": "Siloam Presbyterian Church Food Pantry",
"strAdress": "260 Jefferson Ave",
"zip": "11216",
"boro": "Brooklyn",
"lat": "40.68335",
"long": "-73.947169",
"num": "Call 311 for hours"
},
{
"name": "Stuyvesant Heights Christian Church",
"strAdress": "69 McDonough St",
"zip": "11216",
"boro": "Brooklyn",
"lat": "40.68114",
"long": "-73.943999",
"num": "Call 311 for hours"
},
{
"name": "The Salvation Army Bedford Temple Corps",
"strAdress": "601 Lafayette Ave",
"zip": "11216",
"boro": "Brooklyn",
"lat": "40.690185",
"long": "-73.95052",
"num": "Call 311 for hours"
},
{
"name": "Flatbush SDA Church",
"strAdress": "261 East 21st Street",
"zip": "11226",
"boro": "Brooklyn",
"lat": "40.648083999999997",
"long": "-73.959091000000001",
"num": "(718) 693-9180"
},
{
"name": "The Gospel Tabernacle Church Of Jesus Christ, Inc.",
"strAdress": "2314 Snyder Avenue",
"zip": "11226",
"boro": "Brooklyn",
"lat": "40.648479",
"long": "-73.955183",
"num": "718-282-3920"
},
{
"name": "Worldwide Evangelical Outreach",
"strAdress": "3102 Clarendon Rd",
"zip": "11226",
"boro": "Brooklyn",
"lat": "40.643062",
"long": "-73.947575",
"num": "Call 311 for hours"
},
{
"name": "Fifth Ave Committee (Fifth Ave Comm. clients only)",
"strAdress": "621 Degraw Street",
"zip": "11217",
"boro": "Brooklyn",
"lat": "40.679099",
"long": "-73.982737",
"num": "(718) 237-2017"
},
{
"name": "Hanson Place Seventh Day Adventist Church",
"strAdress": "150 South Portland Ave",
"zip": "11217",
"boro": "Brooklyn",
"lat": "40.684882",
"long": "-73.974299",
"num": "Call 311 for hours"
},
{
"name": "Park Slope Christian Help, Inc.",
"strAdress": "200 4th Ave",
"zip": "11217",
"boro": "Brooklyn",
"lat": "40.678342",
"long": "-73.982857",
"num": "Call 311 for hours"
},
{
"name": "RHOW BROOKLYN INC",
"strAdress": "360 Schermerhorn St",
"zip": "11217",
"boro": "Brooklyn",
"lat": "40.68652",
"long": "-73.980333",
"num": "Call 311 for hours"
},
{
"name": "RHOW BROOKLYN INC",
"strAdress": "360 Schermerhorn St",
"zip": "11217",
"boro": "Brooklyn",
"lat": "40.68652",
"long": "-73.980333",
"num": "Call 311 for hours"
},
{
"name": "South Bkln SDA Church Community Service Program",
"strAdress": "42 Prospect Place",
"zip": "11217",
"boro": "Brooklyn",
"lat": "40.679588",
"long": "-73.976629",
"num": "Call 311 for hours"
},
{
"name": "St. Augustine's Church",
"strAdress": "116 6th Ave",
"zip": "11217",
"boro": "Brooklyn",
"lat": "40.67839",
"long": "-73.97646",
"num": "Call 311 for hours"
},
{
"name": "Christ Apostolic Church Goke Food Pantry",
"strAdress": "622 Cortelyou Road",
"zip": "11218",
"boro": "Brooklyn",
"lat": "40.638612999999999",
"long": "-73.972071",
"num": "718-284-7479"
},
{
"name": "Oneg Shabbos",
"strAdress": "1601 41st St",
"zip": "11218",
"boro": "Brooklyn",
"lat": "40.635577",
"long": "-73.980571",
"num": "Call 311 for hours"
},
{
"name": "Maimonides Hospital WIC",
"strAdress": "5013 Ft. Hamilton Pkwy",
"zip": "11219",
"boro": "Brooklyn",
"lat": "40.637685",
"long": "-73.998653",
"num": "Call 311 for hours"
},
{
"name": "Tomche Shabbos of boro Park",
"strAdress": "6225 New Utrecht Ave",
"zip": "11219",
"boro": "Brooklyn",
"lat": "40.625886",
"long": "-73.997071",
"num": "Call 311 for hours"
},
{
"name": "Zichron Acheinu Levy-Menachem Tzion",
"strAdress": "928 44th St",
"zip": "11219",
"boro": "Brooklyn",
"lat": "40.642471",
"long": "-73.997376",
"num": "Call 311 for hours"
},
{
"name": "Holding Hands Ministries",
"strAdress": "6324 7th Avenue",
"zip": "11220",
"boro": "Brooklyn",
"lat": "40.634929",
"long": "-74.014191",
"num": "Call 311 for hours"
},
{
"name": "The Salvation Army Sunset Park Corps",
"strAdress": "520 50th St",
"zip": "11220",
"boro": "Brooklyn",
"lat": "40.644618",
"long": "-74.009961",
"num": "Call 311 for hours"
},
{
"name": "The Salvation Army Sunset Park Corps",
"strAdress": "520 50th St",
"zip": "11220",
"boro": "Brooklyn",
"lat": "40.644618",
"long": "-74.009961",
"num": "Call 311 for hours"
},
{
"name": "Brooklyn Rescue Mission Urban Harvest Center Inc.",
"strAdress": "919 Gates Ave",
"zip": "11221",
"boro": "Brooklyn",
"lat": "40.688927",
"long": "-73.929041",
"num": "Call 311 for hours"
},
{
"name": "Cornerstone Baptist Food Pantry",
"strAdress": "652-574 Madison Street",
"zip": "11221",
"boro": "Brooklyn",
"lat": "40.692257",
"long": "-73.915681",
"num": "Call 311 for hours"
},
{
"name": "Faith Center For Human Services, Inc.",
"strAdress": "1014-18 Gates Avenue",
"zip": "11221",
"boro": "Brooklyn",
"lat": "40.689163",
"long": "-73.922807",
"num": "347-614-3235"
},
{
"name": "Faith Center For Human Services, Inc.",
"strAdress": "1014-18 Gates Avenue",
"zip": "11221",
"boro": "Brooklyn",
"lat": "40.689163",
"long": "-73.922807",
"num": "347-614-3235"
},
{
"name": "Friendly Christian Church",
"strAdress": "569 Hart St",
"zip": "11221",
"boro": "Brooklyn",
"lat": "40.697175",
"long": "-73.929277",
"num": "Call 311 for hours"
},
{
"name": "Friendly Christian Church Disciples of Christ",
"strAdress": "569 Hart St",
"zip": "11221",
"boro": "Brooklyn",
"lat": "40.697175",
"long": "-73.929277",
"num": "Call 311 for hours"
},
{
"name": "Northeast Brooklyn Housing Development Corporation",
"strAdress": "376 Troop Ave",
"zip": "11221",
"boro": "Brooklyn",
"lat": "40.691306",
"long": "-73.942902",
"num": "Call 311 for hours"
},
{
"name": "St. John's Bread & Life Food Pantry",
"strAdress": "795 Lexington Ave",
"zip": "11221",
"boro": "Brooklyn",
"lat": "40.690344",
"long": "-73.928965",
"num": "Call 311 for hours"
},
{
"name": "St. John's Bread & Life Program",
"strAdress": "795 Lexington Ave",
"zip": "11221",
"boro": "Brooklyn",
"lat": "40.690344",
"long": "-73.928965",
"num": "Call 311 for hours"
},
{
"name": "St. John's Bread & Life",
"strAdress": "795 Lexington Ave",
"zip": "11221",
"boro": "Brooklyn",
"lat": "40.690344",
"long": "-73.928965",
"num": "718 547-0058"
},
{
"name": "St. Philip's Christian Church",
"strAdress": "765 Lafayette Ave",
"zip": "11221",
"boro": "Brooklyn",
"lat": "40.691165",
"long": "-73.942315",
"num": "Call 311 for hours"
},
{
"name": "The Salvation Army Bushwick Corps",
"strAdress": "1151 Bushwick Ave",
"zip": "11221",
"boro": "Brooklyn",
"lat": "40.689328",
"long": "-73.917226",
"num": "Call 311 for hours"
},
{
"name": "The Salvation Army Bushwick Corps",
"strAdress": "1151 Bushwick Ave",
"zip": "11221",
"boro": "Brooklyn",
"lat": "40.689328",
"long": "-73.917226",
"num": "Call 311 for hours"
},
{
"name": "Thurston Memorial Outreach Ministries",
"strAdress": "1243 Bushwich Ave",
"zip": "11221",
"boro": "Brooklyn",
"lat": "40.687824",
"long": "-73.914696",
"num": "Call 311 for hours"
},
{
"name": "Thurston Memorial Outreach Ministries",
"strAdress": "1243 Bushwich Ave",
"zip": "11221",
"boro": "Brooklyn",
"lat": "40.687824",
"long": "-73.914696",
"num": "Call 311 for hours"
},
{
"name": "Greenpoint Reformed Church Food Pantry",
"strAdress": "136 Milton Street",
"zip": "11222",
"boro": "Brooklyn",
"lat": "40.729186",
"long": "-73.954970",
"num": "718-383-5941"
},
{
"name": "St. Cecilia's Food Pantry",
"strAdress": "84 Herbert St",
"zip": "11222",
"boro": "Brooklyn",
"lat": "40.720138",
"long": "-73.941878",
"num": "Call 311 for hours"
},
{
"name": "Our Lady of Grace Parish Ministry",
"strAdress": "2322 East 4th St",
"zip": "11223",
"boro": "Brooklyn",
"lat": "40.593423",
"long": "-73.966999",
"num": "Call 311 for hours"
},
{
"name": "Our Lady of Grace Parish Ministry",
"strAdress": "2322 East 4th St",
"zip": "11223",
"boro": "Brooklyn",
"lat": "40.593423",
"long": "-73.966999",
"num": "Call 311 for hours"
},
{
"name": "Sephardic Bikur Holim Food Pantry",
"strAdress": "425 Kings Highway",
"zip": "11223",
"boro": "Brooklyn",
"lat": "40.604585",
"long": "-73.974883",
"num": "Call 311 for hours"
},
{
"name": "Acts Community Development Corp.",
"strAdress": "2114 Mermaid Ave",
"zip": "11224",
"boro": "Brooklyn",
"lat": "40.575974",
"long": "-73.988375",
"num": "Call 311 for hours"
},
{
"name": "Acts Community Development Corp.",
"strAdress": "2114 Mermaid Ave",
"zip": "11224",
"boro": "Brooklyn",
"lat": "40.575974",
"long": "-73.988375",
"num": "Call 311 for hours"
},
{
"name": "Catholic Charities",
"strAdress": "2866 West 17th St",
"zip": "11224",
"boro": "Brooklyn",
"lat": "40.577277",
"long": "-73.984928",
"num": "Call 311 for hours"
},
{
"name": "Chance for Children",
"strAdress": "11 McKeever Place - 1st Floor (Basement Level)",
"zip": "11225",
"boro": "Brooklyn",
"lat": "40.665794",
"long": "-73.958708",
"num": "Call 311 for hours"
},
{
"name": "Crown Heights JCC",
"strAdress": "387 Kingston Avenue",
"zip": "11225",
"boro": "Brooklyn",
"lat": "40.665628",
"long": "-73.942308",
"num": "718 778-8808"
},
{
"name": "Gethsemane SDA Church",
"strAdress": "357 Empire Blvd",
"zip": "11225",
"boro": "Brooklyn",
"lat": "40.664227",
"long": "-73.950048",
"num": "Call 311 for hours"
},
{
"name": "Horeb SDA Community Services",
"strAdress": "520 Kingston Ave",
"zip": "11225",
"boro": "Brooklyn",
"lat": "40.661058",
"long": "-73.943022",
"num": "Call 311 for hours"
},
{
"name": "Calvary Pentecostal Church",
"strAdress": "151 Woodruff Avenue",
"zip": "11226",
"boro": "Brooklyn",
"lat": "40.654355000000002",
"long": "-73.961084999999997",
"num": "718 4698252"
},
{
"name": "Church Avenue Merchants Block Assoc., Inc./Camba Food Pantry",
"strAdress": "2241 Church Ave",
"zip": "11226",
"boro": "Brooklyn",
"lat": "40.650679",
"long": "-73.957362",
"num": "Call 311 for hours"
},
{
"name": "Church of God of Salvation",
"strAdress": "1615 Nostrand Ave",
"zip": "11226",
"boro": "Brooklyn",
"lat": "40.646673",
"long": "-73.948792",
"num": "Call 311 for hours"
},
{
"name": "Fernande Valme' Ministries Inc.",
"strAdress": "1120 Flatbush Ave",
"zip": "11226",
"boro": "Brooklyn",
"lat": "40.643124",
"long": "-73.957834",
"num": "Call 311 for hours"
},
{
"name": "Holy Cross Food Pantry - Brooklyn",
"strAdress": "2530 Church Ave",
"zip": "11226",
"boro": "Brooklyn",
"lat": "40.650269",
"long": "-73.953466",
"num": "Call 311 for hours"
},
{
"name": "Holy Innocents",
"strAdress": "279 East 17th St",
"zip": "11226",
"boro": "Brooklyn",
"lat": "40.644081",
"long": "-73.962638",
"num": "Call 311 for hours"
},
{
"name": "More Grace Redemptive Center",
"strAdress": "646 Parkside Ave",
"zip": "11226",
"boro": "Brooklyn",
"lat": "40.656008",
"long": "-73.951717",
"num": "Call 311 for hours"
},
{
"name": "Peniel Haitian Church of C and MA",
"strAdress": "2741 Albemarle Rd",
"zip": "11226",
"boro": "Brooklyn",
"lat": "40.648304",
"long": "-73.950611",
"num": "Call 311 for hours"
},
{
"name": "Salt & Sea Mission Church Inc.",
"strAdress": "2417-2419 STILLWELL AVE",
"zip": "11223",
"boro": "Brooklyn",
"lat": "40.588524999999997",
"long": "-73.983345",
"num": "718 473-7979"
},
{
"name": "Public Health Solutions",
"strAdress": "2555 Ocean Ave",
"zip": "11229",
"boro": "Brooklyn",
"lat": "40.599209",
"long": "-73.951101",
"num": "Call 311 for hours"
},
{
"name": "Masbia of Flatbush",
"strAdress": "1372 Coney Island Ave",
"zip": "11230",
"boro": "Brooklyn",
"lat": "40.624062",
"long": "-73.965311",
"num": "Call 311 for hours"
},
{
"name": "Masbia of Flatbush",
"strAdress": "1372 Coney Island Ave",
"zip": "11230",
"boro": "Brooklyn",
"lat": "40.624062",
"long": "-73.965311",
"num": "Call 311 for hours"
},
{
"name": "Food First, Inc.",
"strAdress": "165 Conover St",
"zip": "11231",
"boro": "Brooklyn",
"lat": "40.678205",
"long": "-74.013514",
"num": "Call 311 for hours"
},
{
"name": "Movement of Pentecostal Christian Church",
"strAdress": "90-92 Summit St",
"zip": "11231",
"boro": "Brooklyn",
"lat": "40.682217",
"long": "-74.003457",
"num": "Call 311 for hours"
},
{
"name": "Center for Family Life",
"strAdress": "443 39th St",
"zip": "11232",
"boro": "Brooklyn",
"lat": "40.652051",
"long": "-74.00477",
"num": "Call 311 for hours"
},
{
"name": "Center for Family Life of Sunset Park",
"strAdress": "443 39th Street 1st Floor",
"zip": "11232",
"boro": "Brooklyn",
"lat": "40.652051",
"long": "-74.00477",
"num": "718 492-3585"
},
{
"name": "Bed-Stuy Campaign Against Hunger",
"strAdress": "2004 Fulton St",
"zip": "11233",
"boro": "Brooklyn",
"lat": "40.678418",
"long": "-73.918094",
"num": "Call 311 for hours"
},
{
"name": "Blessed Assurance Church Of God Blessed Assurance of God",
"strAdress": "2093 Fulton Street",
"zip": "11233",
"boro": "Brooklyn",
"lat": "40.678438999999997",
"long": "-73.909319999999994",
"num": "347-965-1725"
},
{
"name": "Church Of Praise And Worship God In Christ",
"strAdress": "526 Ralph Avenue Brooklyn",
"zip": "11233",
"boro": "Brooklyn",
"lat": "40.671417",
"long": "-73.922631",
"num": "347-462-5679"
},
{
"name": "Community Services Housing Development Corp.",
"strAdress": "547 Howard Ave",
"zip": "11233",
"boro": "Brooklyn",
"lat": "40.668937",
"long": "-73.91997",
"num": "Call 311 for hours"
},
{
"name": "God's Deliverance Temple, Inc.",
"strAdress": "438 Ralph Ave",
"zip": "11233",
"boro": "Brooklyn",
"lat": "40.674177",
"long": "-73.922433",
"num": "Call 311 for hours"
},
{
"name": "King Emmanuel Missionary Baptist Church",
"strAdress": "207A Bainbridge Street",
"zip": "11233",
"boro": "Brooklyn",
"lat": "40.681328",
"long": "-73.928975",
"num": "718 773-1650"
},
{
"name": "Neighbors Together",
"strAdress": "2094 Fulton St",
"zip": "11233",
"boro": "Brooklyn",
"lat": "40.678288",
"long": "-73.913841",
"num": "Call 311 for hours"
},
{
"name": "OPIN (Other People in Need)",
"strAdress": "1768 St. Johns Place",
"zip": "11233",
"boro": "Brooklyn",
"lat": "40.669877",
"long": "-73.918771",
"num": "Call 311 for hours"
},
{
"name": "St. Mark's Church of Christ",
"strAdress": "439 Ralph Ave",
"zip": "11233",
"boro": "Brooklyn",
"lat": "40.674118",
"long": "-73.921774",
"num": "Call 311 for hours"
},
{
"name": "St. Paul Pentecostal Church",
"strAdress": "133 Thomas S Boyland Street",
"zip": "11223",
"boro": "Brooklyn",
"lat": "40.680360999999998",
"long": "-73.913647999999995",
"num": "917-604-9644"
},
{
"name": "St. Philip's Episcopal/St. Benedict's Pantry",
"strAdress": "265 Decatur St",
"zip": "11233",
"boro": "Brooklyn",
"lat": "40.681635",
"long": "-73.933253",
"num": "Call 311 for hours"
},
{
"name": "True Holy Church of God in Christ Jesus",
"strAdress": "2336 Atlantic Ave",
"zip": "11233",
"boro": "Brooklyn",
"lat": "40.676038",
"long": "-73.907582",
"num": "Call 311 for hours"
},
{
"name": "Union Baptist Church",
"strAdress": "461 Decatur St",
"zip": "11233",
"boro": "Brooklyn",
"lat": "40.693942",
"long": "-73.90227",
"num": "Call 311 for hours"
},
{
"name": "Union Baptist Church",
"strAdress": "461 Decatur St",
"zip": "11233",
"boro": "Brooklyn",
"lat": "40.693942",
"long": "-73.90227",
"num": "Call 311 for hours"
},
{
"name": "Metropolitan Council On Jewish Poverty",
"strAdress": "5361 Preston Court",
"zip": "11234",
"boro": "Brooklyn",
"lat": "40.638725000000001",
"long": "-73.923711999999995",
"num": "718-763-5318"
},
{
"name": "Jewish Community Council Of Marine Park",
"strAdress": "2076 Flatbush Ave 2nd FL",
"zip": "11234",
"boro": "Brooklyn",
"lat": "40.619032",
"long": "-73.933413",
"num": "Call 311 for hours"
},
{
"name": "Kingsborough Community College",
"strAdress": "2001 Oriental Blvd - T4-265",
"zip": "11235",
"boro": "Brooklyn",
"lat": "40.577814",
"long": "-73.935561",
"num": "718-368-4660"
},
{
"name": "Kingsborough Community College (Students and their families only)",
"strAdress": "2001 Oriental Blvd (Bldg V Room 231)",
"zip": "11235",
"boro": "Brooklyn",
"lat": "40.577814",
"long": "-73.935561",
"num": "(718) 368-5411"
},
{
"name": "Shorefront Jewish Community Council",
"strAdress": "128 Brighton Beach Ave - 4th Floor",
"zip": "11235",
"boro": "Brooklyn",
"lat": "40.576219",
"long": "-73.967139",
"num": "718-743-0575 x. 7501 Appointments Only"
},
{
"name": "Shorefront Jewish Community Council (Shorefront JCC)",
"strAdress": "128 Brighton Beach 4th FL",
"zip": "11235",
"boro": "Brooklyn",
"lat": "40.576149",
"long": "-73.967182",
"num": "Call 311 for hours"
},
{
"name": "Bay View Houses Resident Association",
"strAdress": "2085 Rockaway Parkway",
"zip": "11236",
"boro": "Brooklyn",
"lat": "40.632857000000001",
"long": "-73.886954000000003",
"num": "347 216-5909"
},
{
"name": "Christian Church of Canarsie",
"strAdress": "602 East 89th St",
"zip": "11236",
"boro": "Brooklyn",
"lat": "40.642383",
"long": "-73.91006",
"num": "Call 311 for hours"
},
{
"name": "Church of God (BK)",
"strAdress": "627-29 Remson Ave",
"zip": "11236",
"boro": "Brooklyn",
"lat": "40.663036",
"long": "-73.931359",
"num": "Call 311 for hours"
},
{
"name": "International Pentecostal City Mission",
"strAdress": "9202-14 Church Ave",
"zip": "11236",
"boro": "Brooklyn",
"lat": "40.641444",
"long": "-73.982618",
"num": "Call 311 for hours"
},
{
"name": "Our Lady of Miracles-Canarsie Cluster Center",
"strAdress": "757 East 86th St",
"zip": "11236",
"boro": "Brooklyn",
"lat": "40.638809",
"long": "-73.909232",
"num": "Call 311 for hours"
},
{
"name": "Redeemed Christian Church Of God International Chapel",
"strAdress": "781 East 93rd Street",
"zip": "11236",
"boro": "Brooklyn",
"lat": "40.649198",
"long": "-73.911789",
"num": "(347)955-4403"
},
{
"name": "Make the Road NYC",
"strAdress": "301 Grove St",
"zip": "11237",
"boro": "Brooklyn",
"lat": "40.698491",
"long": "-73.915913",
"num": "718-418-7690"
},
{
"name": "Ridgewood Bushwick Senior Citizens Council",
"strAdress": "184 Wyckoff Ave",
"zip": "11237",
"boro": "Brooklyn",
"lat": "40.701205",
"long": "-73.91368",
"num": "718 366-1830"
},
{
"name": "Bethel Seventh-Day Adventist Church",
"strAdress": "457 Grand Ave",
"zip": "11238",
"boro": "Brooklyn",
"lat": "40.681706",
"long": "-73.96126",
"num": "Call 311 for hours"
},
{
"name": "Bethel Seventh-Day Adventist Church",
"strAdress": "457 Grand Ave",
"zip": "11238",
"boro": "Brooklyn",
"lat": "40.681706",
"long": "-73.96126",
"num": "Call 311 for hours"
},
{
"name": "Child Development Support Corporation",
"strAdress": "352-358 Classon Ave",
"zip": "11238",
"boro": "Brooklyn",
"lat": "40.688259",
"long": "-73.960019",
"num": "Call 311 for hours"
},
{
"name": "Church of God Feeding the Hungry",
"strAdress": "836 Classon Ave",
"zip": "11238",
"boro": "Brooklyn",
"lat": "40.67241",
"long": "-73.961178",
"num": "Call 311 for hours"
},
{
"name": "Hope City Empowerment Center",
"strAdress": "650-656 Washington Ave",
"zip": "11238",
"boro": "Brooklyn",
"lat": "40.678748",
"long": "-73.964226",
"num": "Call 311 for hours"
},
{
"name": "St. Teresa of Avila",
"strAdress": "560 Sterling Place",
"zip": "11238",
"boro": "Brooklyn",
"lat": "40.673869",
"long": "-73.959793",
"num": "Call 311 for hours"
},
{
"name": "Teen Challenge",
"strAdress": "444 Clinton Ave",
"zip": "11238",
"boro": "Brooklyn",
"lat": "40.684981",
"long": "-73.967794",
"num": "Call 311 for hours"
},
{
"name": "Teen Challenge",
"strAdress": "444 Clinton Ave",
"zip": "11238",
"boro": "Brooklyn",
"lat": "40.684981",
"long": "-73.967794",
"num": "Call 311 for hours"
},
{
"name": "Jewish Community Council of Canarsie #1",
"strAdress": "1170 Pennsylvania Ave",
"zip": "11239",
"boro": "Brooklyn",
"lat": "40.651526",
"long": "-73.885839",
"num": "Call 311 for hours"
},
{
"name": "Sisters With Purpose Inc.",
"strAdress": "1540 Van Siclen Ave",
"zip": "11239",
"boro": "Brooklyn",
"lat": "40.647499",
"long": "-73.877827",
"num": "646-460-4101"
},
{
"name": "Gay Men's Health Crisis",
"strAdress": "446 West 33rd St",
"zip": "10001",
"boro": "New York",
"lat": "40.753616",
"long": "-73.998957",
"num": "Call 311 for hours"
},
{
"name": "Gay Men's Health Crisis (GMHC)",
"strAdress": "446 West 33rd St",
"zip": "10001",
"boro": "New York",
"lat": "40.753616",
"long": "-73.998957",
"num": "Call 311 for hours"
},
{
"name": "Holy Apostles Soup Kitchen",
"strAdress": "296 Ninth Ave @ 28th St",
"zip": "10001",
"boro": "New York",
"lat": "40.749094",
"long": "-73.996944",
"num": "Call 311 for hours"
},
{
"name": "St. John's Bread of Life",
"strAdress": "213 West 30th St",
"zip": "10001",
"boro": "New York",
"lat": "40.748869",
"long": "-73.99321",
"num": "Call 311 for hours"
},
{
"name": "Cabrini Immigrant Services of New York City Inc",
"strAdress": "139 Henry St",
"zip": "10002",
"boro": "New York",
"lat": "40.71347",
"long": "-73.990761",
"num": "Call 311 for hours"
},
{
"name": "Dewitt Reformed Church",
"strAdress": "280 Rivington St",
"zip": "10002",
"boro": "New York",
"lat": "40.717493",
"long": "-73.979516",
"num": "Call 311 for hours"
},
{
"name": "Emblem Health Plan – Bowery",
"strAdress": "87 Bowery 1st FL",
"zip": "10002",
"boro": "New York",
"lat": "40.716880",
"long": "-73.995248",
"num": "Call 311 for hours"
},
{
"name": "Grand Street Settlement",
"strAdress": "80 Pitt Street",
"zip": "10002",
"boro": "New York",
"lat": "40.718302",
"long": "-73.981785",
"num": "(646) 201-4289"
},
{
"name": "Henry Street Settlement (Services Below 14th Street Only)",
"strAdress": "281 East Broadway",
"zip": "10002",
"boro": "New York",
"lat": "40.714328",
"long": "-73.984398",
"num": "212 471-2400"
},
{
"name": "Our Lady of Sorrows",
"strAdress": "213 Stanton St",
"zip": "10002",
"boro": "New York",
"lat": "40.719456",
"long": "-73.982386",
"num": "Call 311 for hours"
},
{
"name": "AIDS Momentum Project at Middle Collegiate Church",
"strAdress": "50 East 7th Street",
"zip": "10003",
"boro": "New York",
"lat": "40.727553",
"long": "-73.987661",
"num": "Call 311 for hours"
},
{
"name": "Nazareth Housing Inc.",
"strAdress": "206 East 4th Street",
"zip": "10009",
"boro": "New York",
"lat": "40.723610999999998",
"long": "-73.984244000000004",
"num": "212-477-7017"
},
{
"name": "The Father's Heart Ministries",
"strAdress": "543-545 East 11th St",
"zip": "10009",
"boro": "New York",
"lat": "40.727669",
"long": "-73.979962",
"num": "Call 311 for hours"
},
{
"name": "The Father's Heart Ministry Center",
"strAdress": "543-545 East 11th St",
"zip": "10009",
"boro": "New York",
"lat": "40.727669",
"long": "-73.979962",
"num": "Call 311 for hours"
},
{
"name": "Trinity's Services and Food for the Homeless, Inc.",
"strAdress": "602 East 9th St",
"zip": "10009",
"boro": "New York",
"lat": "40.725994",
"long": "-73.980179",
"num": "Call 311 for hours"
},
{
"name": "Trinity's Services and Food for the Homeless, Inc.",
"strAdress": "602 East 9th St",
"zip": "10009",
"boro": "New York",
"lat": "40.725994",
"long": "-73.980179",
"num": "Call 311 for hours"
},
{
"name": "University Community Social Services, Inc.",
"strAdress": "137 East 2nd St",
"zip": "10009",
"boro": "New York",
"lat": "40.72306",
"long": "-73.986416",
"num": "Call 311 for hours"
},
{
"name": "New Alternative for Children, Inc.",
"strAdress": "37 West 26th St - 6th Floor",
"zip": "10010",
"boro": "New York",
"lat": "40.744601",
"long": "-73.990436",
"num": "Call 311 for hours"
},
{
"name": "Ascension Outreach, Inc.",
"strAdress": "12 West 11th St",
"zip": "10011",
"boro": "New York",
"lat": "40.734084",
"long": "-73.995743",
"num": "Call 311 for hours"
},
{
"name": "Church of the Village United Methodist Church",
"strAdress": "201 West 13th St",
"zip": "10011",
"boro": "New York",
"lat": "40.738216",
"long": "-74.000405",
"num": "Call 311 for hours"
},
{
"name": "Church of the Village United Methodist Church",
"strAdress": "201 West 13th St",
"zip": "10011",
"boro": "New York",
"lat": "40.738216",
"long": "-74.000405",
"num": "Call 311 for hours"
},
{
"name": "St. Peter's Food Pantry",
"strAdress": "346 West 20th St. Nr. 9th Ave",
"zip": "10011",
"boro": "New York",
"lat": "40.769212",
"long": "-73.984772",
"num": "Call 311 for hours"
},
{
"name": "The Salvation Army New York Temple Corps",
"strAdress": "132 West 14th St (Ground Floor)",
"zip": "10011",
"boro": "New York",
"lat": "40.74131",
"long": "-74.006653",
"num": "Call 311 for hours"
},
{
"name": "Xavier Mission Inc.",
"strAdress": "55 West 15th St",
"zip": "10011",
"boro": "New York",
"lat": "40.737587",
"long": "-73.995257",
"num": "Call 311 for hours"
},
{
"name": "Xavier Mission Inc.",
"strAdress": "55 West 15th St",
"zip": "10011",
"boro": "New York",
"lat": "40.737587",
"long": "-73.995257",
"num": "Call 311 for hours"
},
{
"name": "Chinese Consolidated Benevolent Assoc (CCBA)",
"strAdress": "62 Mott St",
"zip": "10013",
"boro": "New York",
"lat": "40.715944",
"long": "-73.997961",
"num": "Call 311 for hours"
},
{
"name": "New York City Rescue Mission",
"strAdress": "90 Lafayette St",
"zip": "10013",
"boro": "New York",
"lat": "40.717536",
"long": "-74.001621",
"num": "Call 311 for hours"
},
{
"name": "New York City Rescue Mission",
"strAdress": "90 Lafayette St",
"zip": "10013",
"boro": "New York",
"lat": "40.717536",
"long": "-74.001621",
"num": "Call 311 for hours"
},
{
"name": "St. Josephs Soup Kitchen Incorportated",
"strAdress": "371 6th Ave & Washington Pl",
"zip": "10014",
"boro": "New York",
"lat": "40.732294",
"long": "-74.000529",
"num": "Call 311 for hours"
},
{
"name": "Grand Central Neighborhood Social Service Corp.",
"strAdress": "120 East 32nd St",
"zip": "10016",
"boro": "New York",
"lat": "40.745198",
"long": "-73.981476",
"num": "Call 311 for hours"
},
{
"name": "The Mid Manhattan Library",
"strAdress": "455 5th Avenue",
"zip": "10016",
"boro": "New York",
"lat": "40.751886",
"long": "-73.981705",
"num": "(212) 340-0861"
},
{
"name": "MCCNY Charities",
"strAdress": "446 West 36th St",
"zip": "10018",
"boro": "New York",
"lat": "40.75533",
"long": "-73.997514",
"num": "Call 311 for hours"
},
{
"name": "Rauschendusch Metro Ministries Inc.",
"strAdress": "410 West 40th St",
"zip": "10018",
"boro": "New York",
"lat": "40.757203",
"long": "-73.994323",
"num": "Call 311 for hours"
},
{
"name": "Sacred Heart of Jesus Christ",
"strAdress": "457 West 51st St",
"zip": "10019",
"boro": "New York",
"lat": "40.765235",
"long": "-73.990301",
"num": "Call 311 for hours"
},
{
"name": "St. Paul's House Inc.",
"strAdress": "335 West 51st Street",
"zip": "10019",
"boro": "New York",
"lat": "40.763677",
"long": "-73.986994",
"num": "Call 311 for hours"
},
{
"name": "Jan Hus Presbyterian Church/Homeless Outreach and Advocacy Program",
"strAdress": "351 East 74th St",
"zip": "10021",
"boro": "New York",
"lat": "40.769554",
"long": "-73.955512",
"num": "Call 311 for hours"
},
{
"name": "Jan Hus Presbyterian Church/Homeless Outreach and Advocacy Program",
"strAdress": "351 East 74th St",
"zip": "10021",
"boro": "New York",
"lat": "40.769554",
"long": "-73.955512",
"num": "Call 311 for hours"
},
{
"name": "Central Synagogue Caring Committee",
"strAdress": "123 East 55th St",
"zip": "10022",
"boro": "New York",
"lat": "40.760027",
"long": "-73.970572",
"num": "Call 311 for hours"
},
{
"name": "Coatition for the Homeless",
"strAdress": "108 East 51st St",
"zip": "10022",
"boro": "New York",
"lat": "40.757571",
"long": "-73.973022",
"num": "Call 311 for hours"
},
{
"name": "Crossroads Community Services Inc.",
"strAdress": "108 East 51st St",
"zip": "10022",
"boro": "New York",
"lat": "40.757571",
"long": "-73.973022",
"num": "Call 311 for hours"
},
{
"name": "Crossroads Community Services Inc.",
"strAdress": "108 East 51st St",
"zip": "10022",
"boro": "New York",
"lat": "40.757571",
"long": "-73.973022",
"num": "Call 311 for hours"
},
{
"name": "Momentum Project @ St. Peter's Church",
"strAdress": "619 Lexington Ave",
"zip": "10022",
"boro": "New York",
"lat": "40.758565",
"long": "-73.970383",
"num": "Call 311 for hours"
},
{
"name": "Momentum Project @ St. Peter's Church",
"strAdress": "619 Lexington Ave",
"zip": "10022",
"boro": "New York",
"lat": "40.758565",
"long": "-73.970383",
"num": "Call 311 for hours"
},
{
"name": "St. Peter's Church Breakfast Program",
"strAdress": "619 Lexington Ave @ 54th St",
"zip": "10022",
"boro": "New York",
"lat": "40.764798",
"long": "-73.984294",
"num": "Call 311 for hours"
},
{
"name": "Christ & St. Stephen's Food Program",
"strAdress": "120 West 69th St",
"zip": "10023",
"boro": "New York",
"lat": "40.775601",
"long": "-73.981091",
"num": "Call 311 for hours"
},
{
"name": "National Council of Jewish Women",
"strAdress": "241 West 72nd St",
"zip": "10023",
"boro": "New York",
"lat": "40.779485",
"long": "-73.983009",
"num": "Call 311 for hours"
},
{
"name": "National Council of Jewish Women",
"strAdress": "241 West 72nd St",
"zip": "10023",
"boro": "New York",
"lat": "40.779485",
"long": "-73.983009",
"num": "Call 311 for hours"
},
{
"name": "Congregation B'nai Jeshurun",
"strAdress": "257 West 88th St",
"zip": "10024",
"boro": "New York",
"lat": "40.790139",
"long": "-73.976061",
"num": "Call 311 for hours"
},
{
"name": "St. Ignatius Episcopal Church",
"strAdress": "552 West End Ave",
"zip": "10024",
"boro": "New York",
"lat": "40.789266",
"long": "-73.9772",
"num": "Call 311 for hours"
},
{
"name": "West Side Campaign Against Hunger",
"strAdress": "263 W. 86th St @ West End Ave",
"zip": "10024",
"boro": "New York",
"lat": "40.788869",
"long": "-73.977123",
"num": "Call 311 for hours"
},
{
"name": "Cathedral Church of St. John the Divine",
"strAdress": "1047 Amsterdam Ave @ W. 112th St",
"zip": "10025",
"boro": "New York",
"lat": "40.804465",
"long": "-73.964019",
"num": "Call 311 for hours"
},
{
"name": "Church Of Notre Dame",
"strAdress": "405 West 114th Street",
"zip": "10025",
"boro": "New York",
"lat": "40.805083000000003",
"long": "-73.960404999999994",
"num": "212-866-1500"
},
{
"name": "Community Impact",
"strAdress": "616 West 114th St",
"zip": "10025",
"boro": "New York",
"lat": "40.806898",
"long": "-73.965904",
"num": "Call 311 for hours"
},
{
"name": "Franciscan Community Center at Holy name",
"strAdress": "207 West 96th St",
"zip": "10025",
"boro": "New York",
"lat": "40.794412",
"long": "-73.970502",
"num": "Call 311 for hours"
},
{
"name": "Southern Baptist Church",
"strAdress": "12 West 108th St",
"zip": "10025",
"boro": "New York",
"lat": "40.799588",
"long": "-73.960146",
"num": "Call 311 for hours"
},
{
"name": "Community Kitchen Of West Harlem - Food Bank",
"strAdress": "252 West 116th St",
"zip": "10026",
"boro": "New York",
"lat": "40.803943",
"long": "-73.954989",
"num": "212-894-8060"
},
{
"name": "Food Bank for New York City",
"strAdress": "252 West 116th St",
"zip": "10026",
"boro": "New York",
"lat": "40.803943",
"long": "-73.954989",
"num": "Call 311 for hours"
},
{
"name": "Food Bank for New York City",
"strAdress": "252 West 116th St",
"zip": "10026",
"boro": "New York",
"lat": "40.803943",
"long": "-73.954989",
"num": "Call 311 for hours"
},
{
"name": "Project Create - Anthony House",
"strAdress": "73 Lenox Ave",
"zip": "10026",
"boro": "New York",
"lat": "40.800547",
"long": "-73.950866",
"num": "Call 311 for hours"
},
{
"name": "African Services Committee",
"strAdress": "429 West 127th St",
"zip": "10027",
"boro": "New York",
"lat": "40.813454",
"long": "-73.954512",
"num": "Call 311 for hours"
},
{
"name": "Antioch Outreach Ministries",
"strAdress": "41 West 124th St",
"zip": "10027",
"boro": "New York",
"lat": "40.806595",
"long": "-73.94419",
"num": "Call 311 for hours"
},
{
"name": "Church of the Annunciation",
"strAdress": "88 Convent Ave Near 132nd St",
"zip": "10027",
"boro": "New York",
"lat": "40.814583",
"long": "-73.947944",
"num": "Call 311 for hours"
},
{
"name": "CUCS _ Central Harlem",
"strAdress": "304 West 133rd St 1st Fl",
"zip": "10027",
"boro": "New York",
"lat": "40.815283",
"long": "-73.947964",
"num": "(212) 749-8900"
},
{
"name": "Harlem Community Nutritional Services",
"strAdress": "132 West 125th Street 5th FL.",
"zip": "10027",
"boro": "New York",
"lat": "40.808261999999999",
"long": "-73.947241000000005",
"num": "2126667538"
},
{
"name": "Harlem Dowling West Side Center/Specialized Services",
"strAdress": "2090 Adam Clayton Powell Jr. Blvd - 1st Floor",
"zip": "10027",
"boro": "New York",
"lat": "40.808785",
"long": "-73.948994",
"num": "Call 311 for hours"
},
{
"name": "Mt. Olivet Baptist Church Community Meal Program",
"strAdress": "201 Lenox Ave",
"zip": "10027",
"boro": "New York",
"lat": "40.804649",
"long": "-73.94788",
"num": "Call 311 for hours"
},
{
"name": "Riverside Church Food Pantry",
"strAdress": "91 Claremont Ave @ 120th St",
"zip": "10027",
"boro": "New York",
"lat": "40.80761",
"long": "-73.954949",
"num": "Call 311 for hours"
},
{
"name": "Salem United Methodist Church",
"strAdress": "2190 Adam Clayton Powell Jr. Blvd",
"zip": "10027",
"boro": "New York",
"lat": "40.811944",
"long": "-73.94661",
"num": "Call 311 for hours"
},
{
"name": "Salem United Methodist Church",
"strAdress": "2190 Adam Clayton Powell Jr. Blvd",
"zip": "10027",
"boro": "New York",
"lat": "40.811944",
"long": "-73.94661",
"num": "Call 311 for hours"
},
{
"name": "Shiloh Church of Christ",
"strAdress": "5-7 West 128th St",
"zip": "10027",
"boro": "New York",
"lat": "40.808764",
"long": "-73.941274",
"num": "Call 311 for hours"
},
{
"name": "Shiloh Church of Christ (FP)",
"strAdress": "5-7 West 128th St",
"zip": "10027",
"boro": "New York",
"lat": "40.808764",
"long": "-73.941274",
"num": "Call 311 for hours"
},
{
"name": "St. Mary's Episcopal Church Food Pantry",
"strAdress": "521 West 126th St",
"zip": "10027",
"boro": "New York",
"lat": "40.814931",
"long": "-73.956034",
"num": "Call 311 for hours"
},
{
"name": "Little Sisters of the Assumption Family Health Services",
"strAdress": "333 East 115th St",
"zip": "10029",
"boro": "New York",
"lat": "40.795833",
"long": "-73.936614",
"num": "Call 311 for hours"
},
{
"name": "Macedonia Ch. Assembly of God-Bread of Life Food Pantry",
"strAdress": "340 East 106th St",
"zip": "10029",
"boro": "New York",
"lat": "40.789679",
"long": "-73.940965",
"num": "Call 311 for hours"
},
{
"name": "Metropolitan Hospital WIC",
"strAdress": "1901 1st Ave",
"zip": "10029",
"boro": "New York",
"lat": "40.785225",
"long": "-73.944981",
"num": "Call 311 for hours"
},
{
"name": "New York Common Pantry",
"strAdress": "8 East 109th Street",
"zip": "10029",
"boro": "New York",
"lat": "40.795786",
"long": "-73.949229000000003",
"num": "917-720-9700"
},
{
"name": "New York Common Pantry",
"strAdress": "8 East 109th Street",
"zip": "10029",
"boro": "New York",
"lat": "40.795786",
"long": "-73.949229000000003",
"num": "917-720-9700"
},
{
"name": "New York Common Pantry",
"strAdress": "8 East 109th Street",
"zip": "10029",
"boro": "New York",
"lat": "40.795786",
"long": "-73.949229000000003",
"num": "Call 311 for hours"
},
{
"name": "St. Cecilia's Parish Services",
"strAdress": "125 East 105th St",
"zip": "10029",
"boro": "New York",
"lat": "40.791828",
"long": "-73.947331",
"num": "Call 311 for hours"
},
{
"name": "Goddard Riverside",
"strAdress": "140 West 140th St Basement level",
"zip": "10030",
"boro": "New York",
"lat": "40.818088",
"long": "-73.940513",
"num": "(212) 234-3481"
},
{
"name": "St. Charles Borromeo Church",
"strAdress": "211 West 141st St",
"zip": "10030",
"boro": "New York",
"lat": "40.819606",
"long": "-73.941655",
"num": "Call 311 for hours"
},
{
"name": "Church of the Crucifixion",
"strAdress": "459 West 149th St",
"zip": "10031",
"boro": "New York",
"lat": "40.827489",
"long": "-73.944822",
"num": "Call 311 for hours"
},
{
"name": "Convent Avenue Baptist Church",
"strAdress": "425 West 144th St @ Convent Ave",
"zip": "10031",
"boro": "New York",
"lat": "40.824292",
"long": "-73.946181",
"num": "Call 311 for hours"
},
{
"name": "Upper Manhattan Mental Health Center",
"strAdress": "1727 Amsterdam Ave",
"zip": "10031",
"boro": "New York",
"lat": "40.825536",
"long": "-73.946907",
"num": "Call 311 for hours"
},
{
"name": "West Harlem Group Assistance",
"strAdress": "625 Lenox Ave",
"zip": "10031",
"boro": "New York",
"lat": "40.818314",
"long": "-73.937893",
"num": "Call 311 for hours"
},
{
"name": "Community League of the Heights",
"strAdress": "508 West 159th St",
"zip": "10032",
"boro": "New York",
"lat": "40.834191",
"long": "-73.941915",
"num": "Call 311 for hours"
},
{
"name": "Affinity Health Plan - Wash. Heights",
"strAdress": "1307 St. Nicholas Ave",
"zip": "10033",
"boro": "New York",
"lat": "40.845833",
"long": "-73.936598",
"num": "Call 311 for hours"
},
{
"name": "Jewish Community Council of Washington Hgts",
"strAdress": "121 Bennett Ave #11A",
"zip": "10033",
"boro": "New York",
"lat": "40.854098",
"long": "-73.934506",
"num": "Call 311 for hours"
},
{
"name": "Washington Heights Ecumenical Food Pantry",
"strAdress": "4111 B'way @ 173rd St",
"zip": "10033",
"boro": "New York",
"lat": "40.844663",
"long": "-73.93872",
"num": "Call 311 for hours"
},
{
"name": "Good Shepherd Food Pantry",
"strAdress": "104 Cooper St. Near W. 207th",
"zip": "10034",
"boro": "New York",
"lat": "40.712784",
"long": "-74.005941",
"num": "Call 311 for hours"
},
{
"name": "New York City Love Kitchen Inc.",
"strAdress": "3816 9th Ave",
"zip": "10034",
"boro": "New York",
"lat": "40.862198",
"long": "-73.918517",
"num": "Call 311 for hours"
},
{
"name": "New York City Love Kitchen Inc.",
"strAdress": "3816 9th Ave",
"zip": "10034",
"boro": "New York",
"lat": "40.862198",
"long": "-73.918517",
"num": "Call 311 for hours"
},
{
"name": "Worldwide Missionary Movement/Centro Evangelistico MMM, Inc.",
"strAdress": "148 Post Ave",
"zip": "10034",
"boro": "New York",
"lat": "40.865306",
"long": "-73.919013",
"num": "Call 311 for hours"
},
{
"name": "All Saints R.C. Church",
"strAdress": "47 East 129th St",
"zip": "10035",
"boro": "New York",
"lat": "40.808327",
"long": "-73.938418",
"num": "Call 311 for hours"
},
{
"name": "Beth Hark Christian Counseling Center",
"strAdress": "1832 Madison Ave",
"zip": "10035",
"boro": "New York",
"lat": "40.801995",
"long": "-73.943360",
"num": "Call 311 for hours"
},
{
"name": "CUCS _ East Harlem",
"strAdress": "198 E. 121st St 5th Fl",
"zip": "10035",
"boro": "New York",
"lat": "40.801261",
"long": "-73.938382",
"num": "212 927-0962"
},
{
"name": "Fraternite Notre Dame",
"strAdress": "2290 First Ave",
"zip": "10035",
"boro": "New York",
"lat": "40.797016",
"long": "-73.934318",
"num": "Call 311 for hours"
},
{
"name": "Fraternite Notre Dame, Inc.",
"strAdress": "2290 First Ave",
"zip": "10035",
"boro": "New York",
"lat": "40.797016",
"long": "-73.934318",
"num": "Call 311 for hours"
},
{
"name": "Friendly Hands Ministry Inc.",
"strAdress": "225-41 East 118th St",
"zip": "10035",
"boro": "New York",
"lat": "40.798988",
"long": "-73.937843",
"num": "Call 311 for hours"
},
{
"name": "Friendly Hands Ministry Inc.",
"strAdress": "225-41 East 118th St",
"zip": "10035",
"boro": "New York",
"lat": "40.798988",
"long": "-73.937843",
"num": "Call 311 for hours"
},
{
"name": "Harvest of Soul/Holy Ghost",
"strAdress": "13-15 East 125th St",
"zip": "10035",
"boro": "New York",
"lat": "40.806198",
"long": "-73.941673",
"num": "Call 311 for hours"
},
{
"name": "Holy Ghost Pentecostal Church",
"strAdress": "13-15 East 125th Street",
"zip": "10035",
"boro": "New York",
"lat": "40.806193999999998",
"long": "-73.941682",
"num": "Call 311 for hours"
},
{
"name": "Iris House",
"strAdress": "2271 2nd Ave",
"zip": "10035",
"boro": "New York",
"lat": "40.79754",
"long": "-73.937774",
"num": "Call 311 for hours"
},
{
"name": "Holy Cross Food Supplement Program",
"strAdress": "329 West 42nd St",
"zip": "10036",
"boro": "New York",
"lat": "40.758128",
"long": "-73.991271",
"num": "Call 311 for hours"
},
{
"name": "St. Clements Food Pantry",
"strAdress": "423 West 46th St - 9th/10th Ave",
"zip": "10036",
"boro": "New York",
"lat": "40.755252",
"long": "-73.998659",
"num": "Call 311 for hours"
},
{
"name": "Bethel Ame Church",
"strAdress": "54-60 West 132nd St",
"zip": "10037",
"boro": "New York",
"lat": "40.811488",
"long": "-73.941034",
"num": "Call 311 for hours"
},
{
"name": "St. Mark the Evangelist Church",
"strAdress": "65 West 138th St",
"zip": "10037",
"boro": "New York",
"lat": "40.815909",
"long": "-73.938678",
"num": "Call 311 for hours"
},
{
"name": "Father Creavin's Food Pantry",
"strAdress": "276 West 151st St",
"zip": "10039",
"boro": "New York",
"lat": "40.825964",
"long": "-73.937942",
"num": "Call 311 for hours"
},
{
"name": "Christ Church United Methodist",
"strAdress": "520 Park Avenue @ 60th St",
"zip": "10065",
"boro": "New York",
"lat": "40.763329",
"long": "-73.968259",
"num": "Call 311 for hours"
},
{
"name": "Temple Shaaray Tefila",
"strAdress": "250 East 79th St",
"zip": "10075",
"boro": "New York",
"lat": "40.773321",
"long": "-73.95553",
"num": "Call 311 for hours"
},
{
"name": "Met Council Central",
"strAdress": "120 Broadway 7th Fl",
"zip": "10271",
"boro": "New York",
"lat": "40.712784",
"long": "-74.005941",
"num": "212 453-9532 Appointments Only"
},
{
"name": "Center of Hope International",
"strAdress": "38-49 12th St (L.I.C.)",
"zip": "11101",
"boro": "Queens",
"lat": "40.756814",
"long": "-73.941736",
"num": "Call 311 for hours"
},
{
"name": "Iglesia Alianza Misionera Ebenezer",
"strAdress": "43-02 38th St (L.I.C.)",
"zip": "11101",
"boro": "Queens",
"lat": "40.74563",
"long": "-73.927211",
"num": "Call 311 for hours"
},
{
"name": "St. Raphael Church Food Pantry",
"strAdress": "35-20 Greenpoint Ave, LIC",
"zip": "11101",
"boro": "Queens",
"lat": "40.737218",
"long": "-73.930605",
"num": "Call 311 for hours"
},
{
"name": "Queens North Family Center",
"strAdress": "23-40 Astoria Blvd",
"zip": "11102",
"boro": "Queens",
"lat": "40.771581",
"long": "-73.923775",
"num": "Call 311 for hours"
},
{
"name": "St. Margaret Mary Church",
"strAdress": "9-18 27th Ave",
"zip": "11102",
"boro": "Queens",
"lat": "40.773777",
"long": "-73.930487",
"num": "Call 311 for hours"
},
{
"name": "New York School of Urban Ministry",
"strAdress": "31-65 46th St",
"zip": "11103",
"boro": "Queens",
"lat": "40.757359",
"long": "-73.913349",
"num": "Call 311 for hours"
},
{
"name": "The Salvation Army Astoria Corps",
"strAdress": "45-18 Broadway",
"zip": "11103",
"boro": "Queens",
"lat": "40.756625",
"long": "-73.914548",
"num": "Call 311 for hours"
},
{
"name": "Fortune Society (Fortune clients only)",
"strAdress": "2976 Northern Blvd",
"zip": "11104",
"boro": "Queens",
"lat": "40.752046",
"long": "-73.927237",
"num": "(212) 691-7554"
},
{
"name": "Hour Children Community Outreach",
"strAdress": "36-49 11th St (LIC)",
"zip": "11106",
"boro": "Queens",
"lat": "40.759861",
"long": "-73.940446",
"num": "Call 311 for hours"
},
{
"name": "La Jornda",
"strAdress": "135-32 38th Avenue",
"zip": "11354",
"boro": "Queens",
"lat": "40.760416999999997",
"long": "-73.831804000000005",
"num": "917-880-5693"
},
{
"name": "Department Of Labor-Flushing",
"strAdress": "138-60 Barclay Ave 2nd Fl",
"zip": "11355",
"boro": "Queens",
"lat": "40.758304",
"long": "-73.826333",
"num": "212-894-8060"
},
{
"name": "Min Kwon",
"strAdress": "136-19 41ST Ave",
"zip": "11355",
"boro": "Queens",
"lat": "40.758873",
"long": "-73.828873",
"num": "718 460-5600"
},
{
"name": "The Child Center of NY- Flushing Clinic",
"strAdress": "140-15B Sanford Ave",
"zip": "11355",
"boro": "Queens",
"lat": "40.757532",
"long": "-73.826762",
"num": "(718) 228-0720 Ext. 235"
},
{
"name": "Kehilat Sepahrdim of Ahvat Achim",
"strAdress": "150-62 78th Road, Flushing",
"zip": "11367",
"boro": "Queens",
"lat": "40.721018000000001",
"long": "-73.811530000000005",
"num": "(718)5919574"
},
{
"name": "Corona S.D.A. Church 35",
"strAdress": "35-30 103RD Street",
"zip": "11368",
"boro": "Queens",
"lat": "40.753816999999998",
"long": "-73.864864999999995",
"num": "(718) 429-7050"
},
{
"name": "Corona S.D.A. Church 35",
"strAdress": "35-30 103RD Street",
"zip": "11368",
"boro": "Queens",
"lat": "40.753816999999998",
"long": "-73.864864999999995",
"num": "(718)651-4534"
},
{
"name": "Elmcor Youth & Adult Activities #2",
"strAdress": "33-16 108th St",
"zip": "11368",
"boro": "Queens",
"lat": "40.724519",
"long": "-73.845292",
"num": "Call 311 for hours"
},
{
"name": "Lefrak City Jewish Center, Inc.",
"strAdress": "98-15 Horace Harding Expressway",
"zip": "11368",
"boro": "Queens",
"lat": "40.735963",
"long": "-73.860588",
"num": "Call 311 for hours"
},
{
"name": "Mt. Horeb Baptist Church",
"strAdress": "109-20 34th Ave",
"zip": "11368",
"boro": "Queens",
"lat": "40.756426",
"long": "-73.85892",
"num": "Call 311 for hours"
},
{
"name": "Mt. Olivet Gospel Church",
"strAdress": "33-27 97th St, Corona",
"zip": "11368",
"boro": "Queens",
"lat": "40.756154",
"long": "-73.870686",
"num": "Call 311 for hours"
},
{
"name": "Northeast Conference Community Center SDA",
"strAdress": "99-13 Northern Blvd",
"zip": "11368",
"boro": "Queens",
"lat": "40.757556999999998",
"long": "-73.868977000000001",
"num": "347-527-2444"
},
{
"name": "SCO Family of Services Woodside*",
"strAdress": "103-24 Roosevelt Ave 3rd Fl",
"zip": "11368",
"boro": "Queens",
"lat": "40.749931",
"long": "-73.862009",
"num": "718 426-7523"
},
{
"name": "Urban Health Plan - Plaza Del Sol",
"strAdress": "37-16 108Th Street",
"zip": "11368",
"boro": "Queens",
"lat": "40.753885",
"long": "-73.860301",
"num": "Call 311 for hours"
},
{
"name": "Atonement Lutheran Church",
"strAdress": "30-61 Street (Jackson Height)",
"zip": "11369",
"boro": "Queens",
"lat": "40.729120",
"long": "-73.904202",
"num": "718-639-6047"
},
{
"name": "First Baptist Church",
"strAdress": "100-10 Astoria Blvd., E. Elmhurst",
"zip": "11369",
"boro": "Queens",
"lat": "40.761523",
"long": "-73.86896",
"num": "Call 311 for hours"
},
{
"name": "Make The Road – Queens",
"strAdress": "92-10 Roosevelt Ave",
"zip": "11372",
"boro": "Queens",
"lat": "40.748658",
"long": "-73.874116",
"num": "Call 311 for hours"
},
{
"name": "Metro Plus - Jackson Heights",
"strAdress": "92-14 Roosevelt Ave",
"zip": "11372",
"boro": "Queens",
"lat": "40.748671",
"long": "-73.873993",
"num": "Call 311 for hours"
},
{
"name": "St. Mark AME Church/ The Voice of Hagar",
"strAdress": "95-18 Northern BLVD",
"zip": "11372",
"boro": "Queens",
"lat": "40.756856",
"long": "-73.872486",
"num": "Call 311 for hours"
},
{
"name": "The Salvation Army Temple Corp",
"strAdress": "86-07 35th Ave",
"zip": "11372",
"boro": "Queens",
"lat": "40.752228",
"long": "-73.880656",
"num": "Call 311 for hours"
},
{
"name": "Elmhurst Hospital – Lobby",
"strAdress": "79-01 Broadway Queens",
"zip": "11373",
"boro": "Queens",
"lat": "40.745104",
"long": "-73.885649",
"num": "Call 311 for hours"
},
{
"name": "Elmhurst Hospital – WIC",
"strAdress": "81-06 Baxter Ave",
"zip": "11373",
"boro": "Queens",
"lat": "40.745241",
"long": "-73.883899",
"num": "Call 311 for hours"
},
{
"name": "New Life Community Development Corporation",
"strAdress": "82-10 Queens Blvd (Elmhurst)",
"zip": "11373",
"boro": "Queens",
"lat": "40.736874",
"long": "-73.881149",
"num": "Call 311 for hours"
},
{
"name": "Jewish Institute of Queens",
"strAdress": "60-05 Woodhaven Blvd (Elmhurst)",
"zip": "11373",
"boro": "Queens",
"lat": "40.731192",
"long": "-73.870973",
"num": "Call 311 for hours"
},
{
"name": "Jewish Institute of Queens",
"strAdress": "60-05 Woodhaven Blvd (Elmhurst)",
"zip": "11373",
"boro": "Queens",
"lat": "40.731192",
"long": "-73.870973",
"num": "Call 311 for hours"
},
{
"name": "Masbia of Queens",
"strAdress": "98-08 Queens Blvd",
"zip": "11374",
"boro": "Queens",
"lat": "40.728099",
"long": "-73.857419",
"num": "Call 311 for hours"
},
{
"name": "Masbia of Queens",
"strAdress": "98-08 Queens Blvd",
"zip": "11374",
"boro": "Queens",
"lat": "40.728099",
"long": "-73.857419",
"num": "Call 311 for hours"
},
{
"name": "Forest Hills Seniors Center",
"strAdress": "108-25 62nd Drive",
"zip": "11375",
"boro": "Queens",
"lat": "40.736294999999998",
"long": "-73.850117999999995",
"num": "718-699-1010"
},
{
"name": "Queens Jewish Community Council",
"strAdress": "119-45 Union Turnpike",
"zip": "11375",
"boro": "Queens",
"lat": "40.713981",
"long": "-73.832215",
"num": "646-581-9677 Appointments Only"
},
{
"name": "AIDS Center of Queens County",
"strAdress": "62-07 Woodside Ave",
"zip": "11377",
"boro": "Queens",
"lat": "40.74472",
"long": "-73.902259",
"num": "Call 311 for hours"
},
{
"name": "BVM/St. Mary's Church Winfield",
"strAdress": "70-31 48th Ave (Woodside)",
"zip": "11377",
"boro": "Queens",
"lat": "40.738618",
"long": "-73.893168",
"num": "Call 311 for hours"
},
{
"name": "Corpus Christi Food Pantry",
"strAdress": "31-30 61st St",
"zip": "11377",
"boro": "Queens",
"lat": "40.756528",
"long": "-73.901938",
"num": "Call 311 for hours"
},
{
"name": "Jackson Heights SDA",
"strAdress": "72-25 Woodside Ave",
"zip": "11377",
"boro": "Queens",
"lat": "40.742987",
"long": "-73.891721",
"num": "Call 311 for hours"
},
{
"name": "Jackson Heights SDA",
"strAdress": "72-25 Woodside Ave",
"zip": "11377",
"boro": "Queens",
"lat": "40.742987",
"long": "-73.891721",
"num": "Call 311 for hours"
},
{
"name": "Saint Teresa Church - Saint Vincent DePaul Society",
"strAdress": "50-20 45th St (Woodside)",
"zip": "11377",
"boro": "Queens",
"lat": "40.736973",
"long": "-73.921103",
"num": "Call 311 for hours"
},
{
"name": "Agape Christian Center",
"strAdress": "59-02 Summerfield St. Ridgewood",
"zip": "11385",
"boro": "Queens",
"lat": "40.699323",
"long": "-73.897955",
"num": "Call 311 for hours"
},
{
"name": "Agape Christian Center",
"strAdress": "59-02 Summerfield St. Ridgewood",
"zip": "11385",
"boro": "Queens",
"lat": "40.699323",
"long": "-73.897955",
"num": "Call 311 for hours"
},
{
"name": "Community Alliance Initiative",
"strAdress": "60-85 Myrtle Avenue",
"zip": "11385",
"boro": "Queens",
"lat": "40.700749000000002",
"long": "-73.895251999999999",
"num": "718-305-4888"
},
{
"name": "Ridgewood Older Adult Center & Services, Inc.",
"strAdress": "59-14 70th Ave",
"zip": "11385",
"boro": "Queens",
"lat": "40.701066",
"long": "-73.89979",
"num": "Call 311 for hours"
},
{
"name": "First Church of God in Christ",
"strAdress": "187-10 Baisley Blvd",
"zip": "11412",
"boro": "Queens",
"lat": "40.690246",
"long": "-73.76292",
"num": "Call 311 for hours"
},
{
"name": "First Church of God in Christ, Inc.",
"strAdress": "187-10 Baisley Blvd",
"zip": "11412",
"boro": "Queens",
"lat": "40.690246",
"long": "-73.76292",
"num": "Call 311 for hours"
},
{
"name": "Gospel Assembly - Queens",
"strAdress": "109-14 Farmers Blvd",
"zip": "11412",
"boro": "Queens",
"lat": "40.703554",
"long": "-73.766955",
"num": "Call 311 for hours"
},
{
"name": "Our Lady of Light Parish",
"strAdress": "118-22 Riverton St",
"zip": "11412",
"boro": "Queens",
"lat": "40.689716",
"long": "-73.763086",
"num": "Call 311 for hours"
},
{
"name": "St. Albans Gospel Assembly Food Ministry",
"strAdress": "200-25 Linden Blvd (St. Albans)",
"zip": "11412",
"boro": "Queens",
"lat": "40.694821",
"long": "-73.751811",
"num": "Call 311 for hours"
},
{
"name": "First Presbyterian Church of Springfield Gdns",
"strAdress": "216-02 137th Ave, Springfield Gdns",
"zip": "11413",
"boro": "Queens",
"lat": "40.676147",
"long": "-73.754929",
"num": "Call 311 for hours"
},
{
"name": "Gethsemane Soul Saving Station",
"strAdress": "145-41 228th St",
"zip": "11413",
"boro": "Queens",
"lat": "40.660835",
"long": "-73.752255",
"num": "Call 311 for hours"
},
{
"name": "Holy Temple Church, Inc.",
"strAdress": "136-25 Springfield Blvd",
"zip": "11413",
"boro": "Queens",
"lat": "40.677164",
"long": "-73.755192",
"num": "Call 311 for hours"
},
{
"name": "Linden SDA Church Community Services",
"strAdress": "228-20 137th Avenue",
"zip": "11413",
"boro": "Queens",
"lat": "40.672826999999998",
"long": "-73.743994000000001",
"num": "(718)527-4072"
},
{
"name": "One Way Church of Christ",
"strAdress": "216-11 Merrick Blvd",
"zip": "11413",
"boro": "Queens",
"lat": "40.697103",
"long": "-73.784112",
"num": "Call 311 for hours"
},
{
"name": "St. Luke Baptist Church Food Pantry",
"strAdress": "133-28 232nd Street",
"zip": "11413",
"boro": "Queens",
"lat": "40.675853",
"long": "-73.737768",
"num": "718-276-7066"
},
{
"name": "Taurus Associates Inc.",
"strAdress": "220-01 Merrick Blvd (Laurelton)",
"zip": "11413",
"boro": "Queens",
"lat": "40.679077",
"long": "-73.748828",
"num": "Call 311 for hours"
},
{
"name": "Our Lady of Grace Ministry",
"strAdress": "158-10 101St St.- Howard Beach",
"zip": "11414",
"boro": "Queens",
"lat": "40.661523",
"long": "-73.833112",
"num": "Call 311 for hours"
},
{
"name": "Project L.E.A.D.",
"strAdress": "84-17 Abingdon Rd",
"zip": "11415",
"boro": "Queens",
"lat": "40.706829",
"long": "-73.83088",
"num": "Call 311 for hours"
},
{
"name": "River Fund",
"strAdress": "8911 Lefferts Blvd",
"zip": "11418",
"boro": "Queens",
"lat": "40.697001",
"long": "-73.829083",
"num": "Call 311 for hours"
},
{
"name": "Calvary's Mission",
"strAdress": "102-16 89th Ave (Richmond Hill)",
"zip": "11418",
"boro": "Queens",
"lat": "40.693105",
"long": "-73.843413",
"num": "Call 311 for hours"
},
{
"name": "Elohim Community Development & Outreach Inc.",
"strAdress": "87-47 111th St, Richmond Hills",
"zip": "11418",
"boro": "Queens",
"lat": "40.695714",
"long": "-73.836611",
"num": "Call 311 for hours"
},
{
"name": "The River Fund",
"strAdress": "89-11 Lefferts Blvd",
"zip": "11418",
"boro": "Queens",
"lat": "40.697001",
"long": "-73.829083",
"num": "Call 311"
},
{
"name": "Deliverance Temple Church of Jesus Christ",
"strAdress": "134-10 Rockaway Blvd So. Ozone Park",
"zip": "11420",
"boro": "Queens",
"lat": "40.674332",
"long": "-73.804073",
"num": "Call 311 for hours"
},
{
"name": "Leviticus Church",
"strAdress": "114-12 Van Wyck Expressway",
"zip": "11420",
"boro": "Queens",
"lat": "40.682173",
"long": "-73.806303",
"num": "Call 311 for hours"
},
{
"name": "St. Teresa of Avila Community Services",
"strAdress": "129-04 109th Ave",
"zip": "11420",
"boro": "Queens",
"lat": "40.684241",
"long": "-73.813464",
"num": "Call 311 for hours"
},
{
"name": "All Nations Baptist Church of Woodhaven",
"strAdress": "86-76 80th St",
"zip": "11421",
"boro": "Queens",
"lat": "40.691542",
"long": "-73.861999",
"num": "Call 311 for hours"
},
{
"name": "II Second Chance Deliverance Church, Inc.",
"strAdress": "200-12 Hollis Avenue",
"zip": "11423",
"boro": "Queens",
"lat": "40.705886",
"long": "-73.757194999999996",
"num": "917-416-3697"
},
{
"name": "Beraca Seventh Day Adventist Church",
"strAdress": "91-19 191 St",
"zip": "11423",
"boro": "Queens",
"lat": "40.712107",
"long": "-73.768381",
"num": "Call 311 for hours"
},
{
"name": "Hollis Presbyterian Church",
"strAdress": "100-50 196th Street",
"zip": "11423",
"boro": "Queens",
"lat": "40.708058000000001",
"long": "-73.762737999999999",
"num": "(718) 776-4646"
},
{
"name": "Mount Sinai SDA Church",
"strAdress": "217-10 93rd Avenue Queens",
"zip": "11428",
"boro": "Queens",
"lat": "40.721036",
"long": "-73.739737",
"num": "(718) 465-1784"
},
{
"name": "Our Lady of Lourdes",
"strAdress": "92-96 220th St (Queens Village)",
"zip": "11428",
"boro": "Queens",
"lat": "40.722964",
"long": "-73.736435",
"num": "Call 311 for hours"
},
{
"name": "Hollis Avenue Congregational Church",
"strAdress": "211-04 Hollis Ave, Queens Village",
"zip": "11429",
"boro": "Queens",
"lat": "40.709262",
"long": "-73.74652",
"num": "Call 311 for hours"
},
{
"name": "Queensboro Temple SDA Church",
"strAdress": "96-50 222nd St",
"zip": "11429",
"boro": "Queens",
"lat": "40.718108",
"long": "-73.731974",
"num": "Call 311 for hours"
},
{
"name": "AIDS Center of Queens County",
"strAdress": "161-21 Jamaica Ave - 6th Floor",
"zip": "11432",
"boro": "Queens",
"lat": "40.704199",
"long": "-73.798025",
"num": "Call 311 for hours"
},
{
"name": "First Presbyterian Church of Jamaica",
"strAdress": "89-60 164th St",
"zip": "11432",
"boro": "Queens",
"lat": "40.705479",
"long": "-73.796366",
"num": "Call 311 for hours"
},
{
"name": "First Presbyterian Church of Jamaica",
"strAdress": "89-60 164th St",
"zip": "11432",
"boro": "Queens",
"lat": "40.705479",
"long": "-73.796366",
"num": "Call 311 for hours"
},
{
"name": "First United Methodist Church of Jamaica",
"strAdress": "162-10 Highland Ave",
"zip": "11432",
"boro": "Queens",
"lat": "40.709684",
"long": "-73.800237",
"num": "Call 311 for hours"
},
{
"name": "Jamaica Hispanic SDA Church",
"strAdress": "88-28 161 St",
"zip": "11432",
"boro": "Queens",
"lat": "40.707286",
"long": "-73.80095",
"num": "Call 311 for hours"
},
{
"name": "Jamaica Seventh Day Adventist Church",
"strAdress": "88-28 163 St",
"zip": "11432",
"boro": "Queens",
"lat": "40.652219",
"long": "-73.842298",
"num": "Call 311 for hours"
},
{
"name": "St. Nicholas of Tolentine Church- F.P.",
"strAdress": "150-75 Goethals Ave",
"zip": "11432",
"boro": "Queens",
"lat": "40.71893",
"long": "-73.809599",
"num": "Call 311 for hours"
},
{
"name": "Tabernacle of Prayer",
"strAdress": "90-07 Merrick Blvd",
"zip": "11432",
"boro": "Queens",
"lat": "40.706844",
"long": "-73.794328",
"num": "Call 311 for hours"
},
{
"name": "The Child Center of New York - Jamaica Ave",
"strAdress": "163-18 Jamaica Ave 4th Fl",
"zip": "11432",
"boro": "Queens",
"lat": "40.70459",
"long": "-73.796105",
"num": "718 657-7100 ext 219"
},
{
"name": "The Child Center Of NY - Jamaica Clinic",
"strAdress": "89-56 162nd Street, 2ND FL",
"zip": "11432",
"boro": "Queens",
"lat": "40.705072",
"long": "-73.798371",
"num": "Call 311 for hours"
},
{
"name": "The Salvation Army Jamaica Citadel Corps",
"strAdress": "90-23 161st St",
"zip": "11432",
"boro": "Queens",
"lat": "40.704925",
"long": "-73.798709",
"num": "Call 311 for hours"
},
{
"name": "The Salvation Army Jamaica Citadel Corps",
"strAdress": "90-23 161st St",
"zip": "11432",
"boro": "Queens",
"lat": "40.704925",
"long": "-73.798709",
"num": "Call 311 for hours"
},
{
"name": "Allen Outreach Minitry Feeding Program",
"strAdress": "111-54 Merrick Blvd",
"zip": "11433",
"boro": "Queens",
"lat": "40.694892",
"long": "-73.781333",
"num": "Call 311 for hours"
},
{
"name": "Allen Outreach Minitry Feeding Program",
"strAdress": "111-54 Merrick Blvd",
"zip": "11433",
"boro": "Queens",
"lat": "40.694892",
"long": "-73.781333",
"num": "Call 311 for hours"
},
{
"name": "Bethany Baptist Church of Jamaica",
"strAdress": "157-11 111th Ave",
"zip": "11433",
"boro": "Queens",
"lat": "40.690409",
"long": "-73.791682",
"num": "Call 311 for hours"
},
{
"name": "Bethany Baptist Church of Jamaica",
"strAdress": "157-11 111th Ave",
"zip": "11433",
"boro": "Queens",
"lat": "40.690409",
"long": "-73.791682",
"num": "Call 311 for hours"
},
{
"name": "Bethel Gospel Tabernacle Church",
"strAdress": "110-25 Guy R. Brewer Blvd",
"zip": "11433",
"boro": "Queens",
"lat": "40.692739",
"long": "-73.788107",
"num": "Call 311 for hours"
},
{
"name": "Bethel Gospel Tabernacle Church",
"strAdress": "110-25 Guy R. Brewer Blvd",
"zip": "11433",
"boro": "Queens",
"lat": "40.692739",
"long": "-73.788107",
"num": "Call 311 for hours"
},
{
"name": "Macedonia AME Church",
"strAdress": "106-16 Guy R. Brewer Blvd",
"zip": "11433",
"boro": "Queens",
"lat": "40.699318",
"long": "-73.793445",
"num": "7183535870"
},
{
"name": "Macedonia AME Church",
"strAdress": "106-16 Guy R. Brewer Blvd",
"zip": "11433",
"boro": "Queens",
"lat": "40.699318",
"long": "-73.793445",
"num": "7183535870"
},
{
"name": "The Harding Ford Vision, Inc .",
"strAdress": "157-22 South Road, Jamaica",
"zip": "11433",
"boro": "Queens",
"lat": "40.698145",
"long": "-73.797028",
"num": "718 291-9281"
},
{
"name": "The Harding Ford Vision, Inc .",
"strAdress": "157-22 South Road, Jamaica",
"zip": "11433",
"boro": "Queens",
"lat": "40.698145",
"long": "-73.797028",
"num": "718 291-9281"
},
{
"name": "V.E.T.S. Inc.",
"strAdress": "111-16 173rd St",
"zip": "11433",
"boro": "Queens",
"lat": "40.694756",
"long": "-73.779498",
"num": "Call 311 for hours"
},
{
"name": "VETS Inc. Locust Manor Senior Residence",
"strAdress": "170-06 Baisley Blvd Queens",
"zip": "11433",
"boro": "Queens",
"lat": "40.680927",
"long": "-73.773063",
"num": "646-261-1973"
},
{
"name": "Christ Church International Joseph's House",
"strAdress": "122-20 Merrill Street",
"zip": "11434",
"boro": "Queens",
"lat": "40.682734000000004",
"long": "-73.769859999999994",
"num": "718-276-2799"
},
{
"name": "Ministry Tools Inc.",
"strAdress": "170-20 140th Ave",
"zip": "11434",
"boro": "Queens",
"lat": "40.670814",
"long": "-73.769327",
"num": "Call 311 for hours"
},
{
"name": "National Sorority of Phi Delta Kappa",
"strAdress": "117-08 Merrick Blvd",
"zip": "11434",
"boro": "Queens",
"lat": "40.686581",
"long": "-73.774805",
"num": "Call 311 for hours"
},
{
"name": "Rush Temple A.M.E. Church",
"strAdress": "119-48 Sutphin Blvd",
"zip": "11434",
"boro": "Queens",
"lat": "40.677872",
"long": "-73.791632",
"num": "Call 311 for hours"
},
{
"name": "Rush Temple A.M.E. Zion Church",
"strAdress": "119-48 Sutphin Boulevard",
"zip": "11434",
"boro": "Queens",
"lat": "40.677872",
"long": "-73.791632",
"num": "Call 311 for hours"
},
{
"name": "Winner Chapel Inc.",
"strAdress": "153-56 Rockaway Blvd",
"zip": "11434",
"boro": "Queens",
"lat": "40.669078",
"long": "-73.78268",
"num": "Call 311 for hours"
},
{
"name": "Blanche Memorial Church",
"strAdress": "109-74 Sutphin Blvd",
"zip": "11435",
"boro": "Queens",
"lat": "40.690042",
"long": "-73.79721",
"num": "Call 311 for hours"
},
{
"name": "Christ Apostolic Church of America, Inc.",
"strAdress": "108-02 Sutphin Blvd",
"zip": "11435",
"boro": "Queens",
"lat": "40.692788",
"long": "-73.799538",
"num": "Call 311 for hours"
},
{
"name": "Jesus Is The Answer - J.I.T.A. Community Outreach",
"strAdress": "89-17 139th Street",
"zip": "11435",
"boro": "Queens",
"lat": "40.702179000000001",
"long": "-73.812646999999998",
"num": "(718)908-6303"
},
{
"name": "Holy Ghost Upper Room Filling Station Ministry, Inc.",
"strAdress": "146-17 133rd Ave",
"zip": "11436",
"boro": "Queens",
"lat": "40.668864",
"long": "-73.791982",
"num": "Call 311 for hours"
},
{
"name": "Morris Brown Helping Hand Food Program",
"strAdress": "145-03 Rockaway Blvd (So. Ozone Park)",
"zip": "11436",
"boro": "Queens",
"lat": "40.683932",
"long": "-73.857421",
"num": "Call 311 for hours"
},
{
"name": "Morris Brown Helping Hand Food Program",
"strAdress": "145-03 Rockaway Blvd (So. Ozone Park)",
"zip": "11436",
"boro": "Queens",
"lat": "40.683932",
"long": "-73.857421",
"num": "(718)322-7596"
},
{
"name": "St. Clement Pope Roman Catholic Church",
"strAdress": "141-11 123rd Ave (So. Ozone Park)",
"zip": "11436",
"boro": "Queens",
"lat": "40.674991",
"long": "-73.799267",
"num": "Call 311 for hours"
},
{
"name": "AIDS Center of Queens County (ACQC)",
"strAdress": "1139 Foam Place (FAR ROCKAWAY)",
"zip": "11691",
"boro": "Queens",
"lat": "40.604949",
"long": "-73.751417",
"num": "Call 311 for hours"
},
{
"name": "First Church of God",
"strAdress": "21-23 Birdsall Ave",
"zip": "11691",
"boro": "Queens",
"lat": "40.606903",
"long": "-73.754002",
"num": "Call 311 for hours"
},
{
"name": "First Presbyterian Russell Sage Memorial Church of Far Rockaway",
"strAdress": "896 Central Ave (Far Rockaway)",
"zip": "11691",
"boro": "Queens",
"lat": "40.609167",
"long": "-73.74675",
"num": "Call 311 for hours"
},
{
"name": "J.U.S.T.I.C.E. Organization/Jesus is Justice Mission Inc.",
"strAdress": "219 Beach 28th St",
"zip": "11691",
"boro": "Queens",
"lat": "40.595762",
"long": "-73.761197",
"num": "Call 311 for hours"
},
{
"name": "Jewish Community Council of Far Rockaway Peninsula",
"strAdress": "1525 Central Avenue, Far Rockaway",
"zip": "11691",
"boro": "Queens",
"lat": "40.605211",
"long": "-73.751506",
"num": "212-453-9532 Appointments Recommended"
},
{
"name": "Jewish Services Coalition",
"strAdress": "1525 Central Ave",
"zip": "11691",
"boro": "Queens",
"lat": "40.605211",
"long": "-73.751506",
"num": "Call 311 for hours"
},
{
"name": "Solid Rock SDA Church",
"strAdress": "5205 Rockaway Beach Blvd",
"zip": "11691",
"boro": "Queens",
"lat": "40.592621",
"long": "-73.782687",
"num": "Call 311 for hours"
},
{
"name": "St. Mary's Star of the Sea",
"strAdress": "19-20 New Haven Ave",
"zip": "11691",
"boro": "Queens",
"lat": "40.600749",
"long": "-73.752735",
"num": "Call 311 for hours"
},
{
"name": "United Methodist Center in Far Rockaway",
"strAdress": "1032 Beach 19th St (Near Mott Ave)",
"zip": "11691",
"boro": "Queens",
"lat": "40.606222",
"long": "-73.759778",
"num": "Call 311 for hours"
},
{
"name": "United Methodist Center in Far Rockaway",
"strAdress": "1032 Beach 19th St (Near Mott Ave)",
"zip": "11691",
"boro": "Queens",
"lat": "40.606222",
"long": "-73.759778",
"num": "Call 311 for hours"
},
{
"name": "Bethel Ame Church/Bethel Arverne Comm.",
"strAdress": "215 Beach 77th St",
"zip": "11692",
"boro": "Queens",
"lat": "40.5888",
"long": "-73.804656",
"num": "Call 311 for hours"
},
{
"name": "Community Health Action Of Staten Island",
"strAdress": "23 Hyatt St",
"zip": "10301",
"boro": "Staten Island",
"lat": "40.641983",
"long": "-74.077277",
"num": "718 808-1800"
},
{
"name": "Department of Probation Staten Island Office",
"strAdress": "340 Bay Street Staten Island",
"zip": "10301",
"boro": "Staten Island",
"lat": "40.633978",
"long": "-74.075445",
"num": "Call 311 for hours"
},
{
"name": "Community Health Action of Staten Island",
"strAdress": "2134 Richmond Terrace",
"zip": "10302",
"boro": "Staten Island",
"lat": "40.640076",
"long": "-74.134315",
"num": "Call 311 for hours"
},
{
"name": "Council of Jewish Organizations Staten Island",
"strAdress": "984 Post Ave",
"zip": "10302",
"boro": "Staten Island",
"lat": "40.632281",
"long": "-74.133601",
"num": "Call 311 for hours"
},
{
"name": "Community Food Pantry CHASI",
"strAdress": "2134 Richmond Terrace",
"zip": "10302",
"boro": "Staten Island",
"lat": "40.640076",
"long": "-74.134315",
"num": "718 808-1840"
},
{
"name": "Project Hospitality EL CENTRO",
"strAdress": "1546 Castleton AvenueÊ",
"zip": "10302",
"boro": "Staten Island",
"lat": "40.635794",
"long": "-74.134346",
"num": "347 254-5556 718 448-3470"
},
{
"name": "Rescue Ministry/Ministerio Rescate, Inc.",
"strAdress": "2083 Richmond Terrace",
"zip": "10302",
"boro": "Staten Island",
"lat": "40.640422",
"long": "-74.132648",
"num": "Call 311 for hours"
},
{
"name": "Richmond Senior Services/Food Mart",
"strAdress": "729 DELAFIELD AVE",
"zip": "10310",
"boro": "Staten Island",
"lat": "40.629524000000004",
"long": "-74.122900999999999",
"num": "718-816-1811"
},
{
"name": "Staten Island SDA Church",
"strAdress": "80 Union Ave",
"zip": "10303",
"boro": "Staten Island",
"lat": "40.634765",
"long": "-74.158362",
"num": "Call 311 for hours"
},
{
"name": "Feeding With TLC Inc.",
"strAdress": "309 St. Pauls Avenue",
"zip": "10304",
"boro": "Staten Island",
"lat": "40.630237999999999",
"long": "-74.081142999999997",
"num": "(718)4470526"
},
{
"name": "Feeding With TLC Inc.",
"strAdress": "309 St. Pauls Avenue",
"zip": "10304",
"boro": "Staten Island",
"lat": "40.630237999999999",
"long": "-74.081142999999997",
"num": "(718)4470526"
},
{
"name": "Our Lady of Good Counsel Church (Staten Island)",
"strAdress": "42 Austin Place",
"zip": "10304",
"boro": "Staten Island",
"lat": "40.631191",
"long": "-74.086211",
"num": "Call 311 for hours"
},
{
"name": "Project Hospitality, Inc.",
"strAdress": "514 Bay St",
"zip": "10304",
"boro": "Staten Island",
"lat": "40.629399",
"long": "-74.076908",
"num": "Call 311"
},
{
"name": "Project Hospitality, Inc.",
"strAdress": "514 Bay St",
"zip": "10304",
"boro": "Staten Island",
"lat": "40.629399",
"long": "-74.076908",
"num": "Call 311"
},
{
"name": "Project Hospitality",
"strAdress": "514 Bay Street",
"zip": "10304",
"boro": "Staten Island",
"lat": "40.629399",
"long": "-74.076908",
"num": "718 273-6737"
},
{
"name": "Christian Pentecostal Church",
"strAdress": "900 Richmond Rd",
"zip": "10304",
"boro": "Staten Island",
"lat": "40.604834",
"long": "-74.091849",
"num": "Call 311 for hours"
},
{
"name": "Stapleton U.A.M.E. Church",
"strAdress": "49 Tompkins Ave",
"zip": "10304",
"boro": "Staten Island",
"lat": "40.623399",
"long": "-74.078635",
"num": "Call 311 for hours"
},
{
"name": "Stapleton U.A.M.E. Church",
"strAdress": "49 Tompkins Ave",
"zip": "10304",
"boro": "Staten Island",
"lat": "40.623399",
"long": "-74.078635",
"num": "Call 311 for hours"
},
{
"name": "The Salvation Army Stapleton Corps",
"strAdress": "15 Broad St",
"zip": "10304",
"boro": "Staten Island",
"lat": "40.625772",
"long": "-74.075757",
"num": "Call 311 for hours"
},
{
"name": "The Salvation Army Stapleton Corps",
"strAdress": "15 Broad St",
"zip": "10304",
"boro": "Staten Island",
"lat": "40.625772",
"long": "-74.075757",
"num": "Call 311 for hours"
},
{
"name": "United Church Of Praise International Ministries, Inc,",
"strAdress": "32 Sands Street Staten Island",
"zip": "10304",
"boro": "Staten Island",
"lat": "40.629138",
"long": "-74.076012",
"num": "718-314-8779"
},
{
"name": "Mesivtha of Staten Island",
"strAdress": "1870 Drumgoole Road East",
"zip": "10309",
"boro": "Staten Island",
"lat": "40.527552",
"long": "-74.214375000000004",
"num": "718-356-5412"
},
{
"name": "St. Edward Food Pantry",
"strAdress": "6581 Hylan Blvd",
"zip": "10309",
"boro": "Staten Island",
"lat": "40.510309",
"long": "-74.219768",
"num": "Call 311 for hours"
},
{
"name": "Bronx Defenders",
"strAdress": "360 161st St",
"zip": "10451",
"boro": "Bronx",
"lat": "40.824169",
"long": "-73.915452",
"num": "718 838-7849"
},
{
"name": "Department Of Probation Bronx Office",
"strAdress": "198 East 161st Street",
"zip": "10451",
"boro": "Bronx",
"lat": "40.825851999999998",
"long": "-73.921006000000006",
"num": "718-802-4500"
},
{
"name": "Phipps",
"strAdress": "3125 3rd Ave",
"zip": "10451",
"boro": "Bronx",
"lat": "40.822020",
"long": "-73.912029",
"num": "Call 311 for hours"
},
{
"name": "The Salvation Army Bronx Citadel",
"strAdress": "425 East 159th St",
"zip": "10451",
"boro": "Bronx",
"lat": "40.822796",
"long": "-73.913363",
"num": "Call 311 for hours"
},
{
"name": "The Salvation Army Bronx Citadel",
"strAdress": "425 East 159th St",
"zip": "10451",
"boro": "Bronx",
"lat": "40.822796",
"long": "-73.913363",
"num": "Call 311 for hours"
},
{
"name": "Bronxwork-Townsend",
"strAdress": "1477 Townsend Ave",
"zip": "10452",
"boro": "Bronx",
"lat": "40.841785",
"long": "-73.915587",
"num": "718-588-3839"
},
{
"name": "Grand Concourse SDA Church",
"strAdress": "1275 Grand Concourse",
"zip": "10452",
"boro": "Bronx",
"lat": "40.836437",
"long": "-73.91656",
"num": "Call 311 for hours"
},
{
"name": "Momentum Project @ Church of the God of Prophecy",
"strAdress": "85 East 165th St",
"zip": "10452",
"boro": "Bronx",
"lat": "40.831654",
"long": "-73.922129",
"num": "Call 311 for hours"
},
{
"name": "Momentum Project @ Church of the God of Prophecy",
"strAdress": "85 East 165th St",
"zip": "10452",
"boro": "Bronx",
"lat": "40.831654",
"long": "-73.922129",
"num": "Call 311 for hours"
},
{
"name": "The Community Food Pantry",
"strAdress": "1363 Ogden Ave",
"zip": "10452",
"boro": "Bronx",
"lat": "40.841786",
"long": "-73.924910",
"num": "718-960-2262"
},
{
"name": "Tolentine Zeiser Community Life Center @ Sacred Heart",
"strAdress": "1261 Shakespeare Ave",
"zip": "10452",
"boro": "Bronx",
"lat": "40.838903",
"long": "-73.923054",
"num": "917-549-8958"
},
{
"name": "WHEDCO - Food Pantry",
"strAdress": "50 East 168th St",
"zip": "10452",
"boro": "Bronx",
"lat": "40.836388",
"long": "-73.91909",
"num": "Call 311 for hours"
},
{
"name": "WHEDCO",
"strAdress": "50 East 168th Street",
"zip": "10452",
"boro": "Bronx",
"lat": "40.836388",
"long": "-73.91909",
"num": "718 839-1186"
},
{
"name": "Woodycrest United Methodist Church",
"strAdress": "89 West 166th St",
"zip": "10452",
"boro": "Bronx",
"lat": "40.835041",
"long": "-73.925982",
"num": "Call 311 for hours"
},
{
"name": "St. Edmunds Youth Program Inc.",
"strAdress": "1905 Morris Ave",
"zip": "10453",
"boro": "Bronx",
"lat": "40.849984",
"long": "-73.907915",
"num": "Call 311 for hours"
},
{
"name": "True Gospel Tabernacle",
"strAdress": "1 West Tremont Ave",
"zip": "10453",
"boro": "Bronx",
"lat": "40.855515",
"long": "-73.918913",
"num": "Call 311 for hours"
},
{
"name": "Whosoever Will Baptist Church",
"strAdress": "1651 Popham Ave",
"zip": "10453",
"boro": "Bronx",
"lat": "40.849344",
"long": "-73.921038",
"num": "Call 311 for hours"
},
{
"name": "Abraham House",
"strAdress": "340 Willis Ave",
"zip": "10454",
"boro": "Bronx",
"lat": "40.811314",
"long": "-73.920934",
"num": "Call 311 for hours"
},
{
"name": "Every Day is a Miracle, Inc.",
"strAdress": "411 East 143rd St",
"zip": "10454",
"boro": "Bronx",
"lat": "40.812064",
"long": "-73.920031",
"num": "Call 311 for hours"
},
{
"name": "New York Common Pantry",
"strAdress": "423 East 138th St",
"zip": "10454",
"boro": "Bronx",
"lat": "40.808913",
"long": "-73.921746",
"num": "Call 311 for hours"
},
{
"name": "St. Ann's Church of Morrisania",
"strAdress": "295 St. Ann's Ave",
"zip": "10454",
"boro": "Bronx",
"lat": "40.808522",
"long": "-73.917126",
"num": "Call 311 for hours"
},
{
"name": "St. Luke's Food Pantry",
"strAdress": "623 East 138th St",
"zip": "10454",
"boro": "Bronx",
"lat": "40.806265",
"long": "-73.91547",
"num": "Call 311 for hours"
},
{
"name": "Affinity Health Plan – Bronx",
"strAdress": "2831 3rd Ave",
"zip": "10455",
"boro": "Bronx",
"lat": "40.815923",
"long": "-73.918235",
"num": "Call 311 for hours"
},
{
"name": "Bronx Temple SDA Church",
"strAdress": "495 Willis Ave",
"zip": "10455",
"boro": "Bronx",
"lat": "40.814781",
"long": "-73.918739",
"num": "Call 311 for hours"
},
{
"name": "Give Them To Eat",
"strAdress": "800 East 156th St",
"zip": "10455",
"boro": "Bronx",
"lat": "40.81753",
"long": "-73.904354",
"num": "Call 311 for hours"
},
{
"name": "Give Them To Eat",
"strAdress": "800 East 156th St",
"zip": "10455",
"boro": "Bronx",
"lat": "40.81753",
"long": "-73.904354",
"num": "Call 311 for hours"
},
{
"name": "Transfiguration Lutheran Church (Bronx)",
"strAdress": "763 Prospect Ave",
"zip": "10455",
"boro": "Bronx",
"lat": "40.817618",
"long": "-73.90246",
"num": "Call 311 for hours"
},
{
"name": "United Bronx Parents, Inc.",
"strAdress": "603 Prospect Avenue",
"zip": "10455",
"boro": "Bronx",
"lat": "40.813972",
"long": "-73.904183000000003",
"num": "Call 311 for hours"
},
{
"name": "United Bronx Parents, Inc.",
"strAdress": "603 Prospect Avenue",
"zip": "10455",
"boro": "Bronx",
"lat": "40.813972",
"long": "-73.904183000000003",
"num": "718 9917100"
},
{
"name": "Beth - El House of Yahweh",
"strAdress": "3482 Park Ave",
"zip": "10456",
"boro": "Bronx",
"lat": "40.848513",
"long": "-73.923541",
"num": "Call 311 for hours"
},
{
"name": "Gospel Hill Baptist Church, Inc.",
"strAdress": "3265 Third Ave",
"zip": "10456",
"boro": "Bronx",
"lat": "40.824791",
"long": "-73.908913",
"num": "Call 311 for hours"
},
{
"name": "Holy Tabernacle Church, Inc.",
"strAdress": "3780 Third Ave",
"zip": "10456",
"boro": "Bronx",
"lat": "40.836674",
"long": "-73.901967",
"num": "Call 311 for hours"
},
{
"name": "Holy Tabernacle Church, Inc.",
"strAdress": "3780 Third Ave",
"zip": "10456",
"boro": "Bronx",
"lat": "40.836674",
"long": "-73.901967",
"num": "Call 311 for hours"
},
{
"name": "Inspirational Gospel Assembly",
"strAdress": "1211 Brook Avenue",
"zip": "10456",
"boro": "Bronx",
"lat": "40.831363000000003",
"long": "-73.909345000000002",
"num": "(347)758-6447"
},
{
"name": "Manna of Life Ministries, Inc.",
"strAdress": "11-1 Boston Road",
"zip": "10456",
"boro": "Bronx",
"lat": "40.829279999999997",
"long": "-73.902585000000002",
"num": "Call 311 for hours"
},
{
"name": "Morrisania Revitalization Corp Inc.",
"strAdress": "576 East 165th St",
"zip": "10456",
"boro": "Bronx",
"lat": "40.825512",
"long": "-73.907017",
"num": "Call 311 for hours"
},
{
"name": "New Covenant Community Development Corp",
"strAdress": "1175 Boston Rd",
"zip": "10456",
"boro": "Bronx",
"lat": "40.828924",
"long": "-73.903305",
"num": "Call 311 for hours"
},
{
"name": "Redeemed Christian Church Of God",
"strAdress": "1001-1005 Morris Avenue",
"zip": "10456",
"boro": "Bronx",
"lat": "40.829092000000003",
"long": "-73.916843",
"num": "718-293-8996"
},
{
"name": "St. Augustine Food Pantry",
"strAdress": "1168 Franklin Avenue",
"zip": "10456",
"boro": "Bronx",
"lat": "40.829039000000002",
"long": "-73.904325999999998",
"num": "718 8930072"
},
{
"name": "Vineyard International Christian Ministries",
"strAdress": "1140 Teller Ave",
"zip": "10456",
"boro": "Bronx",
"lat": "40.83066",
"long": "-73.912226",
"num": "Call 311 for hours"
},
{
"name": "Bronx Seventh Day Adventist Church",
"strAdress": "1695 Washington Ave",
"zip": "10457",
"boro": "Bronx",
"lat": "40.842245",
"long": "-73.901112",
"num": "Call 311 for hours"
},
{
"name": "Christ Jesus Baptist Church",
"strAdress": "456 East 168th Street",
"zip": "10457",
"boro": "Bronx",
"lat": "40.831369000000002",
"long": "-73.907317000000006",
"num": "Call 311 for hours"
},
{
"name": "The Salvation Army Tremont Corps",
"strAdress": "2121 Washington Ave",
"zip": "10457",
"boro": "Bronx",
"lat": "40.85212",
"long": "-73.895577",
"num": "Call 311 for hours"
},
{
"name": "Thorpe Family Residence",
"strAdress": "406 East 184th St",
"zip": "10457",
"boro": "Bronx",
"lat": "40.856393",
"long": "-73.894733",
"num": "Call 311 for hours"
},
{
"name": "Boom! Health",
"strAdress": "446 Easet Fordham Road",
"zip": "10458",
"boro": "Bronx",
"lat": "40.859131",
"long": "-73.887159",
"num": "Call 311 for hours"
},
{
"name": "CUCS Bronx Workforce 1",
"strAdress": "400 East Fordham Road (Webster ave)",
"zip": "10458",
"boro": "Bronx",
"lat": "40.863693",
"long": "-73.888724",
"num": "718 960-2457"
},
{
"name": "Kingsbridge Heights Community Center",
"strAdress": "538 E Fordham Road",
"zip": "10458",
"boro": "Bronx",
"lat": "40.859304",
"long": "-73.887117",
"num": "212-453-9532 Appointments Recommended"
},
{
"name": "LIFT",
"strAdress": "2381 Belmont Ave",
"zip": "10458",
"boro": "Bronx",
"lat": "40.854564",
"long": "-73.886669",
"num": "718 733-3897/4061"
},
{
"name": "New St. John Baptist Church",
"strAdress": "2409 Lorillard Place",
"zip": "10458",
"boro": "Bronx",
"lat": "40.856681",
"long": "-73.888991",
"num": "Call 311 for hours"
},
{
"name": "Part Of The Solution (POTS)",
"strAdress": "2759 Webster Ave, Btwn 197 & 198th St",
"zip": "10458",
"boro": "Bronx",
"lat": "40.868306",
"long": "-73.887984",
"num": "(718) 220 4892"
},
{
"name": "Part of the Solution (POTS)",
"strAdress": "2759 Webster Ave",
"zip": "10458",
"boro": "Bronx",
"lat": "40.865732",
"long": "-73.886416",
"num": "Call 311 for hours"
},
{
"name": "Part of the Solution (POTS)",
"strAdress": "2759 Webster Ave",
"zip": "10458",
"boro": "Bronx",
"lat": "40.865732",
"long": "-73.886416",
"num": "Call 311 for hours"
},
{
"name": "Caldwell Temple Ame Zion Church",
"strAdress": "1288 Rev. James A. Polite",
"zip": "10459",
"boro": "Bronx",
"lat": "40.829689",
"long": "-73.895561",
"num": "Call 311 for hours"
},
{
"name": "Come World Ministries Inc.",
"strAdress": "1034 Prospect Ave",
"zip": "10459",
"boro": "Bronx",
"lat": "40.824493",
"long": "-73.899279",
"num": "Call 311 for hours"
},
{
"name": "Come World Ministries Inc.",
"strAdress": "1034 Prospect Ave",
"zip": "10459",
"boro": "Bronx",
"lat": "40.824493",
"long": "-73.899279",
"num": "Call 311 for hours"
},
{
"name": "Loyal Baptist Church",
"strAdress": "881 East 167th St",
"zip": "10459",
"boro": "Bronx",
"lat": "40.826182",
"long": "-73.896238",
"num": "Call 311 for hours"
},
{
"name": "Resurrection and Life Pentecostal Church",
"strAdress": "870 East 163rd St",
"zip": "10459",
"boro": "Bronx",
"lat": "40.821508",
"long": "-73.899319",
"num": "Call 311 for hours"
},
{
"name": "Thessalonia Baptist Church",
"strAdress": "951 Rev. James Polite Ave",
"zip": "10459",
"boro": "Bronx",
"lat": "40.822502",
"long": "-73.899249",
"num": "718 5420828"
},
{
"name": "Gethsemane Baptist Church",
"strAdress": "771 Fairmount Place",
"zip": "10460",
"boro": "Bronx",
"lat": "40.843142",
"long": "-73.889598",
"num": "Call 311 for hours"
},
{
"name": "Grace Episcopal Church",
"strAdress": "1909 Vyse Ave",
"zip": "10460",
"boro": "Bronx",
"lat": "40.840517",
"long": "-73.883658",
"num": "Call 311 for hours"
},
{
"name": "Grace Episcopal Church (Bronx)",
"strAdress": "1909 Vyse Ave",
"zip": "10460",
"boro": "Bronx",
"lat": "40.840517",
"long": "-73.883658",
"num": "Call 311 for hours"
},
{
"name": "St. Anthony's Church",
"strAdress": "1750 Mansion St",
"zip": "10460",
"boro": "Bronx",
"lat": "40.837971",
"long": "-73.869545",
"num": "Call 311 for hours"
},
{
"name": "Union Grove Baptist Church",
"strAdress": "1488 Hoe Avenue",
"zip": "10460",
"boro": "Bronx",
"lat": "40.832904",
"long": "-73.888952",
"num": "Call 311 for hours"
},
{
"name": "Jewish Community Council of Pelham Parkway",
"strAdress": "2157 Holland Ave",
"zip": "10462",
"boro": "Bronx",
"lat": "40.855316",
"long": "-73.866032",
"num": "Call 311 for hours"
},
{
"name": "Jewish Community Council Parkway Community Services Center",
"strAdress": "2157 Holland Ave",
"zip": "10462",
"boro": "Bronx",
"lat": "40.855316",
"long": "-73.866032",
"num": "646 385-3378"
},
{
"name": "St. Paul's Lutheran Church",
"strAdress": "1891 Mcgraw Avenue",
"zip": "10462",
"boro": "Bronx",
"lat": "40.834683",
"long": "-73.862303",
"num": "718-822-4535"
},
{
"name": "Bronx Bethany Community Corporation",
"strAdress": "971 EAST 227TH STREET",
"zip": "10466",
"boro": "Bronx",
"lat": "40.886803",
"long": "-73.851268000000005",
"num": "718 231-5276"
},
{
"name": "Church of St. Frances of Rome",
"strAdress": "4307 Barnes Ave",
"zip": "10466",
"boro": "Bronx",
"lat": "40.895251",
"long": "-73.853295",
"num": "Call 311 for hours"
},
{
"name": "Shiloh Temple Pentecostal Church",
"strAdress": "719 East 223rd St",
"zip": "10466",
"boro": "Bronx",
"lat": "40.886368",
"long": "-73.860405",
"num": "Call 311 for hours"
},
{
"name": "Shiloh Temple Pentecostal Church",
"strAdress": "719 East 223rd St",
"zip": "10466",
"boro": "Bronx",
"lat": "40.886368",
"long": "-73.860405",
"num": "Call 311 for hours"
},
{
"name": "The Grace of God Ministries-Church Inc.",
"strAdress": "963 East 233rd St",
"zip": "10466",
"boro": "Bronx",
"lat": "40.891117",
"long": "-73.849352",
"num": "Call 311 for hours"
},
{
"name": "Resources Center For Community Development INC",
"strAdress": "402 East 152nd Street",
"zip": "10466",
"boro": "Bronx",
"lat": "40.817957",
"long": "-73.916630",
"num": "7184021212"
},
{
"name": "Astor Child Guidance Center",
"strAdress": "750 Tilden St",
"zip": "10467",
"boro": "Bronx",
"lat": "40.876531",
"long": "-73.862786",
"num": "Call 311 for hours"
},
{
"name": "Christ Disciples International Ministries",
"strAdress": "3021-31 Webster Ave",
"zip": "10467",
"boro": "Bronx",
"lat": "40.869908",
"long": "-73.879457",
"num": "Call 311 for hours"
},
{
"name": "City of Faith Church of God",
"strAdress": "3445-3453 White Plains Rd",
"zip": "10467",
"boro": "Bronx",
"lat": "40.876943",
"long": "-73.867452",
"num": "Call 311 for hours"
},
{
"name": "St. Luke's Senior Community Program",
"strAdress": "777 East 222nd St",
"zip": "10467",
"boro": "Bronx",
"lat": "40.885108",
"long": "-73.858994",
"num": "Call 311 for hours"
},
{
"name": "St. Luke's Senior Community Program",
"strAdress": "777 East 222nd St",
"zip": "10467",
"boro": "Bronx",
"lat": "40.885108",
"long": "-73.858994",
"num": "Call 311 for hours"
},
{
"name": "West Bronx Housing and Neighborhood Resource Center##",
"strAdress": "220 EAST 204TH STREET",
"zip": "10458",
"boro": "Bronx",
"lat": "40.874270000000003",
"long": "-73.885535000000004",
"num": "646-385-3378"
},
{
"name": "Heavenly Vision Christian Center",
"strAdress": "2868 Jerome Ave",
"zip": "10468",
"boro": "Bronx",
"lat": "40.871493",
"long": "-73.892173",
"num": "Call 311 for hours"
},
{
"name": "Power Praise And Deliverance, Inc.",
"strAdress": "120 East 184th Street",
"zip": "10468",
"boro": "Bronx",
"lat": "40.859506000000003",
"long": "-73.900475",
"num": "347-409-0288"
},
{
"name": "Tolentine Zeiser Community Life",
"strAdress": "2345 University Ave (Basement Fordham Rd Ent.)",
"zip": "10468",
"boro": "Bronx",
"lat": "40.862303",
"long": "-73.905654",
"num": "Call 311 for hours"
},
{
"name": "Eastchester Presbyterian Church",
"strAdress": "3154 Fish Ave",
"zip": "10469",
"boro": "Bronx",
"lat": "40.871234",
"long": "-73.847032",
"num": "Call 311 for hours"
},
{
"name": "El Amanecer de la Esperanza Ministry Inc.",
"strAdress": "1769 East 172nd St",
"zip": "10472",
"boro": "Bronx",
"lat": "40.832947",
"long": "-73.868118",
"num": "Call 311 for hours"
},
{
"name": "Emanuel Pentecostal Faith Church",
"strAdress": "1310 Elder Ave",
"zip": "10472",
"boro": "Bronx",
"lat": "40.831618",
"long": "-73.87957",
"num": "Call 311 for hours"
},
{
"name": "Lost Sheep Christian Church/Feed My Sheep Community Pantry",
"strAdress": "1104 Elder Avenue #15",
"zip": "10472",
"boro": "Bronx",
"lat": "40.826157",
"long": "-73.878585999999999",
"num": "347-235-3723"
},
{
"name": "Holy Cross Food Pantry - Bronx",
"strAdress": "600 Soundview Ave",
"zip": "10473",
"boro": "Bronx",
"lat": "40.817201",
"long": "-73.86172",
"num": "Call 311 for hours"
},
{
"name": "Phipps- Soundview Community Center",
"strAdress": "1680 Seward Ave",
"zip": "10473",
"boro": "Bronx",
"lat": "40.818055",
"long": "-73.868860",
"num": "Call 311 for hours"
},
{
"name": "Bright Temple A.M.E. Church/Project F.I.L.L.",
"strAdress": "812 Faile Street",
"zip": "10474",
"boro": "Bronx",
"lat": "40.817222999999998",
"long": "-73.886893000000001",
"num": "718-542-7777"
},
{
"name": "Black Forum of Co-op City",
"strAdress": "177 Dreiser Loop - Room 20",
"zip": "10475",
"boro": "Bronx",
"lat": "40.876548",
"long": "-73.828779",
"num": "Call 311 for hours"
},
{
"name": "Brooklyn West Family Center",
"strAdress": "191 Joralemon St",
"zip": "11201",
"boro": "Brooklyn",
"lat": "40.692835",
"long": "-73.991714",
"num": "Call 311 for hours"
},
{
"name": "Department Of Probation Brooklyn Office",
"strAdress": "345 Adams Street - 6th Floor",
"zip": "11201",
"boro": "Brooklyn",
"lat": "40.692723000000001",
"long": "-73.988444000000001",
"num": "718-488-3640"
},
{
"name": "Christian Fellowship SDA Community SVCS-F.P.",
"strAdress": "777 Schenectady Ave",
"zip": "11203",
"boro": "Brooklyn",
"lat": "40.654322",
"long": "-73.933595",
"num": "Call 311 for hours"
},
{
"name": "Christian Fellowship SDA Community SVCS-S.K.",
"strAdress": "777 Schenectady Ave",
"zip": "11203",
"boro": "Brooklyn",
"lat": "40.654322",
"long": "-73.933595",
"num": "Call 311 for hours"
},
{
"name": "God's Battalion Of Prayer Church",
"strAdress": "661 Linden Boulevard",
"zip": "11203",
"boro": "Brooklyn",
"lat": "40.653888000000002",
"long": "-73.933947000000003",
"num": "(718) 774-5447"
},
{
"name": "Peniel SDA Church",
"strAdress": "1210 Utica Avenue",
"zip": "11203",
"boro": "Brooklyn",
"lat": "40.643044",
"long": "-73.929814",
"num": "Call 311 for hours"
},
{
"name": "Shalom Senior Center",
"strAdress": "483 Albany Ave",
"zip": "11203",
"boro": "Brooklyn",
"lat": "40.663335",
"long": "-73.939795",
"num": "Call 311 for hours"
},
{
"name": "Soc. SVDP @ St. Catherine",
"strAdress": "520 Linden Blvd",
"zip": "11203",
"boro": "Brooklyn",
"lat": "40.652976",
"long": "-73.939729",
"num": "Call 311 for hours"
},
{
"name": "St. Therese of Lisieux R.C. Church",
"strAdress": "4410 Avenue D",
"zip": "11203",
"boro": "Brooklyn",
"lat": "40.641784",
"long": "-73.934614",
"num": "Call 311 for hours"
},
{
"name": "Triumphant Full Gospel Assembly",
"strAdress": "889 Rutland Rd",
"zip": "11203",
"boro": "Brooklyn",
"lat": "40.660726",
"long": "-73.929986",
"num": "Call 311 for hours"
},
{
"name": "United Community Baptist Church",
"strAdress": "545 Utica Ave",
"zip": "11203",
"boro": "Brooklyn",
"lat": "40.660101",
"long": "-73.930913",
"num": "Call 311 for hours"
},
{
"name": "Community Services Center Of Greater Wilbg",
"strAdress": "378 Flushing Ave",
"zip": "11205",
"boro": "Brooklyn",
"lat": "40.698224",
"long": "-73.959483",
"num": "Call 311 for hours"
},
{
"name": "All People's Church of Apostolic Faith, Inc.",
"strAdress": "182 Tompkins Ave",
"zip": "11206",
"boro": "Brooklyn",
"lat": "40.692797",
"long": "-73.945823",
"num": "Call 311 for hours"
},
{
"name": "Black Veteran's for Social Justice",
"strAdress": "665 Willoughby Ave",
"zip": "11206",
"boro": "Brooklyn",
"lat": "40.694886",
"long": "-73.942597",
"num": "Call 311 for hours"
},
{
"name": "Compassion House Community Development Corporation",
"strAdress": "43 George Street",
"zip": "11206",
"boro": "Brooklyn",
"lat": "40.701337000000002",
"long": "-73.931794999999994",
"num": "7183868151"
},
{
"name": "Compassion House Community Development Corporation",
"strAdress": "43 George Street",
"zip": "11206",
"boro": "Brooklyn",
"lat": "40.701337000000002",
"long": "-73.931794999999994",
"num": "7183868151"
},
{
"name": "Solid Rock Baptist Church",
"strAdress": "120 Tompkins Ave",
"zip": "11206",
"boro": "Brooklyn",
"lat": "40.695082",
"long": "-73.946562",
"num": "Call 311 for hours"
},
{
"name": "St. Stephen Outreach Community Development Corporation",
"strAdress": "874 Myrtle Ave",
"zip": "11206",
"boro": "Brooklyn",
"lat": "40.695486",
"long": "-73.947127",
"num": "Call 311 for hours"
},
{
"name": "St. Stephen Outreach Community Development Corporation",
"strAdress": "874 Myrtle Ave",
"zip": "11206",
"boro": "Brooklyn",
"lat": "40.695486",
"long": "-73.947127",
"num": "Call 311 for hours"
},
{
"name": "Trinity Human Service Corporation",
"strAdress": "153 A Johnson Ave",
"zip": "11206",
"boro": "Brooklyn",
"lat": "40.706609",
"long": "-73.944246",
"num": "Call 311 for hours"
},
{
"name": "Cornerstone Seventh Day Adventist Church",
"strAdress": "138 Pennsylvania Ave",
"zip": "11207",
"boro": "Brooklyn",
"lat": "40.67446",
"long": "-73.896928",
"num": "Call 311 for hours"
},
{
"name": "Cornerstone Seventh Day Adventist Church",
"strAdress": "138 Pennsylvania Ave",
"zip": "11207",
"boro": "Brooklyn",
"lat": "40.67446",
"long": "-73.896928",
"num": "Call 311 for hours"
},
{
"name": "Family Service Network of N.Y. Inc.",
"strAdress": "1420 Bushwick Ave",
"zip": "11207",
"boro": "Brooklyn",
"lat": "40.684079",
"long": "-73.909209",
"num": "Call 311 for hours"
},
{
"name": "Mt. Paran Community Development Corp",
"strAdress": "1665 Broadway",
"zip": "11207",
"boro": "Brooklyn",
"lat": "40.684364",
"long": "-73.912999",
"num": "Call 311 for hours"
},
{
"name": "Mt. Paran Community Development Corp",
"strAdress": "1665 Broadway",
"zip": "11207",
"boro": "Brooklyn",
"lat": "40.684364",
"long": "-73.912999",
"num": "Call 311 for hours"
},
{
"name": "East New York Wesleyan Church/New Hope Family Worship Center",
"strAdress": "817 Livonia Ave",
"zip": "11207",
"boro": "Brooklyn",
"lat": "40.665871",
"long": "-73.886655",
"num": "Call 311 for hours"
},
{
"name": "Good Shepherd Services (East NY)",
"strAdress": "595 Sutter Ave",
"zip": "11207",
"boro": "Brooklyn",
"lat": "40.669306",
"long": "-73.896876",
"num": "718 346-2200"
},
{
"name": "Love Fellowship Tabernacle, Inc.",
"strAdress": "464 Liberty Ave",
"zip": "11207",
"boro": "Brooklyn",
"lat": "40.674948",
"long": "-73.892724",
"num": "(718)235-2266"
},
{
"name": "Overcoming Love Ministries",
"strAdress": "275 Liberty Ave",
"zip": "11207",
"boro": "Brooklyn",
"lat": "40.673899",
"long": "-73.90001",
"num": "Call 311 for hours"
},
{
"name": "Blessed Sacrament Church (Bklyn)",
"strAdress": "198 Euclid Ave",
"zip": "11208",
"boro": "Brooklyn",
"lat": "40.683561",
"long": "-73.874232",
"num": "Call 311 for hours"
},
{
"name": "Christ the Rock Church International",
"strAdress": "770-784 Glenmore Ave",
"zip": "11208",
"boro": "Brooklyn",
"lat": "40.678051",
"long": "-73.85912",
"num": "Call 311 for hours"
},
{
"name": "Good News Deliverance Tabernacle",
"strAdress": "442 Cleveland St",
"zip": "11208",
"boro": "Brooklyn",
"lat": "40.673881",
"long": "-73.884494",
"num": "Call 311 for hours"
},
{
"name": "Isaiah's Temple of Mt. Hope",
"strAdress": "862 Glenmore Ave",
"zip": "11208",
"boro": "Brooklyn",
"lat": "40.675603",
"long": "-73.87816",
"num": "Call 311 for hours"
},
{
"name": "Isaiah's Temple of Mt. Hope",
"strAdress": "862 Glenmore Ave",
"zip": "11208",
"boro": "Brooklyn",
"lat": "40.675603",
"long": "-73.87816",
"num": "Call 311 for hours"
},
{
"name": "Las Maravillas Del Exodo",
"strAdress": "302 Elton St",
"zip": "11208",
"boro": "Brooklyn",
"lat": "40.675806",
"long": "-73.884174",
"num": "Call 311 for hours"
},
{
"name": "Open Door To Heaven Outreach Ministry Inc.",
"strAdress": "894 Belmont Ave",
"zip": "11208",
"boro": "Brooklyn",
"lat": "40.673304000000002",
"long": "-73.875979000000001",
"num": "347-822-0714"
},
{
"name": "Second St. Paul Church of Christ, Disciple of Christ, Inc.",
"strAdress": "1048 Sutter Ave",
"zip": "11208",
"boro": "Brooklyn",
"lat": "40.671467",
"long": "-73.879963",
"num": "Call 311 for hours"
},
{
"name": "Bay Ridge Center",
"strAdress": "411 Ovington Ave",
"zip": "11209",
"boro": "Brooklyn",
"lat": "40.633702",
"long": "-74.023275",
"num": "Call 311 for hours"
},
{
"name": "CUCS Brooklyn VA Hospital (Vets and their families only)",
"strAdress": "800 Poly Place (5 West RM 310)",
"zip": "11209",
"boro": "Brooklyn",
"lat": "40.608742",
"long": "-74.024293",
"num": "(718) 836-6600"
},
{
"name": "Our Lady of Angels Human Services",
"strAdress": "336 73rd St",
"zip": "11209",
"boro": "Brooklyn",
"lat": "40.632344",
"long": "-74.026168",
"num": "Call 311 for hours"
},
{
"name": "Admirable Church INC.",
"strAdress": "1910 Flatbush Avenue",
"zip": "11210",
"boro": "Brooklyn",
"lat": "40.623109999999997",
"long": "-73.937742999999998",
"num": "718 649-7531"
},
{
"name": "AmmiI Evangelical Baptist Church",
"strAdress": "1799 Flatbush Ave",
"zip": "11210",
"boro": "Brooklyn",
"lat": "40.626318",
"long": "-73.940413",
"num": "Call 311 for hours"
},
{
"name": "Our Lady of Refuge R.C. Church",
"strAdress": "2020 Foster Ave",
"zip": "11210",
"boro": "Brooklyn",
"lat": "40.636462",
"long": "-73.957618",
"num": "Call 311 for hours"
},
{
"name": "Southside United H.D.F.C., Inc. - Los Sures",
"strAdress": "145 South 3rd Street",
"zip": "11211",
"boro": "Brooklyn",
"lat": "40.712406",
"long": "-73.961610",
"num": "718-599-1940"
},
{
"name": "Transfiguration Church",
"strAdress": "263 & 280 Marcy Ave",
"zip": "11211",
"boro": "Brooklyn",
"lat": "40.70527",
"long": "-73.955858",
"num": "Call 311 for hours"
},
{
"name": "United Jewish Org. (UJO) of Wlbg",
"strAdress": "32 Penn St",
"zip": "11211",
"boro": "Brooklyn",
"lat": "40.700136",
"long": "-73.961109",
"num": "718 643-9700 Appointments Only"
},
{
"name": "Affinity Health Plan - Pitkin Ave",
"strAdress": "1684 Pitkin Ave",
"zip": "11212",
"boro": "Brooklyn",
"lat": "40.700136",
"long": "-73.961109",
"num": "212 453-9532"
},
{
"name": "Brownsville Temple SDA Church",
"strAdress": "1089 Clarkson Ave",
"zip": "11212",
"boro": "Brooklyn",
"lat": "40.660012",
"long": "-73.922256",
"num": "Call 311 for hours"
},
{
"name": "Christian Cultural Center",
"strAdress": "1400 Linden Blvd",
"zip": "11212",
"boro": "Brooklyn",
"lat": "40.654135",
"long": "-73.908199",
"num": "Call 311 for hours"
},
{
"name": "Church of God, Inc.",
"strAdress": "1011 Winthrop St",
"zip": "11212",
"boro": "Brooklyn",
"lat": "40.660309",
"long": "-73.926171",
"num": "Call 311 for hours"
},
{
"name": "Ebenezer Seventh Day Adventist Church",
"strAdress": "1234 East New York Ave",
"zip": "11212",
"boro": "Brooklyn",
"lat": "40.667455",
"long": "-73.921334",
"num": "Call 311 for hours"
},
{
"name": "Ebenezer Seventh Day Adventist Church",
"strAdress": "1234 East New York Ave",
"zip": "11212",
"boro": "Brooklyn",
"lat": "40.667455",
"long": "-73.921334",
"num": "Call 311 for hours"
},
{
"name": "Hope Center Development Corporation",
"strAdress": "409 East 95th St",
"zip": "11212",
"boro": "Brooklyn",
"lat": "40.657291",
"long": "-73.918288",
"num": "Call 311 for hours"
},
{
"name": "Hope Center Development Corporation",
"strAdress": "414 East 95th St",
"zip": "11212",
"boro": "Brooklyn",
"lat": "40.657029",
"long": "-73.918612",
"num": "Call 311 for hours"
},
{
"name": "Little Rock Baptist Church Inc.",
"strAdress": "375 Bristol Street",
"zip": "11212",
"boro": "Brooklyn",
"lat": "40.661920000000002",
"long": "-73.910386000000003",
"num": "(718)495-6772"
},
{
"name": "Mt. Hebron Church of Christ",
"strAdress": "167 Chester St",
"zip": "11212",
"boro": "Brooklyn",
"lat": "40.667698",
"long": "-73.911171",
"num": "Call 311 for hours"
},
{
"name": "New Life SDA Church",
"strAdress": "885-87 Thomas Boyland St",
"zip": "11212",
"boro": "Brooklyn",
"lat": "40.682173",
"long": "-73.914322",
"num": "Call 311 for hours"
},
{
"name": "Our Lady of Mercy Church",
"strAdress": "680 Mother Gaston BLVD",
"zip": "11212",
"boro": "Brooklyn",
"lat": "40.662024",
"long": "-73.905196",
"num": "Call 311 for hours"
},
{
"name": "The Salvation Army Brownsville Corp",
"strAdress": "280 Riverdale Avenue",
"zip": "11212",
"boro": "Brooklyn",
"lat": "40.660994",
"long": "-73.906161",
"num": "Call 311 for hours"
},
{
"name": "Urban Strategies Inc.",
"strAdress": "61-71 RIVERDALE AVENUE",
"zip": "11212",
"boro": "Brooklyn",
"lat": "40.660297999999997",
"long": "-73.914457",
"num": "Call 311 for hours"
},
{
"name": "Bethany United Methodist Church",
"strAdress": "1208 St. John's Place",
"zip": "11213",
"boro": "Brooklyn",
"lat": "40.670677",
"long": "-73.938327",
"num": "Call 311 for hours"
},
{
"name": "Church of God Seventh Day Pentecostal",
"strAdress": "922 St. Marks Ave",
"zip": "11213",
"boro": "Brooklyn",
"lat": "40.674498",
"long": "-73.941613",
"num": "Call 311 for hours"
},
{
"name": "Crown Heights Jewish Community Council",
"strAdress": "877 Montgomery St",
"zip": "11213",
"boro": "Brooklyn",
"lat": "40.664829",
"long": "-73.935665",
"num": "Call 311 for hours"
},
{
"name": "Nat'l Comm. for Futh. of Jewish Ed. (UC)",
"strAdress": "824 Eastern Parkway",
"zip": "11213",
"boro": "Brooklyn",
"lat": "40.668903",
"long": "-73.94107",
"num": "Call 311 for hours"
},
{
"name": "St. Anthony Baptist Church",
"strAdress": "425 Utica Ave",
"zip": "11213",
"boro": "Brooklyn",
"lat": "40.663773",
"long": "-73.930857",
"num": "Call 311 for hours"
},
{
"name": "St. Augustine's American Catholic Church",
"strAdress": "298 Schenectady Ave",
"zip": "11213",
"boro": "Brooklyn",
"lat": "40.668263",
"long": "-73.934227",
"num": "Call 311 for hours"
},
{
"name": "St. Matthew's Roman Catholic Church",
"strAdress": "1342 Lincoln Place",
"zip": "11213",
"boro": "Brooklyn",
"lat": "40.669628",
"long": "-73.932117",
"num": "Call 311 for hours"
},
{
"name": "The Church of St. Mark",
"strAdress": "1417 Union St",
"zip": "11213",
"boro": "Brooklyn",
"lat": "40.668603",
"long": "-73.944598",
"num": "Call 311 for hours"
},
{
"name": "Bensonhurst Council of Jewish Organizations",
"strAdress": "8635 21st Ave",
"zip": "11214",
"boro": "Brooklyn",
"lat": "40.602367",
"long": "-73.996569",
"num": "Call 311 for hours"
},
{
"name": "Reaching Out Community Services",
"strAdress": "7708 New Utretch Ave",
"zip": "11214",
"boro": "Brooklyn",
"lat": "40.613999",
"long": "-74.000698",
"num": "718 373-4565"
},
{
"name": "Reaching-Out Community Services Inc.",
"strAdress": "7708 New Utrecht Ave",
"zip": "11214",
"boro": "Brooklyn",
"lat": "40.613999",
"long": "-74.000698",
"num": "Call 311 for hours"
},
{
"name": "Good Shepherd Services",
"strAdress": "503 5th Avenue",
"zip": "11215",
"boro": "Brooklyn",
"lat": "40.667056",
"long": "-73.987904",
"num": "718 965-3313 ext 409"
},
{
"name": "Bedford Central Presbyterian Church",
"strAdress": "1200 Dean Street",
"zip": "11216",
"boro": "Brooklyn",
"lat": "40.676500",
"long": "-73.949580",
"num": "718-467-0740"
},
{
"name": "Bedford Stuyvesant Restoration Corp.",
"strAdress": "1368 Fulton St 4th Floor",
"zip": "11216",
"boro": "Brooklyn",
"lat": "40.680192",
"long": "-73.94597",
"num": "718 636-6946"
},
{
"name": "Bed-Stuy WIC Center",
"strAdress": "20 New York Ave",
"zip": "11216",
"boro": "Brooklyn",
"lat": "40.679524",
"long": "-73.946833",
"num": "646 385-4456"
},
{
"name": "Beulah Chruch of God in Christ Jesus",
"strAdress": "956 Marcy Avenue",
"zip": "11216",
"boro": "Brooklyn",
"lat": "40.680629",
"long": "-73.946488",
"num": "Call 311 for hours"
},
{
"name": "Ebenezer Wesleyan Methodist Church",
"strAdress": "47 Rogers Ave",
"zip": "11216",
"boro": "Brooklyn",
"lat": "40.675923",
"long": "-73.952466",
"num": "Call 311 for hours"
},
{
"name": "Family Life Development Center",
"strAdress": "1476 Bedford Ave",
"zip": "11216",
"boro": "Brooklyn",
"lat": "40.672938",
"long": "-73.954591",
"num": "Call 311 for hours"
},
{
"name": "Hebron SDA Church",
"strAdress": "1256 Dean St",
"zip": "11216",
"boro": "Brooklyn",
"lat": "40.676629",
"long": "-73.947609",
"num": "Call 311 for hours"
},
{
"name": "Hebron SDA Church",
"strAdress": "1256 Dean St",
"zip": "11216",
"boro": "Brooklyn",
"lat": "40.676629",
"long": "-73.947609",
"num": "Call 311 for hours"
},
{
"name": "Shiloh SDA",
"strAdress": "449 Eastern Parkway",
"zip": "11216",
"boro": "Brooklyn",
"lat": "40.670071",
"long": "-73.953435",
"num": "Call 311 for hours"
},
{
"name": "Siloam Presbyterian Church Food Pantry",
"strAdress": "260 Jefferson Ave",
"zip": "11216",
"boro": "Brooklyn",
"lat": "40.68335",
"long": "-73.947169",
"num": "Call 311 for hours"
},
{
"name": "Stuyvesant Heights Christian Church",
"strAdress": "69 McDonough St",
"zip": "11216",
"boro": "Brooklyn",
"lat": "40.68114",
"long": "-73.943999",
"num": "Call 311 for hours"
},
{
"name": "The Salvation Army Bedford Temple Corps",
"strAdress": "601 Lafayette Ave",
"zip": "11216",
"boro": "Brooklyn",
"lat": "40.690185",
"long": "-73.95052",
"num": "Call 311 for hours"
},
{
"name": "Flatbush SDA Church",
"strAdress": "261 East 21st Street",
"zip": "11226",
"boro": "Brooklyn",
"lat": "40.648083999999997",
"long": "-73.959091000000001",
"num": "(718) 693-9180"
},
{
"name": "The Gospel Tabernacle Church Of Jesus Christ, Inc.",
"strAdress": "2314 Snyder Avenue",
"zip": "11226",
"boro": "Brooklyn",
"lat": "40.648479",
"long": "-73.955183",
"num": "718-282-3920"
},
{
"name": "Worldwide Evangelical Outreach",
"strAdress": "3102 Clarendon Rd",
"zip": "11226",
"boro": "Brooklyn",
"lat": "40.643062",
"long": "-73.947575",
"num": "Call 311 for hours"
},
{
"name": "Fifth Ave Committee (Fifth Ave Comm. clients only)",
"strAdress": "621 Degraw Street",
"zip": "11217",
"boro": "Brooklyn",
"lat": "40.679099",
"long": "-73.982737",
"num": "(718) 237-2017"
},
{
"name": "Hanson Place Seventh Day Adventist Church",
"strAdress": "150 South Portland Ave",
"zip": "11217",
"boro": "Brooklyn",
"lat": "40.684882",
"long": "-73.974299",
"num": "Call 311 for hours"
},
{
"name": "Park Slope Christian Help, Inc.",
"strAdress": "200 4th Ave",
"zip": "11217",
"boro": "Brooklyn",
"lat": "40.678342",
"long": "-73.982857",
"num": "Call 311 for hours"
},
{
"name": "RHOW BROOKLYN INC",
"strAdress": "360 Schermerhorn St",
"zip": "11217",
"boro": "Brooklyn",
"lat": "40.68652",
"long": "-73.980333",
"num": "Call 311 for hours"
},
{
"name": "RHOW BROOKLYN INC",
"strAdress": "360 Schermerhorn St",
"zip": "11217",
"boro": "Brooklyn",
"lat": "40.68652",
"long": "-73.980333",
"num": "Call 311 for hours"
},
{
"name": "South Bkln SDA Church Community Service Program",
"strAdress": "42 Prospect Place",
"zip": "11217",
"boro": "Brooklyn",
"lat": "40.679588",
"long": "-73.976629",
"num": "Call 311 for hours"
},
{
"name": "St. Augustine's Church",
"strAdress": "116 6th Ave",
"zip": "11217",
"boro": "Brooklyn",
"lat": "40.67839",
"long": "-73.97646",
"num": "Call 311 for hours"
},
{
"name": "Christ Apostolic Church Goke Food Pantry",
"strAdress": "622 Cortelyou Road",
"zip": "11218",
"boro": "Brooklyn",
"lat": "40.638612999999999",
"long": "-73.972071",
"num": "718-284-7479"
},
{
"name": "Oneg Shabbos",
"strAdress": "1601 41st St",
"zip": "11218",
"boro": "Brooklyn",
"lat": "40.635577",
"long": "-73.980571",
"num": "Call 311 for hours"
},
{
"name": "Maimonides Hospital WIC",
"strAdress": "5013 Ft. Hamilton Pkwy",
"zip": "11219",
"boro": "Brooklyn",
"lat": "40.637685",
"long": "-73.998653",
"num": "Call 311 for hours"
},
{
"name": "Tomche Shabbos of boro Park",
"strAdress": "6225 New Utrecht Ave",
"zip": "11219",
"boro": "Brooklyn",
"lat": "40.625886",
"long": "-73.997071",
"num": "Call 311 for hours"
},
{
"name": "Zichron Acheinu Levy-Menachem Tzion",
"strAdress": "928 44th St",
"zip": "11219",
"boro": "Brooklyn",
"lat": "40.642471",
"long": "-73.997376",
"num": "Call 311 for hours"
},
{
"name": "Holding Hands Ministries",
"strAdress": "6324 7th Avenue",
"zip": "11220",
"boro": "Brooklyn",
"lat": "40.634929",
"long": "-74.014191",
"num": "Call 311 for hours"
},
{
"name": "The Salvation Army Sunset Park Corps",
"strAdress": "520 50th St",
"zip": "11220",
"boro": "Brooklyn",
"lat": "40.644618",
"long": "-74.009961",
"num": "Call 311 for hours"
},
{
"name": "The Salvation Army Sunset Park Corps",
"strAdress": "520 50th St",
"zip": "11220",
"boro": "Brooklyn",
"lat": "40.644618",
"long": "-74.009961",
"num": "Call 311 for hours"
},
{
"name": "Brooklyn Rescue Mission Urban Harvest Center Inc.",
"strAdress": "919 Gates Ave",
"zip": "11221",
"boro": "Brooklyn",
"lat": "40.688927",
"long": "-73.929041",
"num": "Call 311 for hours"
},
{
"name": "Cornerstone Baptist Food Pantry",
"strAdress": "652-574 Madison Street",
"zip": "11221",
"boro": "Brooklyn",
"lat": "40.692257",
"long": "-73.915681",
"num": "Call 311 for hours"
},
{
"name": "Faith Center For Human Services, Inc.",
"strAdress": "1014-18 Gates Avenue",
"zip": "11221",
"boro": "Brooklyn",
"lat": "40.689163",
"long": "-73.922807",
"num": "347-614-3235"
},
{
"name": "Faith Center For Human Services, Inc.",
"strAdress": "1014-18 Gates Avenue",
"zip": "11221",
"boro": "Brooklyn",
"lat": "40.689163",
"long": "-73.922807",
"num": "347-614-3235"
},
{
"name": "Friendly Christian Church",
"strAdress": "569 Hart St",
"zip": "11221",
"boro": "Brooklyn",
"lat": "40.697175",
"long": "-73.929277",
"num": "Call 311 for hours"
},
{
"name": "Friendly Christian Church Disciples of Christ",
"strAdress": "569 Hart St",
"zip": "11221",
"boro": "Brooklyn",
"lat": "40.697175",
"long": "-73.929277",
"num": "Call 311 for hours"
},
{
"name": "Northeast Brooklyn Housing Development Corporation",
"strAdress": "376 Troop Ave",
"zip": "11221",
"boro": "Brooklyn",
"lat": "40.691306",
"long": "-73.942902",
"num": "Call 311 for hours"
},
{
"name": "St. John's Bread & Life Food Pantry",
"strAdress": "795 Lexington Ave",
"zip": "11221",
"boro": "Brooklyn",
"lat": "40.690344",
"long": "-73.928965",
"num": "Call 311 for hours"
},
{
"name": "St. John's Bread & Life Program",
"strAdress": "795 Lexington Ave",
"zip": "11221",
"boro": "Brooklyn",
"lat": "40.690344",
"long": "-73.928965",
"num": "Call 311 for hours"
},
{
"name": "St. John's Bread & Life",
"strAdress": "795 Lexington Ave",
"zip": "11221",
"boro": "Brooklyn",
"lat": "40.690344",
"long": "-73.928965",
"num": "718 547-0058"
},
{
"name": "St. Philip's Christian Church",
"strAdress": "765 Lafayette Ave",
"zip": "11221",
"boro": "Brooklyn",
"lat": "40.691165",
"long": "-73.942315",
"num": "Call 311 for hours"
},
{
"name": "The Salvation Army Bushwick Corps",
"strAdress": "1151 Bushwick Ave",
"zip": "11221",
"boro": "Brooklyn",
"lat": "40.689328",
"long": "-73.917226",
"num": "Call 311 for hours"
},
{
"name": "The Salvation Army Bushwick Corps",
"strAdress": "1151 Bushwick Ave",
"zip": "11221",
"boro": "Brooklyn",
"lat": "40.689328",
"long": "-73.917226",
"num": "Call 311 for hours"
},
{
"name": "Thurston Memorial Outreach Ministries",
"strAdress": "1243 Bushwich Ave",
"zip": "11221",
"boro": "Brooklyn",
"lat": "40.687824",
"long": "-73.914696",
"num": "Call 311 for hours"
},
{
"name": "Thurston Memorial Outreach Ministries",
"strAdress": "1243 Bushwich Ave",
"zip": "11221",
"boro": "Brooklyn",
"lat": "40.687824",
"long": "-73.914696",
"num": "Call 311 for hours"
},
{
"name": "Greenpoint Reformed Church Food Pantry",
"strAdress": "136 Milton Street",
"zip": "11222",
"boro": "Brooklyn",
"lat": "40.729186",
"long": "-73.954970",
"num": "718-383-5941"
},
{
"name": "St. Cecilia's Food Pantry",
"strAdress": "84 Herbert St",
"zip": "11222",
"boro": "Brooklyn",
"lat": "40.720138",
"long": "-73.941878",
"num": "Call 311 for hours"
},
{
"name": "Our Lady of Grace Parish Ministry",
"strAdress": "2322 East 4th St",
"zip": "11223",
"boro": "Brooklyn",
"lat": "40.593423",
"long": "-73.966999",
"num": "Call 311 for hours"
},
{
"name": "Our Lady of Grace Parish Ministry",
"strAdress": "2322 East 4th St",
"zip": "11223",
"boro": "Brooklyn",
"lat": "40.593423",
"long": "-73.966999",
"num": "Call 311 for hours"
},
{
"name": "Sephardic Bikur Holim Food Pantry",
"strAdress": "425 Kings Highway",
"zip": "11223",
"boro": "Brooklyn",
"lat": "40.604585",
"long": "-73.974883",
"num": "Call 311 for hours"
},
{
"name": "Acts Community Development Corp.",
"strAdress": "2114 Mermaid Ave",
"zip": "11224",
"boro": "Brooklyn",
"lat": "40.575974",
"long": "-73.988375",
"num": "Call 311 for hours"
},
{
"name": "Acts Community Development Corp.",
"strAdress": "2114 Mermaid Ave",
"zip": "11224",
"boro": "Brooklyn",
"lat": "40.575974",
"long": "-73.988375",
"num": "Call 311 for hours"
},
{
"name": "Catholic Charities",
"strAdress": "2866 West 17th St",
"zip": "11224",
"boro": "Brooklyn",
"lat": "40.577277",
"long": "-73.984928",
"num": "Call 311 for hours"
},
{
"name": "Chance for Children",
"strAdress": "11 McKeever Place - 1st Floor (Basement Level)",
"zip": "11225",
"boro": "Brooklyn",
"lat": "40.665794",
"long": "-73.958708",
"num": "Call 311 for hours"
},
{
"name": "Crown Heights JCC",
"strAdress": "387 Kingston Avenue",
"zip": "11225",
"boro": "Brooklyn",
"lat": "40.665628",
"long": "-73.942308",
"num": "718 778-8808"
},
{
"name": "Gethsemane SDA Church",
"strAdress": "357 Empire Blvd",
"zip": "11225",
"boro": "Brooklyn",
"lat": "40.664227",
"long": "-73.950048",
"num": "Call 311 for hours"
},
{
"name": "Horeb SDA Community Services",
"strAdress": "520 Kingston Ave",
"zip": "11225",
"boro": "Brooklyn",
"lat": "40.661058",
"long": "-73.943022",
"num": "Call 311 for hours"
},
{
"name": "Calvary Pentecostal Church",
"strAdress": "151 Woodruff Avenue",
"zip": "11226",
"boro": "Brooklyn",
"lat": "40.654355000000002",
"long": "-73.961084999999997",
"num": "718 4698252"
},
{
"name": "Church Avenue Merchants Block Assoc., Inc./Camba Food Pantry",
"strAdress": "2241 Church Ave",
"zip": "11226",
"boro": "Brooklyn",
"lat": "40.650679",
"long": "-73.957362",
"num": "Call 311 for hours"
},
{
"name": "Church of God of Salvation",
"strAdress": "1615 Nostrand Ave",
"zip": "11226",
"boro": "Brooklyn",
"lat": "40.646673",
"long": "-73.948792",
"num": "Call 311 for hours"
},
{
"name": "Fernande Valme' Ministries Inc.",
"strAdress": "1120 Flatbush Ave",
"zip": "11226",
"boro": "Brooklyn",
"lat": "40.643124",
"long": "-73.957834",
"num": "Call 311 for hours"
},
{
"name": "Holy Cross Food Pantry - Brooklyn",
"strAdress": "2530 Church Ave",
"zip": "11226",
"boro": "Brooklyn",
"lat": "40.650269",
"long": "-73.953466",
"num": "Call 311 for hours"
},
{
"name": "Holy Innocents",
"strAdress": "279 East 17th St",
"zip": "11226",
"boro": "Brooklyn",
"lat": "40.644081",
"long": "-73.962638",
"num": "Call 311 for hours"
},
{
"name": "More Grace Redemptive Center",
"strAdress": "646 Parkside Ave",
"zip": "11226",
"boro": "Brooklyn",
"lat": "40.656008",
"long": "-73.951717",
"num": "Call 311 for hours"
},
{
"name": "Peniel Haitian Church of C and MA",
"strAdress": "2741 Albemarle Rd",
"zip": "11226",
"boro": "Brooklyn",
"lat": "40.648304",
"long": "-73.950611",
"num": "Call 311 for hours"
},
{
"name": "Salt & Sea Mission Church Inc.",
"strAdress": "2417-2419 STILLWELL AVE",
"zip": "11223",
"boro": "Brooklyn",
"lat": "40.588524999999997",
"long": "-73.983345",
"num": "718 473-7979"
},
{
"name": "Public Health Solutions",
"strAdress": "2555 Ocean Ave",
"zip": "11229",
"boro": "Brooklyn",
"lat": "40.599209",
"long": "-73.951101",
"num": "Call 311 for hours"
},
{
"name": "Masbia of Flatbush",
"strAdress": "1372 Coney Island Ave",
"zip": "11230",
"boro": "Brooklyn",
"lat": "40.624062",
"long": "-73.965311",
"num": "Call 311 for hours"
},
{
"name": "Masbia of Flatbush",
"strAdress": "1372 Coney Island Ave",
"zip": "11230",
"boro": "Brooklyn",
"lat": "40.624062",
"long": "-73.965311",
"num": "Call 311 for hours"
},
{
"name": "Food First, Inc.",
"strAdress": "165 Conover St",
"zip": "11231",
"boro": "Brooklyn",
"lat": "40.678205",
"long": "-74.013514",
"num": "Call 311 for hours"
},
{
"name": "Movement of Pentecostal Christian Church",
"strAdress": "90-92 Summit St",
"zip": "11231",
"boro": "Brooklyn",
"lat": "40.682217",
"long": "-74.003457",
"num": "Call 311 for hours"
},
{
"name": "Center for Family Life",
"strAdress": "443 39th St",
"zip": "11232",
"boro": "Brooklyn",
"lat": "40.652051",
"long": "-74.00477",
"num": "Call 311 for hours"
},
{
"name": "Center for Family Life of Sunset Park",
"strAdress": "443 39th Street 1st Floor",
"zip": "11232",
"boro": "Brooklyn",
"lat": "40.652051",
"long": "-74.00477",
"num": "718 492-3585"
},
{
"name": "Bed-Stuy Campaign Against Hunger",
"strAdress": "2004 Fulton St",
"zip": "11233",
"boro": "Brooklyn",
"lat": "40.678418",
"long": "-73.918094",
"num": "Call 311 for hours"
},
{
"name": "Blessed Assurance Church Of God Blessed Assurance of God",
"strAdress": "2093 Fulton Street",
"zip": "11233",
"boro": "Brooklyn",
"lat": "40.678438999999997",
"long": "-73.909319999999994",
"num": "347-965-1725"
},
{
"name": "Church Of Praise And Worship God In Christ",
"strAdress": "526 Ralph Avenue Brooklyn",
"zip": "11233",
"boro": "Brooklyn",
"lat": "40.671417",
"long": "-73.922631",
"num": "347-462-5679"
},
{
"name": "Community Services Housing Development Corp.",
"strAdress": "547 Howard Ave",
"zip": "11233",
"boro": "Brooklyn",
"lat": "40.668937",
"long": "-73.91997",
"num": "Call 311 for hours"
},
{
"name": "God's Deliverance Temple, Inc.",
"strAdress": "438 Ralph Ave",
"zip": "11233",
"boro": "Brooklyn",
"lat": "40.674177",
"long": "-73.922433",
"num": "Call 311 for hours"
},
{
"name": "King Emmanuel Missionary Baptist Church",
"strAdress": "207A Bainbridge Street",
"zip": "11233",
"boro": "Brooklyn",
"lat": "40.681328",
"long": "-73.928975",
"num": "718 773-1650"
},
{
"name": "Neighbors Together",
"strAdress": "2094 Fulton St",
"zip": "11233",
"boro": "Brooklyn",
"lat": "40.678288",
"long": "-73.913841",
"num": "Call 311 for hours"
},
{
"name": "OPIN (Other People in Need)",
"strAdress": "1768 St. Johns Place",
"zip": "11233",
"boro": "Brooklyn",
"lat": "40.669877",
"long": "-73.918771",
"num": "Call 311 for hours"
},
{
"name": "St. Mark's Church of Christ",
"strAdress": "439 Ralph Ave",
"zip": "11233",
"boro": "Brooklyn",
"lat": "40.674118",
"long": "-73.921774",
"num": "Call 311 for hours"
},
{
"name": "St. Paul Pentecostal Church",
"strAdress": "133 Thomas S Boyland Street",
"zip": "11223",
"boro": "Brooklyn",
"lat": "40.680360999999998",
"long": "-73.913647999999995",
"num": "917-604-9644"
},
{
"name": "St. Philip's Episcopal/St. Benedict's Pantry",
"strAdress": "265 Decatur St",
"zip": "11233",
"boro": "Brooklyn",
"lat": "40.681635",
"long": "-73.933253",
"num": "Call 311 for hours"
},
{
"name": "True Holy Church of God in Christ Jesus",
"strAdress": "2336 Atlantic Ave",
"zip": "11233",
"boro": "Brooklyn",
"lat": "40.676038",
"long": "-73.907582",
"num": "Call 311 for hours"
},
{
"name": "Union Baptist Church",
"strAdress": "461 Decatur St",
"zip": "11233",
"boro": "Brooklyn",
"lat": "40.693942",
"long": "-73.90227",
"num": "Call 311 for hours"
},
{
"name": "Union Baptist Church",
"strAdress": "461 Decatur St",
"zip": "11233",
"boro": "Brooklyn",
"lat": "40.693942",
"long": "-73.90227",
"num": "Call 311 for hours"
},
{
"name": "Metropolitan Council On Jewish Poverty",
"strAdress": "5361 Preston Court",
"zip": "11234",
"boro": "Brooklyn",
"lat": "40.638725000000001",
"long": "-73.923711999999995",
"num": "718-763-5318"
},
{
"name": "Jewish Community Council Of Marine Park",
"strAdress": "2076 Flatbush Ave 2nd FL",
"zip": "11234",
"boro": "Brooklyn",
"lat": "40.619032",
"long": "-73.933413",
"num": "Call 311 for hours"
},
{
"name": "Kingsborough Community College",
"strAdress": "2001 Oriental Blvd - T4-265",
"zip": "11235",
"boro": "Brooklyn",
"lat": "40.577814",
"long": "-73.935561",
"num": "718-368-4660"
},
{
"name": "Kingsborough Community College (Students and their families only)",
"strAdress": "2001 Oriental Blvd (Bldg V Room 231)",
"zip": "11235",
"boro": "Brooklyn",
"lat": "40.577814",
"long": "-73.935561",
"num": "(718) 368-5411"
},
{
"name": "Shorefront Jewish Community Council",
"strAdress": "128 Brighton Beach Ave - 4th Floor",
"zip": "11235",
"boro": "Brooklyn",
"lat": "40.576219",
"long": "-73.967139",
"num": "718-743-0575 x. 7501 Appointments Only"
},
{
"name": "Shorefront Jewish Community Council (Shorefront JCC)",
"strAdress": "128 Brighton Beach 4th FL",
"zip": "11235",
"boro": "Brooklyn",
"lat": "40.576149",
"long": "-73.967182",
"num": "Call 311 for hours"
},
{
"name": "Bay View Houses Resident Association",
"strAdress": "2085 Rockaway Parkway",
"zip": "11236",
"boro": "Brooklyn",
"lat": "40.632857000000001",
"long": "-73.886954000000003",
"num": "347 216-5909"
},
{
"name": "Christian Church of Canarsie",
"strAdress": "602 East 89th St",
"zip": "11236",
"boro": "Brooklyn",
"lat": "40.642383",
"long": "-73.91006",
"num": "Call 311 for hours"
},
{
"name": "Church of God (BK)",
"strAdress": "627-29 Remson Ave",
"zip": "11236",
"boro": "Brooklyn",
"lat": "40.663036",
"long": "-73.931359",
"num": "Call 311 for hours"
},
{
"name": "International Pentecostal City Mission",
"strAdress": "9202-14 Church Ave",
"zip": "11236",
"boro": "Brooklyn",
"lat": "40.641444",
"long": "-73.982618",
"num": "Call 311 for hours"
},
{
"name": "Our Lady of Miracles-Canarsie Cluster Center",
"strAdress": "757 East 86th St",
"zip": "11236",
"boro": "Brooklyn",
"lat": "40.638809",
"long": "-73.909232",
"num": "Call 311 for hours"
},
{
"name": "Redeemed Christian Church Of God International Chapel",
"strAdress": "781 East 93rd Street",
"zip": "11236",
"boro": "Brooklyn",
"lat": "40.649198",
"long": "-73.911789",
"num": "(347)955-4403"
},
{
"name": "Make the Road NYC",
"strAdress": "301 Grove St",
"zip": "11237",
"boro": "Brooklyn",
"lat": "40.698491",
"long": "-73.915913",
"num": "718-418-7690"
},
{
"name": "Ridgewood Bushwick Senior Citizens Council",
"strAdress": "184 Wyckoff Ave",
"zip": "11237",
"boro": "Brooklyn",
"lat": "40.701205",
"long": "-73.91368",
"num": "718 366-1830"
},
{
"name": "Bethel Seventh-Day Adventist Church",
"strAdress": "457 Grand Ave",
"zip": "11238",
"boro": "Brooklyn",
"lat": "40.681706",
"long": "-73.96126",
"num": "Call 311 for hours"
},
{
"name": "Bethel Seventh-Day Adventist Church",
"strAdress": "457 Grand Ave",
"zip": "11238",
"boro": "Brooklyn",
"lat": "40.681706",
"long": "-73.96126",
"num": "Call 311 for hours"
},
{
"name": "Child Development Support Corporation",
"strAdress": "352-358 Classon Ave",
"zip": "11238",
"boro": "Brooklyn",
"lat": "40.688259",
"long": "-73.960019",
"num": "Call 311 for hours"
},
{
"name": "Church of God Feeding the Hungry",
"strAdress": "836 Classon Ave",
"zip": "11238",
"boro": "Brooklyn",
"lat": "40.67241",
"long": "-73.961178",
"num": "Call 311 for hours"
},
{
"name": "Hope City Empowerment Center",
"strAdress": "650-656 Washington Ave",
"zip": "11238",
"boro": "Brooklyn",
"lat": "40.678748",
"long": "-73.964226",
"num": "Call 311 for hours"
},
{
"name": "St. Teresa of Avila",
"strAdress": "560 Sterling Place",
"zip": "11238",
"boro": "Brooklyn",
"lat": "40.673869",
"long": "-73.959793",
"num": "Call 311 for hours"
},
{
"name": "Teen Challenge",
"strAdress": "444 Clinton Ave",
"zip": "11238",
"boro": "Brooklyn",
"lat": "40.684981",
"long": "-73.967794",
"num": "Call 311 for hours"
},
{
"name": "Teen Challenge",
"strAdress": "444 Clinton Ave",
"zip": "11238",
"boro": "Brooklyn",
"lat": "40.684981",
"long": "-73.967794",
"num": "Call 311 for hours"
},
{
"name": "Jewish Community Council of Canarsie #1",
"strAdress": "1170 Pennsylvania Ave",
"zip": "11239",
"boro": "Brooklyn",
"lat": "40.651526",
"long": "-73.885839",
"num": "Call 311 for hours"
},
{
"name": "Sisters With Purpose Inc.",
"strAdress": "1540 Van Siclen Ave",
"zip": "11239",
"boro": "Brooklyn",
"lat": "40.647499",
"long": "-73.877827",
"num": "646-460-4101"
},
{
"name": "Gay Men's Health Crisis",
"strAdress": "446 West 33rd St",
"zip": "10001",
"boro": "New York",
"lat": "40.753616",
"long": "-73.998957",
"num": "Call 311 for hours"
},
{
"name": "Gay Men's Health Crisis (GMHC)",
"strAdress": "446 West 33rd St",
"zip": "10001",
"boro": "New York",
"lat": "40.753616",
"long": "-73.998957",
"num": "Call 311 for hours"
},
{
"name": "Holy Apostles Soup Kitchen",
"strAdress": "296 Ninth Ave @ 28th St",
"zip": "10001",
"boro": "New York",
"lat": "40.749094",
"long": "-73.996944",
"num": "Call 311 for hours"
},
{
"name": "St. John's Bread of Life",
"strAdress": "213 West 30th St",
"zip": "10001",
"boro": "New York",
"lat": "40.748869",
"long": "-73.99321",
"num": "Call 311 for hours"
},
{
"name": "Cabrini Immigrant Services of New York City Inc",
"strAdress": "139 Henry St",
"zip": "10002",
"boro": "New York",
"lat": "40.71347",
"long": "-73.990761",
"num": "Call 311 for hours"
},
{
"name": "Dewitt Reformed Church",
"strAdress": "280 Rivington St",
"zip": "10002",
"boro": "New York",
"lat": "40.717493",
"long": "-73.979516",
"num": "Call 311 for hours"
},
{
"name": "Emblem Health Plan – Bowery",
"strAdress": "87 Bowery 1st FL",
"zip": "10002",
"boro": "New York",
"lat": "40.716880",
"long": "-73.995248",
"num": "Call 311 for hours"
},
{
"name": "Grand Street Settlement",
"strAdress": "80 Pitt Street",
"zip": "10002",
"boro": "New York",
"lat": "40.718302",
"long": "-73.981785",
"num": "(646) 201-4289"
},
{
"name": "Henry Street Settlement (Services Below 14th Street Only)",
"strAdress": "281 East Broadway",
"zip": "10002",
"boro": "New York",
"lat": "40.714328",
"long": "-73.984398",
"num": "212 471-2400"
},
{
"name": "Our Lady of Sorrows",
"strAdress": "213 Stanton St",
"zip": "10002",
"boro": "New York",
"lat": "40.719456",
"long": "-73.982386",
"num": "Call 311 for hours"
},
{
"name": "AIDS Momentum Project at Middle Collegiate Church",
"strAdress": "50 East 7th Street",
"zip": "10003",
"boro": "New York",
"lat": "40.727553",
"long": "-73.987661",
"num": "Call 311 for hours"
},
{
"name": "Nazareth Housing Inc.",
"strAdress": "206 East 4th Street",
"zip": "10009",
"boro": "New York",
"lat": "40.723610999999998",
"long": "-73.984244000000004",
"num": "212-477-7017"
},
{
"name": "The Father's Heart Ministries",
"strAdress": "543-545 East 11th St",
"zip": "10009",
"boro": "New York",
"lat": "40.727669",
"long": "-73.979962",
"num": "Call 311 for hours"
},
{
"name": "The Father's Heart Ministry Center",
"strAdress": "543-545 East 11th St",
"zip": "10009",
"boro": "New York",
"lat": "40.727669",
"long": "-73.979962",
"num": "Call 311 for hours"
},
{
"name": "Trinity's Services and Food for the Homeless, Inc.",
"strAdress": "602 East 9th St",
"zip": "10009",
"boro": "New York",
"lat": "40.725994",
"long": "-73.980179",
"num": "Call 311 for hours"
},
{
"name": "Trinity's Services and Food for the Homeless, Inc.",
"strAdress": "602 East 9th St",
"zip": "10009",
"boro": "New York",
"lat": "40.725994",
"long": "-73.980179",
"num": "Call 311 for hours"
},
{
"name": "University Community Social Services, Inc.",
"strAdress": "137 East 2nd St",
"zip": "10009",
"boro": "New York",
"lat": "40.72306",
"long": "-73.986416",
"num": "Call 311 for hours"
},
{
"name": "New Alternative for Children, Inc.",
"strAdress": "37 West 26th St - 6th Floor",
"zip": "10010",
"boro": "New York",
"lat": "40.744601",
"long": "-73.990436",
"num": "Call 311 for hours"
},
{
"name": "Ascension Outreach, Inc.",
"strAdress": "12 West 11th St",
"zip": "10011",
"boro": "New York",
"lat": "40.734084",
"long": "-73.995743",
"num": "Call 311 for hours"
},
{
"name": "Church of the Village United Methodist Church",
"strAdress": "201 West 13th St",
"zip": "10011",
"boro": "New York",
"lat": "40.738216",
"long": "-74.000405",
"num": "Call 311 for hours"
},
{
"name": "Church of the Village United Methodist Church",
"strAdress": "201 West 13th St",
"zip": "10011",
"boro": "New York",
"lat": "40.738216",
"long": "-74.000405",
"num": "Call 311 for hours"
},
{
"name": "St. Peter's Food Pantry",
"strAdress": "346 West 20th St. Nr. 9th Ave",
"zip": "10011",
"boro": "New York",
"lat": "40.769212",
"long": "-73.984772",
"num": "Call 311 for hours"
},
{
"name": "The Salvation Army New York Temple Corps",
"strAdress": "132 West 14th St (Ground Floor)",
"zip": "10011",
"boro": "New York",
"lat": "40.74131",
"long": "-74.006653",
"num": "Call 311 for hours"
},
{
"name": "Xavier Mission Inc.",
"strAdress": "55 West 15th St",
"zip": "10011",
"boro": "New York",
"lat": "40.737587",
"long": "-73.995257",
"num": "Call 311 for hours"
},
{
"name": "Xavier Mission Inc.",
"strAdress": "55 West 15th St",
"zip": "10011",
"boro": "New York",
"lat": "40.737587",
"long": "-73.995257",
"num": "Call 311 for hours"
},
{
"name": "Chinese Consolidated Benevolent Assoc (CCBA)",
"strAdress": "62 Mott St",
"zip": "10013",
"boro": "New York",
"lat": "40.715944",
"long": "-73.997961",
"num": "Call 311 for hours"
},
{
"name": "New York City Rescue Mission",
"strAdress": "90 Lafayette St",
"zip": "10013",
"boro": "New York",
"lat": "40.717536",
"long": "-74.001621",
"num": "Call 311 for hours"
},
{
"name": "New York City Rescue Mission",
"strAdress": "90 Lafayette St",
"zip": "10013",
"boro": "New York",
"lat": "40.717536",
"long": "-74.001621",
"num": "Call 311 for hours"
},
{
"name": "St. Josephs Soup Kitchen Incorportated",
"strAdress": "371 6th Ave & Washington Pl",
"zip": "10014",
"boro": "New York",
"lat": "40.732294",
"long": "-74.000529",
"num": "Call 311 for hours"
},
{
"name": "Grand Central Neighborhood Social Service Corp.",
"strAdress": "120 East 32nd St",
"zip": "10016",
"boro": "New York",
"lat": "40.745198",
"long": "-73.981476",
"num": "Call 311 for hours"
},
{
"name": "The Mid Manhattan Library",
"strAdress": "455 5th Avenue",
"zip": "10016",
"boro": "New York",
"lat": "40.751886",
"long": "-73.981705",
"num": "(212) 340-0861"
},
{
"name": "MCCNY Charities",
"strAdress": "446 West 36th St",
"zip": "10018",
"boro": "New York",
"lat": "40.75533",
"long": "-73.997514",
"num": "Call 311 for hours"
},
{
"name": "Rauschendusch Metro Ministries Inc.",
"strAdress": "410 West 40th St",
"zip": "10018",
"boro": "New York",
"lat": "40.757203",
"long": "-73.994323",
"num": "Call 311 for hours"
},
{
"name": "Sacred Heart of Jesus Christ",
"strAdress": "457 West 51st St",
"zip": "10019",
"boro": "New York",
"lat": "40.765235",
"long": "-73.990301",
"num": "Call 311 for hours"
},
{
"name": "St. Paul's House Inc.",
"strAdress": "335 West 51st Street",
"zip": "10019",
"boro": "New York",
"lat": "40.763677",
"long": "-73.986994",
"num": "Call 311 for hours"
},
{
"name": "Jan Hus Presbyterian Church/Homeless Outreach and Advocacy Program",
"strAdress": "351 East 74th St",
"zip": "10021",
"boro": "New York",
"lat": "40.769554",
"long": "-73.955512",
"num": "Call 311 for hours"
},
{
"name": "Jan Hus Presbyterian Church/Homeless Outreach and Advocacy Program",
"strAdress": "351 East 74th St",
"zip": "10021",
"boro": "New York",
"lat": "40.769554",
"long": "-73.955512",
"num": "Call 311 for hours"
},
{
"name": "Central Synagogue Caring Committee",
"strAdress": "123 East 55th St",
"zip": "10022",
"boro": "New York",
"lat": "40.760027",
"long": "-73.970572",
"num": "Call 311 for hours"
},
{
"name": "Coatition for the Homeless",
"strAdress": "108 East 51st St",
"zip": "10022",
"boro": "New York",
"lat": "40.757571",
"long": "-73.973022",
"num": "Call 311 for hours"
},
{
"name": "Crossroads Community Services Inc.",
"strAdress": "108 East 51st St",
"zip": "10022",
"boro": "New York",
"lat": "40.757571",
"long": "-73.973022",
"num": "Call 311 for hours"
},
{
"name": "Crossroads Community Services Inc.",
"strAdress": "108 East 51st St",
"zip": "10022",
"boro": "New York",
"lat": "40.757571",
"long": "-73.973022",
"num": "Call 311 for hours"
},
{
"name": "Momentum Project @ St. Peter's Church",
"strAdress": "619 Lexington Ave",
"zip": "10022",
"boro": "New York",
"lat": "40.758565",
"long": "-73.970383",
"num": "Call 311 for hours"
},
{
"name": "Momentum Project @ St. Peter's Church",
"strAdress": "619 Lexington Ave",
"zip": "10022",
"boro": "New York",
"lat": "40.758565",
"long": "-73.970383",
"num": "Call 311 for hours"
},
{
"name": "St. Peter's Church Breakfast Program",
"strAdress": "619 Lexington Ave @ 54th St",
"zip": "10022",
"boro": "New York",
"lat": "40.764798",
"long": "-73.984294",
"num": "Call 311 for hours"
},
{
"name": "Christ & St. Stephen's Food Program",
"strAdress": "120 West 69th St",
"zip": "10023",
"boro": "New York",
"lat": "40.775601",
"long": "-73.981091",
"num": "Call 311 for hours"
},
{
"name": "National Council of Jewish Women",
"strAdress": "241 West 72nd St",
"zip": "10023",
"boro": "New York",
"lat": "40.779485",
"long": "-73.983009",
"num": "Call 311 for hours"
},
{
"name": "National Council of Jewish Women",
"strAdress": "241 West 72nd St",
"zip": "10023",
"boro": "New York",
"lat": "40.779485",
"long": "-73.983009",
"num": "Call 311 for hours"
},
{
"name": "Congregation B'nai Jeshurun",
"strAdress": "257 West 88th St",
"zip": "10024",
"boro": "New York",
"lat": "40.790139",
"long": "-73.976061",
"num": "Call 311 for hours"
},
{
"name": "St. Ignatius Episcopal Church",
"strAdress": "552 West End Ave",
"zip": "10024",
"boro": "New York",
"lat": "40.789266",
"long": "-73.9772",
"num": "Call 311 for hours"
},
{
"name": "West Side Campaign Against Hunger",
"strAdress": "263 W. 86th St @ West End Ave",
"zip": "10024",
"boro": "New York",
"lat": "40.788869",
"long": "-73.977123",
"num": "Call 311 for hours"
},
{
"name": "Cathedral Church of St. John the Divine",
"strAdress": "1047 Amsterdam Ave @ W. 112th St",
"zip": "10025",
"boro": "New York",
"lat": "40.804465",
"long": "-73.964019",
"num": "Call 311 for hours"
},
{
"name": "Church Of Notre Dame",
"strAdress": "405 West 114th Street",
"zip": "10025",
"boro": "New York",
"lat": "40.805083000000003",
"long": "-73.960404999999994",
"num": "212-866-1500"
},
{
"name": "Community Impact",
"strAdress": "616 West 114th St",
"zip": "10025",
"boro": "New York",
"lat": "40.806898",
"long": "-73.965904",
"num": "Call 311 for hours"
},
{
"name": "Franciscan Community Center at Holy name",
"strAdress": "207 West 96th St",
"zip": "10025",
"boro": "New York",
"lat": "40.794412",
"long": "-73.970502",
"num": "Call 311 for hours"
},
{
"name": "Southern Baptist Church",
"strAdress": "12 West 108th St",
"zip": "10025",
"boro": "New York",
"lat": "40.799588",
"long": "-73.960146",
"num": "Call 311 for hours"
},
{
"name": "Community Kitchen Of West Harlem - Food Bank",
"strAdress": "252 West 116th St",
"zip": "10026",
"boro": "New York",
"lat": "40.803943",
"long": "-73.954989",
"num": "212-894-8060"
},
{
"name": "Food Bank for New York City",
"strAdress": "252 West 116th St",
"zip": "10026",
"boro": "New York",
"lat": "40.803943",
"long": "-73.954989",
"num": "Call 311 for hours"
},
{
"name": "Food Bank for New York City",
"strAdress": "252 West 116th St",
"zip": "10026",
"boro": "New York",
"lat": "40.803943",
"long": "-73.954989",
"num": "Call 311 for hours"
},
{
"name": "Project Create - Anthony House",
"strAdress": "73 Lenox Ave",
"zip": "10026",
"boro": "New York",
"lat": "40.800547",
"long": "-73.950866",
"num": "Call 311 for hours"
},
{
"name": "African Services Committee",
"strAdress": "429 West 127th St",
"zip": "10027",
"boro": "New York",
"lat": "40.813454",
"long": "-73.954512",
"num": "Call 311 for hours"
},
{
"name": "Antioch Outreach Ministries",
"strAdress": "41 West 124th St",
"zip": "10027",
"boro": "New York",
"lat": "40.806595",
"long": "-73.94419",
"num": "Call 311 for hours"
},
{
"name": "Church of the Annunciation",
"strAdress": "88 Convent Ave Near 132nd St",
"zip": "10027",
"boro": "New York",
"lat": "40.814583",
"long": "-73.947944",
"num": "Call 311 for hours"
},
{
"name": "CUCS _ Central Harlem",
"strAdress": "304 West 133rd St 1st Fl",
"zip": "10027",
"boro": "New York",
"lat": "40.815283",
"long": "-73.947964",
"num": "(212) 749-8900"
},
{
"name": "Harlem Community Nutritional Services",
"strAdress": "132 West 125th Street 5th FL.",
"zip": "10027",
"boro": "New York",
"lat": "40.808261999999999",
"long": "-73.947241000000005",
"num": "2126667538"
},
{
"name": "Harlem Dowling West Side Center/Specialized Services",
"strAdress": "2090 Adam Clayton Powell Jr. Blvd - 1st Floor",
"zip": "10027",
"boro": "New York",
"lat": "40.808785",
"long": "-73.948994",
"num": "Call 311 for hours"
},
{
"name": "Mt. Olivet Baptist Church Community Meal Program",
"strAdress": "201 Lenox Ave",
"zip": "10027",
"boro": "New York",
"lat": "40.804649",
"long": "-73.94788",
"num": "Call 311 for hours"
},
{
"name": "Riverside Church Food Pantry",
"strAdress": "91 Claremont Ave @ 120th St",
"zip": "10027",
"boro": "New York",
"lat": "40.80761",
"long": "-73.954949",
"num": "Call 311 for hours"
},
{
"name": "Salem United Methodist Church",
"strAdress": "2190 Adam Clayton Powell Jr. Blvd",
"zip": "10027",
"boro": "New York",
"lat": "40.811944",
"long": "-73.94661",
"num": "Call 311 for hours"
},
{
"name": "Salem United Methodist Church",
"strAdress": "2190 Adam Clayton Powell Jr. Blvd",
"zip": "10027",
"boro": "New York",
"lat": "40.811944",
"long": "-73.94661",
"num": "Call 311 for hours"
},
{
"name": "Shiloh Church of Christ",
"strAdress": "5-7 West 128th St",
"zip": "10027",
"boro": "New York",
"lat": "40.808764",
"long": "-73.941274",
"num": "Call 311 for hours"
},
{
"name": "Shiloh Church of Christ (FP)",
"strAdress": "5-7 West 128th St",
"zip": "10027",
"boro": "New York",
"lat": "40.808764",
"long": "-73.941274",
"num": "Call 311 for hours"
},
{
"name": "St. Mary's Episcopal Church Food Pantry",
"strAdress": "521 West 126th St",
"zip": "10027",
"boro": "New York",
"lat": "40.814931",
"long": "-73.956034",
"num": "Call 311 for hours"
},
{
"name": "Little Sisters of the Assumption Family Health Services",
"strAdress": "333 East 115th St",
"zip": "10029",
"boro": "New York",
"lat": "40.795833",
"long": "-73.936614",
"num": "Call 311 for hours"
},
{
"name": "Macedonia Ch. Assembly of God-Bread of Life Food Pantry",
"strAdress": "340 East 106th St",
"zip": "10029",
"boro": "New York",
"lat": "40.789679",
"long": "-73.940965",
"num": "Call 311 for hours"
},
{
"name": "Metropolitan Hospital WIC",
"strAdress": "1901 1st Ave",
"zip": "10029",
"boro": "New York",
"lat": "40.785225",
"long": "-73.944981",
"num": "Call 311 for hours"
},
{
"name": "New York Common Pantry",
"strAdress": "8 East 109th Street",
"zip": "10029",
"boro": "New York",
"lat": "40.795786",
"long": "-73.949229000000003",
"num": "917-720-9700"
},
{
"name": "New York Common Pantry",
"strAdress": "8 East 109th Street",
"zip": "10029",
"boro": "New York",
"lat": "40.795786",
"long": "-73.949229000000003",
"num": "917-720-9700"
},
{
"name": "New York Common Pantry",
"strAdress": "8 East 109th Street",
"zip": "10029",
"boro": "New York",
"lat": "40.795786",
"long": "-73.949229000000003",
"num": "Call 311 for hours"
},
{
"name": "St. Cecilia's Parish Services",
"strAdress": "125 East 105th St",
"zip": "10029",
"boro": "New York",
"lat": "40.791828",
"long": "-73.947331",
"num": "Call 311 for hours"
},
{
"name": "Goddard Riverside",
"strAdress": "140 West 140th St Basement level",
"zip": "10030",
"boro": "New York",
"lat": "40.818088",
"long": "-73.940513",
"num": "(212) 234-3481"
},
{
"name": "St. Charles Borromeo Church",
"strAdress": "211 West 141st St",
"zip": "10030",
"boro": "New York",
"lat": "40.819606",
"long": "-73.941655",
"num": "Call 311 for hours"
},
{
"name": "Church of the Crucifixion",
"strAdress": "459 West 149th St",
"zip": "10031",
"boro": "New York",
"lat": "40.827489",
"long": "-73.944822",
"num": "Call 311 for hours"
},
{
"name": "Convent Avenue Baptist Church",
"strAdress": "425 West 144th St @ Convent Ave",
"zip": "10031",
"boro": "New York",
"lat": "40.824292",
"long": "-73.946181",
"num": "Call 311 for hours"
},
{
"name": "Upper Manhattan Mental Health Center",
"strAdress": "1727 Amsterdam Ave",
"zip": "10031",
"boro": "New York",
"lat": "40.825536",
"long": "-73.946907",
"num": "Call 311 for hours"
},
{
"name": "West Harlem Group Assistance",
"strAdress": "625 Lenox Ave",
"zip": "10031",
"boro": "New York",
"lat": "40.818314",
"long": "-73.937893",
"num": "Call 311 for hours"
},
{
"name": "Community League of the Heights",
"strAdress": "508 West 159th St",
"zip": "10032",
"boro": "New York",
"lat": "40.834191",
"long": "-73.941915",
"num": "Call 311 for hours"
},
{
"name": "Affinity Health Plan - Wash. Heights",
"strAdress": "1307 St. Nicholas Ave",
"zip": "10033",
"boro": "New York",
"lat": "40.845833",
"long": "-73.936598",
"num": "Call 311 for hours"
},
{
"name": "Jewish Community Council of Washington Hgts",
"strAdress": "121 Bennett Ave #11A",
"zip": "10033",
"boro": "New York",
"lat": "40.854098",
"long": "-73.934506",
"num": "Call 311 for hours"
},
{
"name": "Washington Heights Ecumenical Food Pantry",
"strAdress": "4111 B'way @ 173rd St",
"zip": "10033",
"boro": "New York",
"lat": "40.844663",
"long": "-73.93872",
"num": "Call 311 for hours"
},
{
"name": "Good Shepherd Food Pantry",
"strAdress": "104 Cooper St. Near W. 207th",
"zip": "10034",
"boro": "New York",
"lat": "40.712784",
"long": "-74.005941",
"num": "Call 311 for hours"
},
{
"name": "New York City Love Kitchen Inc.",
"strAdress": "3816 9th Ave",
"zip": "10034",
"boro": "New York",
"lat": "40.862198",
"long": "-73.918517",
"num": "Call 311 for hours"
},
{
"name": "New York City Love Kitchen Inc.",
"strAdress": "3816 9th Ave",
"zip": "10034",
"boro": "New York",
"lat": "40.862198",
"long": "-73.918517",
"num": "Call 311 for hours"
},
{
"name": "Worldwide Missionary Movement/Centro Evangelistico MMM, Inc.",
"strAdress": "148 Post Ave",
"zip": "10034",
"boro": "New York",
"lat": "40.865306",
"long": "-73.919013",
"num": "Call 311 for hours"
},
{
"name": "All Saints R.C. Church",
"strAdress": "47 East 129th St",
"zip": "10035",
"boro": "New York",
"lat": "40.808327",
"long": "-73.938418",
"num": "Call 311 for hours"
},
{
"name": "Beth Hark Christian Counseling Center",
"strAdress": "1832 Madison Ave",
"zip": "10035",
"boro": "New York",
"lat": "40.801995",
"long": "-73.943360",
"num": "Call 311 for hours"
},
{
"name": "CUCS _ East Harlem",
"strAdress": "198 E. 121st St 5th Fl",
"zip": "10035",
"boro": "New York",
"lat": "40.801261",
"long": "-73.938382",
"num": "212 927-0962"
},
{
"name": "Fraternite Notre Dame",
"strAdress": "2290 First Ave",
"zip": "10035",
"boro": "New York",
"lat": "40.797016",
"long": "-73.934318",
"num": "Call 311 for hours"
},
{
"name": "Fraternite Notre Dame, Inc.",
"strAdress": "2290 First Ave",
"zip": "10035",
"boro": "New York",
"lat": "40.797016",
"long": "-73.934318",
"num": "Call 311 for hours"
},
{
"name": "Friendly Hands Ministry Inc.",
"strAdress": "225-41 East 118th St",
"zip": "10035",
"boro": "New York",
"lat": "40.798988",
"long": "-73.937843",
"num": "Call 311 for hours"
},
{
"name": "Friendly Hands Ministry Inc.",
"strAdress": "225-41 East 118th St",
"zip": "10035",
"boro": "New York",
"lat": "40.798988",
"long": "-73.937843",
"num": "Call 311 for hours"
},
{
"name": "Harvest of Soul/Holy Ghost",
"strAdress": "13-15 East 125th St",
"zip": "10035",
"boro": "New York",
"lat": "40.806198",
"long": "-73.941673",
"num": "Call 311 for hours"
},
{
"name": "Holy Ghost Pentecostal Church",
"strAdress": "13-15 East 125th Street",
"zip": "10035",
"boro": "New York",
"lat": "40.806193999999998",
"long": "-73.941682",
"num": "Call 311 for hours"
},
{
"name": "Iris House",
"strAdress": "2271 2nd Ave",
"zip": "10035",
"boro": "New York",
"lat": "40.79754",
"long": "-73.937774",
"num": "Call 311 for hours"
},
{
"name": "Holy Cross Food Supplement Program",
"strAdress": "329 West 42nd St",
"zip": "10036",
"boro": "New York",
"lat": "40.758128",
"long": "-73.991271",
"num": "Call 311 for hours"
},
{
"name": "St. Clements Food Pantry",
"strAdress": "423 West 46th St - 9th/10th Ave",
"zip": "10036",
"boro": "New York",
"lat": "40.755252",
"long": "-73.998659",
"num": "Call 311 for hours"
},
{
"name": "Bethel Ame Church",
"strAdress": "54-60 West 132nd St",
"zip": "10037",
"boro": "New York",
"lat": "40.811488",
"long": "-73.941034",
"num": "Call 311 for hours"
},
{
"name": "St. Mark the Evangelist Church",
"strAdress": "65 West 138th St",
"zip": "10037",
"boro": "New York",
"lat": "40.815909",
"long": "-73.938678",
"num": "Call 311 for hours"
},
{
"name": "Father Creavin's Food Pantry",
"strAdress": "276 West 151st St",
"zip": "10039",
"boro": "New York",
"lat": "40.825964",
"long": "-73.937942",
"num": "Call 311 for hours"
},
{
"name": "Christ Church United Methodist",
"strAdress": "520 Park Avenue @ 60th St",
"zip": "10065",
"boro": "New York",
"lat": "40.763329",
"long": "-73.968259",
"num": "Call 311 for hours"
},
{
"name": "Temple Shaaray Tefila",
"strAdress": "250 East 79th St",
"zip": "10075",
"boro": "New York",
"lat": "40.773321",
"long": "-73.95553",
"num": "Call 311 for hours"
},
{
"name": "Met Council Central",
"strAdress": "120 Broadway 7th Fl",
"zip": "10271",
"boro": "New York",
"lat": "40.712784",
"long": "-74.005941",
"num": "212 453-9532 Appointments Only"
},
{
"name": "Center of Hope International",
"strAdress": "38-49 12th St (L.I.C.)",
"zip": "11101",
"boro": "Queens",
"lat": "40.756814",
"long": "-73.941736",
"num": "Call 311 for hours"
},
{
"name": "Iglesia Alianza Misionera Ebenezer",
"strAdress": "43-02 38th St (L.I.C.)",
"zip": "11101",
"boro": "Queens",
"lat": "40.74563",
"long": "-73.927211",
"num": "Call 311 for hours"
},
{
"name": "St. Raphael Church Food Pantry",
"strAdress": "35-20 Greenpoint Ave, LIC",
"zip": "11101",
"boro": "Queens",
"lat": "40.737218",
"long": "-73.930605",
"num": "Call 311 for hours"
},
{
"name": "Queens North Family Center",
"strAdress": "23-40 Astoria Blvd",
"zip": "11102",
"boro": "Queens",
"lat": "40.771581",
"long": "-73.923775",
"num": "Call 311 for hours"
},
{
"name": "St. Margaret Mary Church",
"strAdress": "9-18 27th Ave",
"zip": "11102",
"boro": "Queens",
"lat": "40.773777",
"long": "-73.930487",
"num": "Call 311 for hours"
},
{
"name": "New York School of Urban Ministry",
"strAdress": "31-65 46th St",
"zip": "11103",
"boro": "Queens",
"lat": "40.757359",
"long": "-73.913349",
"num": "Call 311 for hours"
},
{
"name": "The Salvation Army Astoria Corps",
"strAdress": "45-18 Broadway",
"zip": "11103",
"boro": "Queens",
"lat": "40.756625",
"long": "-73.914548",
"num": "Call 311 for hours"
},
{
"name": "Fortune Society (Fortune clients only)",
"strAdress": "2976 Northern Blvd",
"zip": "11104",
"boro": "Queens",
"lat": "40.752046",
"long": "-73.927237",
"num": "(212) 691-7554"
},
{
"name": "Hour Children Community Outreach",
"strAdress": "36-49 11th St (LIC)",
"zip": "11106",
"boro": "Queens",
"lat": "40.759861",
"long": "-73.940446",
"num": "Call 311 for hours"
},
{
"name": "La Jornda",
"strAdress": "135-32 38th Avenue",
"zip": "11354",
"boro": "Queens",
"lat": "40.760416999999997",
"long": "-73.831804000000005",
"num": "917-880-5693"
},
{
"name": "Department Of Labor-Flushing",
"strAdress": "138-60 Barclay Ave 2nd Fl",
"zip": "11355",
"boro": "Queens",
"lat": "40.758304",
"long": "-73.826333",
"num": "212-894-8060"
},
{
"name": "Min Kwon",
"strAdress": "136-19 41ST Ave",
"zip": "11355",
"boro": "Queens",
"lat": "40.758873",
"long": "-73.828873",
"num": "718 460-5600"
},
{
"name": "The Child Center of NY- Flushing Clinic",
"strAdress": "140-15B Sanford Ave",
"zip": "11355",
"boro": "Queens",
"lat": "40.757532",
"long": "-73.826762",
"num": "(718) 228-0720 Ext. 235"
},
{
"name": "Kehilat Sepahrdim of Ahvat Achim",
"strAdress": "150-62 78th Road, Flushing",
"zip": "11367",
"boro": "Queens",
"lat": "40.721018000000001",
"long": "-73.811530000000005",
"num": "(718)5919574"
},
{
"name": "Corona S.D.A. Church 35",
"strAdress": "35-30 103RD Street",
"zip": "11368",
"boro": "Queens",
"lat": "40.753816999999998",
"long": "-73.864864999999995",
"num": "(718) 429-7050"
},
{
"name": "Corona S.D.A. Church 35",
"strAdress": "35-30 103RD Street",
"zip": "11368",
"boro": "Queens",
"lat": "40.753816999999998",
"long": "-73.864864999999995",
"num": "(718)651-4534"
},
{
"name": "Elmcor Youth & Adult Activities #2",
"strAdress": "33-16 108th St",
"zip": "11368",
"boro": "Queens",
"lat": "40.724519",
"long": "-73.845292",
"num": "Call 311 for hours"
},
{
"name": "Lefrak City Jewish Center, Inc.",
"strAdress": "98-15 Horace Harding Expressway",
"zip": "11368",
"boro": "Queens",
"lat": "40.735963",
"long": "-73.860588",
"num": "Call 311 for hours"
},
{
"name": "Mt. Horeb Baptist Church",
"strAdress": "109-20 34th Ave",
"zip": "11368",
"boro": "Queens",
"lat": "40.756426",
"long": "-73.85892",
"num": "Call 311 for hours"
},
{
"name": "Mt. Olivet Gospel Church",
"strAdress": "33-27 97th St, Corona",
"zip": "11368",
"boro": "Queens",
"lat": "40.756154",
"long": "-73.870686",
"num": "Call 311 for hours"
},
{
"name": "Northeast Conference Community Center SDA",
"strAdress": "99-13 Northern Blvd",
"zip": "11368",
"boro": "Queens",
"lat": "40.757556999999998",
"long": "-73.868977000000001",
"num": "347-527-2444"
},
{
"name": "SCO Family of Services Woodside*",
"strAdress": "103-24 Roosevelt Ave 3rd Fl",
"zip": "11368",
"boro": "Queens",
"lat": "40.749931",
"long": "-73.862009",
"num": "718 426-7523"
},
{
"name": "Urban Health Plan - Plaza Del Sol",
"strAdress": "37-16 108Th Street",
"zip": "11368",
"boro": "Queens",
"lat": "40.753885",
"long": "-73.860301",
"num": "Call 311 for hours"
},
{
"name": "Atonement Lutheran Church",
"strAdress": "30-61 Street (Jackson Height)",
"zip": "11369",
"boro": "Queens",
"lat": "40.729120",
"long": "-73.904202",
"num": "718-639-6047"
},
{
"name": "First Baptist Church",
"strAdress": "100-10 Astoria Blvd., E. Elmhurst",
"zip": "11369",
"boro": "Queens",
"lat": "40.761523",
"long": "-73.86896",
"num": "Call 311 for hours"
},
{
"name": "Make The Road – Queens",
"strAdress": "92-10 Roosevelt Ave",
"zip": "11372",
"boro": "Queens",
"lat": "40.748658",
"long": "-73.874116",
"num": "Call 311 for hours"
},
{
"name": "Metro Plus - Jackson Heights",
"strAdress": "92-14 Roosevelt Ave",
"zip": "11372",
"boro": "Queens",
"lat": "40.748671",
"long": "-73.873993",
"num": "Call 311 for hours"
},
{
"name": "St. Mark AME Church/ The Voice of Hagar",
"strAdress": "95-18 Northern BLVD",
"zip": "11372",
"boro": "Queens",
"lat": "40.756856",
"long": "-73.872486",
"num": "Call 311 for hours"
},
{
"name": "The Salvation Army Temple Corp",
"strAdress": "86-07 35th Ave",
"zip": "11372",
"boro": "Queens",
"lat": "40.752228",
"long": "-73.880656",
"num": "Call 311 for hours"
},
{
"name": "Elmhurst Hospital – Lobby",
"strAdress": "79-01 Broadway Queens",
"zip": "11373",
"boro": "Queens",
"lat": "40.745104",
"long": "-73.885649",
"num": "Call 311 for hours"
},
{
"name": "Elmhurst Hospital – WIC",
"strAdress": "81-06 Baxter Ave",
"zip": "11373",
"boro": "Queens",
"lat": "40.745241",
"long": "-73.883899",
"num": "Call 311 for hours"
},
{
"name": "New Life Community Development Corporation",
"strAdress": "82-10 Queens Blvd (Elmhurst)",
"zip": "11373",
"boro": "Queens",
"lat": "40.736874",
"long": "-73.881149",
"num": "Call 311 for hours"
},
{
"name": "Jewish Institute of Queens",
"strAdress": "60-05 Woodhaven Blvd (Elmhurst)",
"zip": "11373",
"boro": "Queens",
"lat": "40.731192",
"long": "-73.870973",
"num": "Call 311 for hours"
},
{
"name": "Jewish Institute of Queens",
"strAdress": "60-05 Woodhaven Blvd (Elmhurst)",
"zip": "11373",
"boro": "Queens",
"lat": "40.731192",
"long": "-73.870973",
"num": "Call 311 for hours"
},
{
"name": "Masbia of Queens",
"strAdress": "98-08 Queens Blvd",
"zip": "11374",
"boro": "Queens",
"lat": "40.728099",
"long": "-73.857419",
"num": "Call 311 for hours"
},
{
"name": "Masbia of Queens",
"strAdress": "98-08 Queens Blvd",
"zip": "11374",
"boro": "Queens",
"lat": "40.728099",
"long": "-73.857419",
"num": "Call 311 for hours"
},
{
"name": "Forest Hills Seniors Center",
"strAdress": "108-25 62nd Drive",
"zip": "11375",
"boro": "Queens",
"lat": "40.736294999999998",
"long": "-73.850117999999995",
"num": "718-699-1010"
},
{
"name": "Queens Jewish Community Council",
"strAdress": "119-45 Union Turnpike",
"zip": "11375",
"boro": "Queens",
"lat": "40.713981",
"long": "-73.832215",
"num": "646-581-9677 Appointments Only"
},
{
"name": "AIDS Center of Queens County",
"strAdress": "62-07 Woodside Ave",
"zip": "11377",
"boro": "Queens",
"lat": "40.74472",
"long": "-73.902259",
"num": "Call 311 for hours"
},
{
"name": "BVM/St. Mary's Church Winfield",
"strAdress": "70-31 48th Ave (Woodside)",
"zip": "11377",
"boro": "Queens",
"lat": "40.738618",
"long": "-73.893168",
"num": "Call 311 for hours"
},
{
"name": "Corpus Christi Food Pantry",
"strAdress": "31-30 61st St",
"zip": "11377",
"boro": "Queens",
"lat": "40.756528",
"long": "-73.901938",
"num": "Call 311 for hours"
},
{
"name": "Jackson Heights SDA",
"strAdress": "72-25 Woodside Ave",
"zip": "11377",
"boro": "Queens",
"lat": "40.742987",
"long": "-73.891721",
"num": "Call 311 for hours"
},
{
"name": "Jackson Heights SDA",
"strAdress": "72-25 Woodside Ave",
"zip": "11377",
"boro": "Queens",
"lat": "40.742987",
"long": "-73.891721",
"num": "Call 311 for hours"
},
{
"name": "Saint Teresa Church - Saint Vincent DePaul Society",
"strAdress": "50-20 45th St (Woodside)",
"zip": "11377",
"boro": "Queens",
"lat": "40.736973",
"long": "-73.921103",
"num": "Call 311 for hours"
},
{
"name": "Agape Christian Center",
"strAdress": "59-02 Summerfield St. Ridgewood",
"zip": "11385",
"boro": "Queens",
"lat": "40.699323",
"long": "-73.897955",
"num": "Call 311 for hours"
},
{
"name": "Agape Christian Center",
"strAdress": "59-02 Summerfield St. Ridgewood",
"zip": "11385",
"boro": "Queens",
"lat": "40.699323",
"long": "-73.897955",
"num": "Call 311 for hours"
},
{
"name": "Community Alliance Initiative",
"strAdress": "60-85 Myrtle Avenue",
"zip": "11385",
"boro": "Queens",
"lat": "40.700749000000002",
"long": "-73.895251999999999",
"num": "718-305-4888"
},
{
"name": "Ridgewood Older Adult Center & Services, Inc.",
"strAdress": "59-14 70th Ave",
"zip": "11385",
"boro": "Queens",
"lat": "40.701066",
"long": "-73.89979",
"num": "Call 311 for hours"
},
{
"name": "First Church of God in Christ",
"strAdress": "187-10 Baisley Blvd",
"zip": "11412",
"boro": "Queens",
"lat": "40.690246",
"long": "-73.76292",
"num": "Call 311 for hours"
},
{
"name": "First Church of God in Christ, Inc.",
"strAdress": "187-10 Baisley Blvd",
"zip": "11412",
"boro": "Queens",
"lat": "40.690246",
"long": "-73.76292",
"num": "Call 311 for hours"
},
{
"name": "Gospel Assembly - Queens",
"strAdress": "109-14 Farmers Blvd",
"zip": "11412",
"boro": "Queens",
"lat": "40.703554",
"long": "-73.766955",
"num": "Call 311 for hours"
},
{
"name": "Our Lady of Light Parish",
"strAdress": "118-22 Riverton St",
"zip": "11412",
"boro": "Queens",
"lat": "40.689716",
"long": "-73.763086",
"num": "Call 311 for hours"
},
{
"name": "St. Albans Gospel Assembly Food Ministry",
"strAdress": "200-25 Linden Blvd (St. Albans)",
"zip": "11412",
"boro": "Queens",
"lat": "40.694821",
"long": "-73.751811",
"num": "Call 311 for hours"
},
{
"name": "First Presbyterian Church of Springfield Gdns",
"strAdress": "216-02 137th Ave, Springfield Gdns",
"zip": "11413",
"boro": "Queens",
"lat": "40.676147",
"long": "-73.754929",
"num": "Call 311 for hours"
},
{
"name": "Gethsemane Soul Saving Station",
"strAdress": "145-41 228th St",
"zip": "11413",
"boro": "Queens",
"lat": "40.660835",
"long": "-73.752255",
"num": "Call 311 for hours"
},
{
"name": "Holy Temple Church, Inc.",
"strAdress": "136-25 Springfield Blvd",
"zip": "11413",
"boro": "Queens",
"lat": "40.677164",
"long": "-73.755192",
"num": "Call 311 for hours"
},
{
"name": "Linden SDA Church Community Services",
"strAdress": "228-20 137th Avenue",
"zip": "11413",
"boro": "Queens",
"lat": "40.672826999999998",
"long": "-73.743994000000001",
"num": "(718)527-4072"
},
{
"name": "One Way Church of Christ",
"strAdress": "216-11 Merrick Blvd",
"zip": "11413",
"boro": "Queens",
"lat": "40.697103",
"long": "-73.784112",
"num": "Call 311 for hours"
},
{
"name": "St. Luke Baptist Church Food Pantry",
"strAdress": "133-28 232nd Street",
"zip": "11413",
"boro": "Queens",
"lat": "40.675853",
"long": "-73.737768",
"num": "718-276-7066"
},
{
"name": "Taurus Associates Inc.",
"strAdress": "220-01 Merrick Blvd (Laurelton)",
"zip": "11413",
"boro": "Queens",
"lat": "40.679077",
"long": "-73.748828",
"num": "Call 311 for hours"
},
{
"name": "Our Lady of Grace Ministry",
"strAdress": "158-10 101St St.- Howard Beach",
"zip": "11414",
"boro": "Queens",
"lat": "40.661523",
"long": "-73.833112",
"num": "Call 311 for hours"
},
{
"name": "Project L.E.A.D.",
"strAdress": "84-17 Abingdon Rd",
"zip": "11415",
"boro": "Queens",
"lat": "40.706829",
"long": "-73.83088",
"num": "Call 311 for hours"
},
{
"name": "River Fund",
"strAdress": "8911 Lefferts Blvd",
"zip": "11418",
"boro": "Queens",
"lat": "40.697001",
"long": "-73.829083",
"num": "Call 311 for hours"
},
{
"name": "Calvary's Mission",
"strAdress": "102-16 89th Ave (Richmond Hill)",
"zip": "11418",
"boro": "Queens",
"lat": "40.693105",
"long": "-73.843413",
"num": "Call 311 for hours"
},
{
"name": "Elohim Community Development & Outreach Inc.",
"strAdress": "87-47 111th St, Richmond Hills",
"zip": "11418",
"boro": "Queens",
"lat": "40.695714",
"long": "-73.836611",
"num": "Call 311 for hours"
},
{
"name": "The River Fund",
"strAdress": "89-11 Lefferts Blvd",
"zip": "11418",
"boro": "Queens",
"lat": "40.697001",
"long": "-73.829083",
"num": "Call 311"
},
{
"name": "Deliverance Temple Church of Jesus Christ",
"strAdress": "134-10 Rockaway Blvd So. Ozone Park",
"zip": "11420",
"boro": "Queens",
"lat": "40.674332",
"long": "-73.804073",
"num": "Call 311 for hours"
},
{
"name": "Leviticus Church",
"strAdress": "114-12 Van Wyck Expressway",
"zip": "11420",
"boro": "Queens",
"lat": "40.682173",
"long": "-73.806303",
"num": "Call 311 for hours"
},
{
"name": "St. Teresa of Avila Community Services",
"strAdress": "129-04 109th Ave",
"zip": "11420",
"boro": "Queens",
"lat": "40.684241",
"long": "-73.813464",
"num": "Call 311 for hours"
},
{
"name": "All Nations Baptist Church of Woodhaven",
"strAdress": "86-76 80th St",
"zip": "11421",
"boro": "Queens",
"lat": "40.691542",
"long": "-73.861999",
"num": "Call 311 for hours"
},
{
"name": "II Second Chance Deliverance Church, Inc.",
"strAdress": "200-12 Hollis Avenue",
"zip": "11423",
"boro": "Queens",
"lat": "40.705886",
"long": "-73.757194999999996",
"num": "917-416-3697"
},
{
"name": "Beraca Seventh Day Adventist Church",
"strAdress": "91-19 191 St",
"zip": "11423",
"boro": "Queens",
"lat": "40.712107",
"long": "-73.768381",
"num": "Call 311 for hours"
},
{
"name": "Hollis Presbyterian Church",
"strAdress": "100-50 196th Street",
"zip": "11423",
"boro": "Queens",
"lat": "40.708058000000001",
"long": "-73.762737999999999",
"num": "(718) 776-4646"
},
{
"name": "Mount Sinai SDA Church",
"strAdress": "217-10 93rd Avenue Queens",
"zip": "11428",
"boro": "Queens",
"lat": "40.721036",
"long": "-73.739737",
"num": "(718) 465-1784"
},
{
"name": "Our Lady of Lourdes",
"strAdress": "92-96 220th St (Queens Village)",
"zip": "11428",
"boro": "Queens",
"lat": "40.722964",
"long": "-73.736435",
"num": "Call 311 for hours"
},
{
"name": "Hollis Avenue Congregational Church",
"strAdress": "211-04 Hollis Ave, Queens Village",
"zip": "11429",
"boro": "Queens",
"lat": "40.709262",
"long": "-73.74652",
"num": "Call 311 for hours"
},
{
"name": "Queensboro Temple SDA Church",
"strAdress": "96-50 222nd St",
"zip": "11429",
"boro": "Queens",
"lat": "40.718108",
"long": "-73.731974",
"num": "Call 311 for hours"
},
{
"name": "AIDS Center of Queens County",
"strAdress": "161-21 Jamaica Ave - 6th Floor",
"zip": "11432",
"boro": "Queens",
"lat": "40.704199",
"long": "-73.798025",
"num": "Call 311 for hours"
},
{
"name": "First Presbyterian Church of Jamaica",
"strAdress": "89-60 164th St",
"zip": "11432",
"boro": "Queens",
"lat": "40.705479",
"long": "-73.796366",
"num": "Call 311 for hours"
},
{
"name": "First Presbyterian Church of Jamaica",
"strAdress": "89-60 164th St",
"zip": "11432",
"boro": "Queens",
"lat": "40.705479",
"long": "-73.796366",
"num": "Call 311 for hours"
},
{
"name": "First United Methodist Church of Jamaica",
"strAdress": "162-10 Highland Ave",
"zip": "11432",
"boro": "Queens",
"lat": "40.709684",
"long": "-73.800237",
"num": "Call 311 for hours"
},
{
"name": "Jamaica Hispanic SDA Church",
"strAdress": "88-28 161 St",
"zip": "11432",
"boro": "Queens",
"lat": "40.707286",
"long": "-73.80095",
"num": "Call 311 for hours"
},
{
"name": "Jamaica Seventh Day Adventist Church",
"strAdress": "88-28 163 St",
"zip": "11432",
"boro": "Queens",
"lat": "40.652219",
"long": "-73.842298",
"num": "Call 311 for hours"
},
{
"name": "St. Nicholas of Tolentine Church- F.P.",
"strAdress": "150-75 Goethals Ave",
"zip": "11432",
"boro": "Queens",
"lat": "40.71893",
"long": "-73.809599",
"num": "Call 311 for hours"
},
{
"name": "Tabernacle of Prayer",
"strAdress": "90-07 Merrick Blvd",
"zip": "11432",
"boro": "Queens",
"lat": "40.706844",
"long": "-73.794328",
"num": "Call 311 for hours"
},
{
"name": "The Child Center of New York - Jamaica Ave",
"strAdress": "163-18 Jamaica Ave 4th Fl",
"zip": "11432",
"boro": "Queens",
"lat": "40.70459",
"long": "-73.796105",
"num": "718 657-7100 ext 219"
},
{
"name": "The Child Center Of NY - Jamaica Clinic",
"strAdress": "89-56 162nd Street, 2ND FL",
"zip": "11432",
"boro": "Queens",
"lat": "40.705072",
"long": "-73.798371",
"num": "Call 311 for hours"
},
{
"name": "The Salvation Army Jamaica Citadel Corps",
"strAdress": "90-23 161st St",
"zip": "11432",
"boro": "Queens",
"lat": "40.704925",
"long": "-73.798709",
"num": "Call 311 for hours"
},
{
"name": "The Salvation Army Jamaica Citadel Corps",
"strAdress": "90-23 161st St",
"zip": "11432",
"boro": "Queens",
"lat": "40.704925",
"long": "-73.798709",
"num": "Call 311 for hours"
},
{
"name": "Allen Outreach Minitry Feeding Program",
"strAdress": "111-54 Merrick Blvd",
"zip": "11433",
"boro": "Queens",
"lat": "40.694892",
"long": "-73.781333",
"num": "Call 311 for hours"
},
{
"name": "Allen Outreach Minitry Feeding Program",
"strAdress": "111-54 Merrick Blvd",
"zip": "11433",
"boro": "Queens",
"lat": "40.694892",
"long": "-73.781333",
"num": "Call 311 for hours"
},
{
"name": "Bethany Baptist Church of Jamaica",
"strAdress": "157-11 111th Ave",
"zip": "11433",
"boro": "Queens",
"lat": "40.690409",
"long": "-73.791682",
"num": "Call 311 for hours"
},
{
"name": "Bethany Baptist Church of Jamaica",
"strAdress": "157-11 111th Ave",
"zip": "11433",
"boro": "Queens",
"lat": "40.690409",
"long": "-73.791682",
"num": "Call 311 for hours"
},
{
"name": "Bethel Gospel Tabernacle Church",
"strAdress": "110-25 Guy R. Brewer Blvd",
"zip": "11433",
"boro": "Queens",
"lat": "40.692739",
"long": "-73.788107",
"num": "Call 311 for hours"
},
{
"name": "Bethel Gospel Tabernacle Church",
"strAdress": "110-25 Guy R. Brewer Blvd",
"zip": "11433",
"boro": "Queens",
"lat": "40.692739",
"long": "-73.788107",
"num": "Call 311 for hours"
},
{
"name": "Macedonia AME Church",
"strAdress": "106-16 Guy R. Brewer Blvd",
"zip": "11433",
"boro": "Queens",
"lat": "40.699318",
"long": "-73.793445",
"num": "7183535870"
},
{
"name": "Macedonia AME Church",
"strAdress": "106-16 Guy R. Brewer Blvd",
"zip": "11433",
"boro": "Queens",
"lat": "40.699318",
"long": "-73.793445",
"num": "7183535870"
},
{
"name": "The Harding Ford Vision, Inc .",
"strAdress": "157-22 South Road, Jamaica",
"zip": "11433",
"boro": "Queens",
"lat": "40.698145",
"long": "-73.797028",
"num": "718 291-9281"
},
{
"name": "The Harding Ford Vision, Inc .",
"strAdress": "157-22 South Road, Jamaica",
"zip": "11433",
"boro": "Queens",
"lat": "40.698145",
"long": "-73.797028",
"num": "718 291-9281"
},
{
"name": "V.E.T.S. Inc.",
"strAdress": "111-16 173rd St",
"zip": "11433",
"boro": "Queens",
"lat": "40.694756",
"long": "-73.779498",
"num": "Call 311 for hours"
},
{
"name": "VETS Inc. Locust Manor Senior Residence",
"strAdress": "170-06 Baisley Blvd Queens",
"zip": "11433",
"boro": "Queens",
"lat": "40.680927",
"long": "-73.773063",
"num": "646-261-1973"
},
{
"name": "Christ Church International Joseph's House",
"strAdress": "122-20 Merrill Street",
"zip": "11434",
"boro": "Queens",
"lat": "40.682734000000004",
"long": "-73.769859999999994",
"num": "718-276-2799"
},
{
"name": "Ministry Tools Inc.",
"strAdress": "170-20 140th Ave",
"zip": "11434",
"boro": "Queens",
"lat": "40.670814",
"long": "-73.769327",
"num": "Call 311 for hours"
},
{
"name": "National Sorority of Phi Delta Kappa",
"strAdress": "117-08 Merrick Blvd",
"zip": "11434",
"boro": "Queens",
"lat": "40.686581",
"long": "-73.774805",
"num": "Call 311 for hours"
},
{
"name": "Rush Temple A.M.E. Church",
"strAdress": "119-48 Sutphin Blvd",
"zip": "11434",
"boro": "Queens",
"lat": "40.677872",
"long": "-73.791632",
"num": "Call 311 for hours"
},
{
"name": "Rush Temple A.M.E. Zion Church",
"strAdress": "119-48 Sutphin Boulevard",
"zip": "11434",
"boro": "Queens",
"lat": "40.677872",
"long": "-73.791632",
"num": "Call 311 for hours"
},
{
"name": "Winner Chapel Inc.",
"strAdress": "153-56 Rockaway Blvd",
"zip": "11434",
"boro": "Queens",
"lat": "40.669078",
"long": "-73.78268",
"num": "Call 311 for hours"
},
{
"name": "Blanche Memorial Church",
"strAdress": "109-74 Sutphin Blvd",
"zip": "11435",
"boro": "Queens",
"lat": "40.690042",
"long": "-73.79721",
"num": "Call 311 for hours"
},
{
"name": "Christ Apostolic Church of America, Inc.",
"strAdress": "108-02 Sutphin Blvd",
"zip": "11435",
"boro": "Queens",
"lat": "40.692788",
"long": "-73.799538",
"num": "Call 311 for hours"
},
{
"name": "Jesus Is The Answer - J.I.T.A. Community Outreach",
"strAdress": "89-17 139th Street",
"zip": "11435",
"boro": "Queens",
"lat": "40.702179000000001",
"long": "-73.812646999999998",
"num": "(718)908-6303"
},
{
"name": "Holy Ghost Upper Room Filling Station Ministry, Inc.",
"strAdress": "146-17 133rd Ave",
"zip": "11436",
"boro": "Queens",
"lat": "40.668864",
"long": "-73.791982",
"num": "Call 311 for hours"
},
{
"name": "Morris Brown Helping Hand Food Program",
"strAdress": "145-03 Rockaway Blvd (So. Ozone Park)",
"zip": "11436",
"boro": "Queens",
"lat": "40.683932",
"long": "-73.857421",
"num": "Call 311 for hours"
},
{
"name": "Morris Brown Helping Hand Food Program",
"strAdress": "145-03 Rockaway Blvd (So. Ozone Park)",
"zip": "11436",
"boro": "Queens",
"lat": "40.683932",
"long": "-73.857421",
"num": "(718)322-7596"
},
{
"name": "St. Clement Pope Roman Catholic Church",
"strAdress": "141-11 123rd Ave (So. Ozone Park)",
"zip": "11436",
"boro": "Queens",
"lat": "40.674991",
"long": "-73.799267",
"num": "Call 311 for hours"
},
{
"name": "AIDS Center of Queens County (ACQC)",
"strAdress": "1139 Foam Place (FAR ROCKAWAY)",
"zip": "11691",
"boro": "Queens",
"lat": "40.604949",
"long": "-73.751417",
"num": "Call 311 for hours"
},
{
"name": "First Church of God",
"strAdress": "21-23 Birdsall Ave",
"zip": "11691",
"boro": "Queens",
"lat": "40.606903",
"long": "-73.754002",
"num": "Call 311 for hours"
},
{
"name": "First Presbyterian Russell Sage Memorial Church of Far Rockaway",
"strAdress": "896 Central Ave (Far Rockaway)",
"zip": "11691",
"boro": "Queens",
"lat": "40.609167",
"long": "-73.74675",
"num": "Call 311 for hours"
},
{
"name": "J.U.S.T.I.C.E. Organization/Jesus is Justice Mission Inc.",
"strAdress": "219 Beach 28th St",
"zip": "11691",
"boro": "Queens",
"lat": "40.595762",
"long": "-73.761197",
"num": "Call 311 for hours"
},
{
"name": "Jewish Community Council of Far Rockaway Peninsula",
"strAdress": "1525 Central Avenue, Far Rockaway",
"zip": "11691",
"boro": "Queens",
"lat": "40.605211",
"long": "-73.751506",
"num": "212-453-9532 Appointments Recommended"
},
{
"name": "Jewish Services Coalition",
"strAdress": "1525 Central Ave",
"zip": "11691",
"boro": "Queens",
"lat": "40.605211",
"long": "-73.751506",
"num": "Call 311 for hours"
},
{
"name": "Solid Rock SDA Church",
"strAdress": "5205 Rockaway Beach Blvd",
"zip": "11691",
"boro": "Queens",
"lat": "40.592621",
"long": "-73.782687",
"num": "Call 311 for hours"
},
{
"name": "St. Mary's Star of the Sea",
"strAdress": "19-20 New Haven Ave",
"zip": "11691",
"boro": "Queens",
"lat": "40.600749",
"long": "-73.752735",
"num": "Call 311 for hours"
},
{
"name": "United Methodist Center in Far Rockaway",
"strAdress": "1032 Beach 19th St (Near Mott Ave)",
"zip": "11691",
"boro": "Queens",
"lat": "40.606222",
"long": "-73.759778",
"num": "Call 311 for hours"
},
{
"name": "United Methodist Center in Far Rockaway",
"strAdress": "1032 Beach 19th St (Near Mott Ave)",
"zip": "11691",
"boro": "Queens",
"lat": "40.606222",
"long": "-73.759778",
"num": "Call 311 for hours"
},
{
"name": "Bethel Ame Church/Bethel Arverne Comm.",
"strAdress": "215 Beach 77th St",
"zip": "11692",
"boro": "Queens",
"lat": "40.5888",
"long": "-73.804656",
"num": "Call 311 for hours"
},
{
"name": "Community Health Action Of Staten Island",
"strAdress": "23 Hyatt St",
"zip": "10301",
"boro": "Staten Island",
"lat": "40.641983",
"long": "-74.077277",
"num": "718 808-1800"
},
{
"name": "Department of Probation Staten Island Office",
"strAdress": "340 Bay Street Staten Island",
"zip": "10301",
"boro": "Staten Island",
"lat": "40.633978",
"long": "-74.075445",
"num": "Call 311 for hours"
},
{
"name": "Community Health Action of Staten Island",
"strAdress": "2134 Richmond Terrace",
"zip": "10302",
"boro": "Staten Island",
"lat": "40.640076",
"long": "-74.134315",
"num": "Call 311 for hours"
},
{
"name": "Council of Jewish Organizations Staten Island",
"strAdress": "984 Post Ave",
"zip": "10302",
"boro": "Staten Island",
"lat": "40.632281",
"long": "-74.133601",
"num": "Call 311 for hours"
},
{
"name": "Community Food Pantry CHASI",
"strAdress": "2134 Richmond Terrace",
"zip": "10302",
"boro": "Staten Island",
"lat": "40.640076",
"long": "-74.134315",
"num": "718 808-1840"
},
{
"name": "Project Hospitality EL CENTRO",
"strAdress": "1546 Castleton AvenueÊ",
"zip": "10302",
"boro": "Staten Island",
"lat": "40.635794",
"long": "-74.134346",
"num": "347 254-5556 718 448-3470"
},
{
"name": "Rescue Ministry/Ministerio Rescate, Inc.",
"strAdress": "2083 Richmond Terrace",
"zip": "10302",
"boro": "Staten Island",
"lat": "40.640422",
"long": "-74.132648",
"num": "Call 311 for hours"
},
{
"name": "Richmond Senior Services/Food Mart",
"strAdress": "729 DELAFIELD AVE",
"zip": "10310",
"boro": "Staten Island",
"lat": "40.629524000000004",
"long": "-74.122900999999999",
"num": "718-816-1811"
},
{
"name": "Staten Island SDA Church",
"strAdress": "80 Union Ave",
"zip": "10303",
"boro": "Staten Island",
"lat": "40.634765",
"long": "-74.158362",
"num": "Call 311 for hours"
},
{
"name": "Feeding With TLC Inc.",
"strAdress": "309 St. Pauls Avenue",
"zip": "10304",
"boro": "Staten Island",
"lat": "40.630237999999999",
"long": "-74.081142999999997",
"num": "(718)4470526"
},
{
"name": "Feeding With TLC Inc.",
"strAdress": "309 St. Pauls Avenue",
"zip": "10304",
"boro": "Staten Island",
"lat": "40.630237999999999",
"long": "-74.081142999999997",
"num": "(718)4470526"
},
{
"name": "Our Lady of Good Counsel Church (Staten Island)",
"strAdress": "42 Austin Place",
"zip": "10304",
"boro": "Staten Island",
"lat": "40.631191",
"long": "-74.086211",
"num": "Call 311 for hours"
},
{
"name": "Project Hospitality, Inc.",
"strAdress": "514 Bay St",
"zip": "10304",
"boro": "Staten Island",
"lat": "40.629399",
"long": "-74.076908",
"num": "Call 311"
},
{
"name": "Project Hospitality, Inc.",
"strAdress": "514 Bay St",
"zip": "10304",
"boro": "Staten Island",
"lat": "40.629399",
"long": "-74.076908",
"num": "Call 311"
},
{
"name": "Project Hospitality",
"strAdress": "514 Bay Street",
"zip": "10304",
"boro": "Staten Island",
"lat": "40.629399",
"long": "-74.076908",
"num": "718 273-6737"
},
{
"name": "Christian Pentecostal Church",
"strAdress": "900 Richmond Rd",
"zip": "10304",
"boro": "Staten Island",
"lat": "40.604834",
"long": "-74.091849",
"num": "Call 311 for hours"
},
{
"name": "Stapleton U.A.M.E. Church",
"strAdress": "49 Tompkins Ave",
"zip": "10304",
"boro": "Staten Island",
"lat": "40.623399",
"long": "-74.078635",
"num": "Call 311 for hours"
},
{
"name": "Stapleton U.A.M.E. Church",
"strAdress": "49 Tompkins Ave",
"zip": "10304",
"boro": "Staten Island",
"lat": "40.623399",
"long": "-74.078635",
"num": "Call 311 for hours"
},
{
"name": "The Salvation Army Stapleton Corps",
"strAdress": "15 Broad St",
"zip": "10304",
"boro": "Staten Island",
"lat": "40.625772",
"long": "-74.075757",
"num": "Call 311 for hours"
},
{
"name": "The Salvation Army Stapleton Corps",
"strAdress": "15 Broad St",
"zip": "10304",
"boro": "Staten Island",
"lat": "40.625772",
"long": "-74.075757",
"num": "Call 311 for hours"
},
{
"name": "United Church Of Praise International Ministries, Inc,",
"strAdress": "32 Sands Street Staten Island",
"zip": "10304",
"boro": "Staten Island",
"lat": "40.629138",
"long": "-74.076012",
"num": "718-314-8779"
},
{
"name": "Mesivtha of Staten Island",
"strAdress": "1870 Drumgoole Road East",
"zip": "10309",
"boro": "Staten Island",
"lat": "40.527552",
"long": "-74.214375000000004",
"num": "718-356-5412"
},
{
"name": "St. Edward Food Pantry",
"strAdress": "6581 Hylan Blvd",
"zip": "10309",
"boro": "Staten Island",
"lat": "40.510309",
"long": "-74.219768",
"num": "Call 311 for hours"
}
]

module.exports = markers;