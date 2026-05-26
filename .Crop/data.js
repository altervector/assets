// js/data.js
// Estructura: Categoria (Ver, Px, Pre, Alt) -> Subcategoria (Bol, Brq, Cax) -> Articles Detallats
const dadesWeb = {
    
    // ====================================================================
    // CATEGORIA: VERDURES I FRUITES DEL BOSC (Clau: ver)
    // ====================================================================
    ver: { 
        titol: "Verdures i Fruites del Bosc",
        descripcio: "Verdures trossejades, bolets i preparats.",
        subcategories: [
            // Subcategoria: Bolets (Clau: Bol)
            { 
                id: 1001, nom: "Bolets", imatge: "bolets.jpg", clau: "Bol",
                descripcio_breu: "Bolets barrejats amb ceps i trompetes, trossejats.",
                articles_detall: [
                  
                    { id: 101, ref: "1230", nom: "BOLETS BARREJATS + CEPS EXTRA 20% tohersa", caixa: "6x1", preu: 5.87 },
                    { id: 102, ref: "1226", nom: "BOLETS BARREJATS + CEPS STÀNDARD 20%", caixa: "3x2", preu: 4.37 },
                    { id: 105, ref: "1234", nom: "BOLETUS TROSSEJATS STÀNDARD (CEPS)", caixa: "3x2", preu: 10.47 },
                    { id: 104, ref: "1232", nom: "BOLETUS TROSSEJATS EXTRA (CEPS)", caixa: "3x2", preu: 12.67 },
                    { id: 103, ref: "1243", nom: "BOLETS TROMPETA NEGRA", caixa: "1x2", preu: 12.9 }
                ]
            }, 
            
            // Subcategoria: Carxofa (Clau: Cax)
            { 
                id: 1004, nom: "Carxofa", imatge: "carxofa.jpg", clau: "Cax",
                descripcio_breu: "Carxofa trossejada o cors minis, natural.",
                articles_detall: [
                    { id: 108, ref: "1162", nom: "CARXOFA TROSSEJADA NATURAL", caixa: "4X2'5", preu: 6.2 },
                    { id: 109, ref: "1160", nom: "CARXOFA COR MINI NATURAL", caixa: "5x1", preu: 8.83 },
                    { id: 110, ref: "1165", nom: "CARXOFA MITJOS CORS NATURAL", caixa: "5x1", preu: 6.9 }
                ]
            },
            
            // Subcategoria: Mongeta (Clau: Mng)
            { 
                id: 1014, nom: "Mongeta", imatge: "mongeta.jpg", clau: "Mng",
                descripcio_breu: "Mongeta extrafina, plana o rodona.",
                articles_detall: [
                    { id: 124, ref: "1114", nom: "MONGETA EXTRAFINA 6,5-7,5 mm", caixa: "4X2'5", preu: 2.14 },
                    { id: 125, ref: "1112", nom: "MONGETA PLANA TALLADA JV", caixa: "4X2'5", preu: 1.99 },
                    { id: 126, ref: "1113", nom: "MONGETA RODONA TALLADA JV", caixa: "4X2'5", preu: 1.99 }
                ]
            },
            
            // Subcategoria: Faves (Clau: Fvs)
            { 
                id: 1010, nom: "Faves i pèsols", imatge: "faves.jpg", clau: "Fvs",
                descripcio_breu: "Baby i Superbaby de primera qualitat.",
                articles_detall: [
                    { id: 118, ref: "1131", nom: "FAVES BABY 1a qualitat", caixa: "5x2", preu: 3.96 },
                    { id: 119, ref: "1130", nom: "FAVES SUPERBABY 1a qualtitat", caixa: "10x1", preu: 9.77 },
                    { id: 120, ref: "1122", nom: "PÈSOL EXTRAFI A", caixa: "5x2", preu: 2.14 },
                    { id: 121, ref: "1121", nom: "PÈSOL NÒRDIC AA", caixa: "10x1", preu: 2.84 }
                ]
            },
            
            // Subcategoria: Espàrrec (Clau: Esp)
            { 
                id: 1008, nom: "Espàrrec, all tendre", imatge: "esparrec.jpg", clau: "Esp",
                descripcio_breu: "Espàrrec verd en selecció gruixuda o mitjana.",
                articles_detall: [
                    { id: 107, ref: "1187", nom: "ALL TENDRE (extraodinari per saltejar)", caixa: "5x1", preu: 5.18 },
                    { id: 115, ref: "1195", nom: "ESPÀRREC VERD SELECCIÓ MITJÀ 10/16 mm", caixa: "5x1", preu: 6.65 },
                    { id: 116, ref: "1149", nom: "ESPÀRREC VERD SELECCIÓ GRUIXUT 16/22", caixa: "5x1", preu: 6.65 }
                ]
            },
            
            // Subcategoria: Ceba (Clau: Ceb)
            { 
                id: 1005, nom: "Ceba", imatge: "ceba.jpg", clau: "Ceb",
                descripcio_breu: "Ceba picada o cebetes perla, preparades.",
                articles_detall: [
                    { id: 111, ref: "1182", nom: "CEBA PICADA 6*6 mm JV", caixa: "10x1", preu: 2.18 },
                    { id: 112, ref: "1181", nom: "CEBETES PERLA MINI", caixa: "4X2'5", preu: 2.9 }
                ]
            },
            
            // Subcategoria: Coliflor (Clau: Clf)
            { 
                id: 1006, nom: "Coliflor", imatge: "coliflor.jpg", clau: "Clf",
                descripcio_breu: "Coliflor trossejada, grau A.",
                articles_detall: [
                    { id: 106, ref: "1190", nom: "BRÒQUIL 40/60 GRAU (A) JV", caixa: "10x1", preu: 2.28 },
                    { id: 113, ref: "1193", nom: "COLIFLOR 40/60 GRAU (A) JV", caixa: "5x1", preu: 2.19 }
                ]
            },
            
            // Subcategoria: Ensaladilla Russa (Clau: Rss)
            { 
                id: 1007, nom: "Ensaladilla Russa", imatge: "rusa.jpg", clau: "Rss",
                descripcio_breu: "Ensaladilla russa clàssica preparada.",
                articles_detall: [
                    { id: 114, ref: "1202", nom: "ENSALADILLA RUSSA CLASSICA JV", caixa: "4X2'5", preu: 1.51 }
                ]
            },
            
            // Subcategoria: Espinac (Clau: Epi)
            { 
                id: 1009, nom: "Espinac", imatge: "espinac.png", clau: "Epi",
                descripcio_breu: "Espinac en fulles, preparat.",
                articles_detall: [
                    { id: 117, ref: "1196", nom: "ESPINAC MILFULLES BONDUELLE", caixa: "4X2'5", preu: 2.14 }
                ]
            },
            
            // Subcategoria: Pastanaga (Clau: Ptg)
            { 
                id: 1012, nom: "Pastanaga", imatge: "pastanaga.jpg", clau: "Ptg",
                descripcio_breu: "Pastanaga baby mini.",
                articles_detall: [
                    { id: 122, ref: "1151", nom: "PASTANAGA BABY MINI 6/14 JV", caixa: "4X2'5", preu: 1.93 }
                ]
            },
            
            // Subcategoria: Samfaina / Saltat (Clau: Sfn)
            { 
                id: 1015, nom: "Saltat Camperol, Samfaina", imatge: "campero.png", clau: "Sfn",
                descripcio_breu: "Samfaina, saltat camperol i campestre.",
                articles_detall: [
                    { id: 127, ref: "1918", nom: "SAMFAINA (PISTO) FINDUS", caixa: "6x1", preu: 3.45 },
                    { id: 128, ref: "1228", nom: "SALTAT CAMPERO FINDUS", caixa: "6x1", preu: 2.88 },
                    { id: 129, ref: "1224", nom: "SALTAT CAMPESTRE BONDUELLE", caixa: "4X2'5", preu: 4.25 },
                    { id: 123, ref: "1926", nom: "PARRILLADA VERDURES I PATATA", caixa: "4X2'5", preu: 2.95 }
                ]
            },
            
            // Subcategoria: Moniato i Patata (Clau: Pat)
            { 
                id: 1017, nom: "Moniato i Patata ", imatge: "patata.jpg", clau: "Pat",
                descripcio_breu: "Moniato, patates DIPPERS, DOLAR i GAJO.",
                articles_detall: [
                    { id: 131, ref: "2347", nom: "MONIATO PREFREGIT 10*10 PATATA DOLÇA", caixa: "4x2", preu: 4.9 },
                    { id: 132, ref: "2334", nom: "PATATES PRIVATE RESERVE 6*6 mm", caixa: "4X2'5", preu: 2.78 },
                    { id: 133, ref: "2336", nom: "PATATES DIPPERS", caixa: "4X2'5", preu: 2.74 },
                    { id: 134, ref: "2330", nom: "PATATES DOLAR SELECCIÓ LUTOSA", caixa: "4X2'5", preu: 2.95 },
                    { id: 135, ref: "2332", nom: "PATATES GAJO ESPECIADA", caixa: "4x2,5", preu: 2.8 }
                ]
            },
            
             // Subcategoria: Pebrot (Clau: Peb)
            { 
                id: 1018, nom: "Pebrot de Piquillo", imatge: "pebrot.jpg", clau: "Peb",
                descripcio_breu: "Pebrot del Piquillo farcit de bacallà.",
                articles_detall: [
                    { id: 136, ref: "2452", nom: "PEBROT DEL PIQUILLO FARCIT de BACALLÀ", caixa: "1x4", preu: 8.27 }
                ]
            },
            
            // Subcategoria: Fruites del Bosc (Clau: Frt)
            { 
                id: 1016, nom: "Fruites del Bosc", imatge: "fruitsbosc.jpg", clau: "Frt",
                descripcio_breu: "Barreja de 6 varietats de fruites del bosc naturals.",
                articles_detall: [
                    { id: 130, ref: "1803", nom: "FRUITES DEL BOSC - 6 VARIETATS(NATURAL)", caixa: "4X2'5", preu: 4.79 }
                ]
            }// ATENCIÓ: NO HI HA COMA AQUÍ JA QUE ÉS L'ÚLTIMA SUBCATEGORIA DE 'ver'
            
            
            
            // Subcategoria: Bròquil (Clau: Brq)
            /*{ 
                id: 1002, nom: "Bròquil (Brq)", imatge: "broquil.jpg", clau: "Brq",
                descripcio_breu: "Bròquil tallat i preparat.",
                articles_detall: [
                    
                ]
            },*/
            
            
            // Subcategoria: All Tendre (Clau: All)
            /*{ 
                id: 1003, nom: "All Tendre (All)", imatge: "alltendre.jpg", clau: "All",
                descripcio_breu: "All tendre seleccionat, ideal per saltejar.",
                articles_detall: [
                    
                ]
            },*/
            
            
            // Subcategoria: Pèsol (Clau: Pes)
            /*{ 
                id: 1011, nom: "Pèsol (Pes)", imatge: "pesol.jpg", clau: "Pes",
                descripcio_breu: "Pèsol extrafi i nòrdic.",
                articles_detall: [
                    
                ]
            },*/
          
          
            // Subcategoria: Parrillada (Clau: Prr)
            /*{ 
                id: 1013, nom: "Parrillada (Prr)", imatge: "parrillada.jpg", clau: "Prr",
                descripcio_breu: "Parrillada de verdures i patata.",
                articles_detall: [
                    
                ]
            },*/
            
            
            
            
        ] // Tanca array subcategories
    }, // Tanca CATEGORIA 'ver'
    
    // ====================================================================
    // CATEGORIA: PRECUINATS (Clau: pre)
    // ====================================================================
    pre: {
        titol: "Precuinats i Preparats",
        descripcio: "Plats preparats, croquetes i fritures amb la màxima qualitat.",
        subcategories: [
          
            // Subcategoria: Bunyol (Clau: Bny)
            { 
                id: 2001, nom: "Bunyol", imatge: "bunyol.jpg", clau: "Bny",
                descripcio_breu: "Bunyol de bacallà extra.",
                articles_detall: [
                    { id: 201, ref: "2415", nom: "BUNYOL BACALLÀ EXTRA PRIELÁ", caixa: "4x0,5", preu: 10.2 }
                ]
            },
            
            // Subcategoria: Canelons (Clau: Can)
            { 
                id: 2002, nom: "Canelons", imatge: "canelo.jpg", clau: "Can",
                descripcio_breu: "Canelons de carn del Mesón o extra, i canelons de bolets.",
                articles_detall: [
                    { id: 202, ref: "5235", nom: "CANELONS CARN del MESON 50 gr", caixa: "80u", preu: 0.55 },
                    { id: 203, ref: "5229", nom: "CANELONS CARN EXTRA 45gr (20% vedella)", caixa: "unitat", preu: 0.38 },
                    { id: 204, ref: "5241", nom: "CANELONS BOLETS 45gr (5 varietats / 45%)", caixa: "120u", preu: 0.47 }
                ]
            },
            
            // Subcategoria: Croquetes (Clau: Crq)
            { 
                id: 2003, nom: "Croquetes", imatge: "Croquetas.png", clau: "Crq",
                descripcio_breu: "Croquetes del Mesón Prielá.",
                articles_detall: [
                    { id: 205, ref: "2126", nom: "CROQUETES MESÓN PRIELÁ", caixa: "2", preu: 7.98 }
                ]
            },
            
            // Subcategoria: Gyoza (Clau: Gyz)
            { 
                id: 2004, nom: "Gyoza", imatge: "gyoza.jpg", clau: "Gyz",
                descripcio_breu: "Gyoza de pollastre i verdures.",
                articles_detall: [
                    { id: 206, ref: "2260", nom: "GYOZA POLLASTRE I VERDURES 600 gr", caixa: "600gr", preu: 12.84 }
                ]
            },
            
            // Subcategoria: Arrebossats (Clau: ARR)
            { 
                id: 2008, nom: "Arrebossats", clau: "Arr", imatge: "romana.jpg",
                descripcio_breu: "Productes arrebossats.",
                articles_detall: [
                    { id: 301, ref: "2235", nom: "CALAMAR TIRES ARREBOSSADES (RABES)", caixa: "4x1", preu: 8.97 },
                    { id: 302, ref: "2239", nom: "CALAMARTROÇOS ENFARINATS(SEVILLANO)", caixa: "3x1", preu: 10.95 },
                    { id: 303, ref: "2233", nom: "CALAMAR ROMANA CLASSIC", caixa: "4x1", preu: 10.45 }
                ]
            },
            
            // Subcategoria: Tires de Pollastre (Clau: Trs)
            { 
                id: 2005, nom: "Tires de Pollastre", clau: "Tires", imatge: "tires.jpg",
                descripcio_breu: "Tires de pit de pollastre 'Cajún' o 'Frites'.",
                articles_detall: [
                    { id: 207, ref: "2553", nom: "\"CAJÚN\" TIRES DE POLLASTRE", caixa: "4x1", preu: 9.85 },
                    { id: 208, ref: "2556", nom: "\"FRITES\" TIRES DE PIT DE POLLASTRE", caixa: "3x1", preu: 10.85 }
                ]
            },
            
            // Subcategoria: Nuggets (Clau: Ngg)
            { 
                id: 2006, nom: "Nuggets de Pollastre", clau: "Ngg", imatge: "nuggets.jpg",
                descripcio_breu: "Nuggets de pollastre clàssics.",
                articles_detall: [
                    { id: 209, ref: "2540", nom: "NUGGETS DE POLLASTRE", caixa: "3x1", preu: 7.65 }
                ]
            }
        ]
    }, // Tanca CATEGORIA 'pre'
    
    // ====================================================================
    // CATEGORIA: PEIX I MARISC (Clau: px)
    // ====================================================================
    px: {
        titol: "Peix i Marisc",
        descripcio: "Totes les varietats de peix, marisc i cefalòpodes.",
        subcategories: [
          
            // Subcategoria: Sípia i Rejos (Clau: Sip)
            { 
                id: 3007, nom: "Sípia", imatge: "sipia.png", clau: "Sip",
                descripcio_breu: "Sípia neta o bruta.",
                articles_detall: [
                   
                    { id: 353, ref: "3132", nom: "SIPIA NETA 1-2 20% GL", caixa: "1x5", preu: 8.75 },
                    { id: 354, ref: "3412", nom: "SIPIA NETA 5-7 20%", caixa: "1x5", preu: 8.95 },
                    { id: 355, ref: "3411", nom: "SIPIA NETA 8-12 20%", caixa: "1x5", preu: 8.25 },
                    { id: 356, ref: "3410", nom: "SIPIA NETA 13-20 20% GL", caixa: "1x6", preu: 7.65 },
                    { id: 359, ref: "3415", nom: "SIPIA NETA M 200/300 gr", caixa: "1x7", preu: 11.72 },
                    { id: 360, ref: "3413", nom: "SIPIA NETA G 300/400 gr", caixa: "1x7", preu: 11.72 },
                    { id: 358, ref: "3422", nom: "SIPIA BRUTA M (200-300g)", caixa: "unitat", preu: 9.84 },
                    { id: 357, ref: "3419", nom: "SIPIA BRUTA MONGO 6 (0,9-1,1k)", caixa: "unitat", preu: 8.95 },
                    
                    { id: 352, ref: "3119", nom: "REJOS POTA ILLEX PREMIUM IQF 25% GL", caixa: "5x1", preu: 8.95 }
                ]
            },
            
            // Subcategoria: Calamar (Clau: Cal)
            { 
                id: 3001, nom: "Calamar", imatge: "calamar.jpg", clau: "Cal",
                descripcio_breu: "Calamar anelles i tubs.",
                articles_detall: [
                  
                    { id: 307, ref: "3110", nom: "CALAMAR PATAGÒNIC 4 EXTRA (10/12)", caixa: "1x5", preu: 6.56 },
                    { id: 308, ref: "3128", nom: "CALAMAR PATAGÒNIC 4L EXTRA (12/14)", caixa: "1x5", preu: 11.62 },
                    { id: 309, ref: "3169", nom: "CALAMAR PATAGÒNIC 4L SUPER TOUZA", caixa: "1x6", preu: 11.82 },
                    { id: 310, ref: "5114", nom: "CALAMAR PATAGÒNIC 4 NET / AMB PELL T&T", caixa: "8", preu: 10.30 },
                    { id: 313, ref: "3115", nom: "CALAMAR TUB *M* ILLEX 0% GL EXTRA", caixa: "1x8", preu: 10.57 },
                    { id: 306, ref: "3109", nom: "CALAMAR NET 10/20 I.Q.F.", caixa: "10x1", preu: 7.8 },
                    { id: 315, ref: "3118", nom: "CALAMAR TROSSEJAT PREMIUM 20%", caixa: "6x1", preu: 6.15 },
                    { id: 314, ref: "3418", nom: "CALAMAR TIRES FINES IQF", caixa: "5x1", preu: 6.30 },
                    { id: 312, ref: "3123", nom: "CALAMAR XIPIRONET A 4/6 SENSE PLOMA", caixa: "6x1", preu: 6.6 },
                    { id: 311, ref: "3111", nom: "CALAMAR 2P A BORD 16/20", caixa: "1x6", preu: 13.6 },
                    { id: 304, ref: "3110", nom: "CALAMAR ANELLES ILLEX 20% GL", caixa: "5x1", preu: 9.25 },
                    { id: 305, ref: "3136", nom: "CALAMAR ANELLES PACIFIC 30% GL", caixa: "5x1", preu: 6.3 },
                ]
            },
            
            // Subcategoria: Pop (Clau: Pop)
            { 
                id: 3005, nom: "Pop i Popets", imatge: "pop.jpg", clau: "Pop",
                descripcio_breu: "Pop sencer, pota cuita i popets.",
                articles_detall: [
                  
                    { id: 341, ref: "3560", nom: "POP T2 (3-4 kg)", caixa: "1x4", preu: 19.95 },
                    { id: 342, ref: "3563", nom: "POP T3 (2-3 kg)", caixa: "1x3", preu: 19.85 },
                    { id: 343, ref: "3567", nom: "POP POTA CUITA M 150gr", caixa: "1x3", preu: 35.98 },
                    { id: 344, ref: "3568", nom: "POP POTA CUITA G 200gr", caixa: "1x3", preu: 36.98 },
                    { id: 345, ref: "3565", nom: "POP POTA CUITA GG 200/250gr", caixa: "unitat", preu: 36.98 },
                    { id: 346, ref: "3540", nom: "POPETS 40/60", caixa: "1x6", preu: 6.55 }
                ]
            },
            
            // Subcategoria: Bacallà (Clau: Bac)
            { 
                id: 3002, nom: "Bacallà", imatge: "bacalla.jpg", clau: "Bac",
                descripcio_breu: "Esqueixat, filets i lloms de bacallà.",
                articles_detall: [
                  
                    { id: 316, ref: "5133", nom: "BACALLÀ ESQUEIXAT ICELANDIC 500 gr", caixa: "500", preu: 5.64 },
                    { id: 317, ref: "3070", nom: "BACALLÀ FILET 100/300", caixa: "1x5", preu: 8.96 },
                    { id: 321, ref: "3880", nom: "BACALLÀ LLOM SELECTE 200/300", caixa: "1x2", preu: 19.40 },
                    { id: 322, ref: "3881", nom: "BACALLÀ LLOM SELECTE 300+", caixa: "1x2", preu: 20.90 },
                    { id: 320, ref: "3888", nom: "BACALLÀ LLOM JUMBO 700+", caixa: "1x5", preu: 17.68 },
                    { id: 318, ref: "3877", nom: "BACALLÀ FILET 500/1000", caixa: "1x11", preu: 10.55 },
                    { id: 319, ref: "3890", nom: "BACALLÀ FILET 1000+", caixa: "1x11", preu: 11.75 }
                ]
            },
            
            // Subcategoria: Rap (Clau: Rap)
            { 
                id: 3006, nom: "Rap", imatge: "rap.jpg", clau: "Rap",
                descripcio_breu: "Rap en daus, menu extra i cues.",
                articles_detall: [
                  
                    { id: 347, ref: "3603", nom: "RAP CAP EN DAUS", caixa: "1x7", preu: 2.58 },
                    { id: 348, ref: "3600", nom: "RAP MENU EXTRA 200/300", caixa: "6x1", preu: 4.17 },
                    { id: 349, ref: "3604", nom: "RAP CUA A BORD s/pell M 260/350", caixa: "unitat", preu: 14.95 },
                    { id: 350, ref: "3605", nom: "RAP CUA A BORD s/pell XL 1300+ gr", caixa: "unitat", preu: 19.95 },
                    { id: 351, ref: "3609", nom: "RAP RODANXES G", caixa: "1x6", preu: 19.95 }
                ]
            },
            
            // Subcategoria: Peix Blanc (Clau: llc)
            { 
                id: 3012, nom: "Lluç", imatge: "lluç.jpg", clau: "llc",
                descripcio_breu: "Lluç sencer, rodanxes i filets.",
                articles_detall: [
                    
                    { id: 327, ref: "3030", nom: "LLUÇ FILET 115/170 gr", caixa: "1x5", preu: 7.52 },
                    { id: 328, ref: "3232", nom: "LLUÇ LLOM 80/130 gr A/P NOS 0% GL", caixa: "1x5", preu: 10.95 },
                    { id: 329, ref: "3202", nom: "LLUÇ SENCER AUSTRAL IWP Nº4-L", caixa: "unitat", preu: 8.96 },
                    { id: 330, ref: "3205", nom: "LLUÇ RODANXES AUSTRAL 100/200", caixa: "unitat", preu: 9.26 }
                ]
            },
            
            // Subcategoria: Peix Filet (Clau: Fil)
            { 
                id: 3004, nom: "Filets de Peix", imatge: "filets.jpg", clau: "Fil",
                descripcio_breu: "Filets de gall, gallineta, fogonero, llobarro i orada.",
                articles_detall: [
                  
                    { id: 336, ref: "3057", nom: "FILET DE GALL ST.PERE 200/300", caixa: "5x1", preu: 10.25 },
                    { id: 337, ref: "3058", nom: "FILET DE GALLINETA 130/200", caixa: "1x5", preu: 8.9 },
                    { id: 338, ref: "3199", nom: "FILET DE FOGONERO 500/1000", caixa: "1x5", preu: 6.2 },
                    { id: 339, ref: "3064", nom: "FILET DE LLOBARRO 120/160", caixa: "1x5", preu: 15.9 },
                    { id: 340, ref: "3065", nom: "FILET D'ORADA 120/160", caixa: "1x5", preu: 13.9 }
                ]
            },
            
            // Subcategoria: Peix Blanc (Clau: Cll)
            { 
                id: 3003, nom: "Peix Blanc i Blau.", imatge: "salmo.jpg", clau: "Czn",
                descripcio_breu: "Llenguado, Salmó, Caella...",
                articles_detall: [
                  
                    { id: 325, ref: "3301", nom: "LLENGUADO S/PELL 200/300gr 20% GL", caixa: "1x5", preu: 6.20 },
                    { id: 326, ref: "3320", nom: "LLENGUADO S/PELL 300/400gr 20%", caixa: "unitat", preu: 7.10 },
                    { id: 333, ref: "3921", nom: "SALMÓ SALVATGE SUPREMA MENU 150/200", caixa: "1x5", preu: 6.65 },
                    { id: 334, ref: "5922", nom: "SALMÓ LLOMS SENSE PELL 2*125 gr", caixa: "unitat", preu: 4.84 },
                    { id: 335, ref: "3101", nom: "TONYINA LLOM 100% NET", caixa: "unitat", preu: 10.44 },
                    { id: 323, ref: "3102", nom: "CAELLA-TINTORERA LLOMS", caixa: "unitat", preu: 4.8 },
                    { id: 324, ref: "3909", nom: "CAÇO SENCER 4-5 KG", caixa: "1x4", preu: 9.20 },
                    { id: 332, ref: "5925", nom: "PEIX PLATÍ CHANQUETE 5/7 250g", caixa: "unitat", preu: 2.60 },
                    { id: 331, ref: "3901", nom: "MORRALLA PER FUMET", caixa: "1x2", preu: 6.60 }
                ]
            },
            
            // Subcategoria: Mol·luscs (Clau: Msc)
            { 
                id: 3009, nom: "Mol·luscs", imatge: "musclo.jpg", clau: "Msc",
                descripcio_breu: "Cloïsses, musclos, navalles, rossellones, tellines i vieira.",
                articles_detall: [
                  
                    { id: 364, ref: "4024", nom: "CLOÏSSES MARRO 60/80 BOSSA GRANEL", caixa: "6x1", preu: 3.15 },
                    { id: 365, ref: "4031", nom: "MUSCLO GALLEC JUGOSONES M", caixa: "10x1", preu: 5.65 },
                    { id: 366, ref: "4030", nom: "MUSCLO GALLEC MITJA CLOSCA 60/80", caixa: "6x1", preu: 7.40 },
                    { id: 367, ref: "4015", nom: "MUSCLO GALLEC CARN M 130/160", caixa: "6x1", preu: 6.79 },
                    { id: 368, ref: "4040", nom: "NAVALLES HOLANDA 10/13 cm", caixa: "unitat", preu: 6.25 },
                    { id: 369, ref: "5022", nom: "ROSSELLONES CHIRLAS 500", caixa: "unitat", preu: 3.85 },
                    { id: 370, ref: "5019", nom: "TELLINES DEL MEDITERRANI PREMIUM 250", caixa: "unitat", preu: 4.8 },
                    { id: 371, ref: "4940", nom: "VIEIRA DEL PACIFIC 20/30", caixa: "1", preu: 14.50 }
                ]
            },
            
            // Subcategoria: Marisc Superior (Clau: Esc)
            { 
                id: 3010, nom: "Marisc Superior (Escamarlà, Llagostí, Llamàntol, Gamba)", imatge: "escamarla.jpg", clau: "Esc",
                descripcio_breu: "Escamarlà, llagostí cuit o cru, llagostinera, llamàntol del Canadà i gamba vermella.",
                articles_detall: [
                    { id: 372, ref: "4215", nom: "ESCAMARLA Nº1", caixa: "1x1,5", preu: 21.95 },
                    { id: 373, ref: "4220", nom: "ESCAMARLA Nº2", caixa: "1x1,5", preu: 17.66 },
                    { id: 374, ref: "4225", nom: "ESCAMARLA Nº3", caixa: "1x1,5", preu: 12.68 },
                    { id: 375, ref: "4235", nom: "ESCAMARLÀ Nº4", caixa: "1x1,5", preu: 9.85 },
                    { id: 392, ref: "4101", nom: "GAMBA VERMELLA A1 (50/54)", caixa: "1200", preu: 41.98 },
                    { id: 393, ref: "4102", nom: "GAMBA VERMELLA A2 (+100)", caixa: "1200", preu: 14.96 },
                    { id: 391, ref: "4108", nom: "GAMBA VERMELLA A1E (42/44)", caixa: "1200", preu: 43.98 },
                    { id: 387, ref: "4080", nom: "GAMBA PELADA ARGENTINA NOS 20/30", caixa: "6x1", preu: 18.28 },
                    { id: 388, ref: "4095", nom: "GAMBA PELADA CUITA 150/250", caixa: "unitat", preu: 13.60 },
                    { id: 389, ref: "4010", nom: "GAMBA PELADA GRAN 10/30", caixa: "6x1", preu: 9.67 },
                    { id: 390, ref: "4060", nom: "GAMBA PELADA MITJANA 30/50", caixa: "5x1", preu: 7.53 },
                    { id: 380, ref: "4199", nom: "GAMBA SALADA G EXTRA 100/120", caixa: "1x1", preu: 16.95 },
                    { id: 376, ref: "4601", nom: "LLAGOSTINERA N.1 10/20 CONARPESA", caixa: "2", preu: 10.98 },
                    { id: 377, ref: "4602", nom: "LLAGOSTINERA N.2 21/30 COOKE", caixa: "2", preu: 10.98 },
                    { id: 378, ref: "4603", nom: "LLAGOSTINERA N.3 31/40 CONARPESA", caixa: "2", preu: 9.68 },
                    { id: 379, ref: "4609", nom: "LLAGOSTINERA C-1 30/55 CONARPESA", caixa: "2", preu: 15.25 },
                    { id: 381, ref: "4129", nom: "LLAGOSTÍ VANNAMEI CUIT 20/30", caixa: "1x2", preu: 11.60 },
                    { id: 382, ref: "4130", nom: "LLAGOSTÍ VANNAMEI CUIT 40/50", caixa: "1x2", preu: 9.50 },
                    { id: 383, ref: "4480", nom: "LLAGOSTÍ VANNAMEI CRU 40/50", caixa: "unitat", preu: 6.40 },
                    { id: 384, ref: "4479", nom: "LLAGOSTÍ VANNAMEI CUES PELADA", caixa: "6x1", preu: 9.30 },
                    { id: 385, ref: "4531", nom: "LLAMÀNTOL del CANADÀ 1ª 350/400", caixa: "unitat", preu: 19.94 },
                    { id: 386, ref: "4530", nom: "LLAMÀNTOL del CANADÀ 1ª 400/450", caixa: "unitat", preu: 19.94 }
                ]
            },
            
            // Subcategoria: Cranc i Gules (Clau: Crc)
            { 
                id: 3008, nom: "Altres", imatge: "bastonets.jpg", clau: "Crc",
                descripcio_breu: "Bastonets de cranc, cossos de cranc i gules.",
                articles_detall: [
                    { id: 361, ref: "4971", nom: "BASTONET DE CRANC KRUSTASUR 33/36", caixa: "5x1", preu: 7.45 },
                    { id: 362, ref: "4983", nom: "COSSOS CRUS NAMIBIA M 6/8", caixa: "unitat", preu: 12.60 },
                    { id: 363, ref: "5018", nom: "GULES 300 gr (2*150gr)", caixa: "unitat", preu: 6.30 },
                    { id: 394, ref: "5254", nom: "TINTA DE SIPIA 180 gr (temperatura ambient)", caixa: "unitat", preu: 4.85 },
                    { id: 395, ref: "2911", nom: "CARGOL BOVER NACIONAL MITJÀ", caixa: "4x2,5", preu: 10.40 }
                ]
            },
            
            // Subcategoria: Tinta (Clau: Tnt)
            /*{ 
                id: 3011, nom: "Tinta de Sípia (Tnt)", imatge: "tinta.jpg", clau: "Tnt",
                descripcio_breu: "Tinta de sípia en pot, temperatura ambient.",
                articles_detall: [
                    
                ]
            }*/
        ]
    }, // Tanca CATEGORIA 'px'
    
    // ====================================================================
    // CATEGORIA: ALTRES (Clau: alt)
    // ====================================================================
    alt: {
        titol: "Altres Productes",
        descripcio: "Magrets, postres i diversos congelats.",
        subcategories: [
            // Subcategoria: Magret (Clau: Mgr)
            { 
                id: 4001, nom: "Magret d'Ànec (Mgr)", imatge: "magret.jpg", clau: "Mgr",
                descripcio_breu: "Magret d'ànec nacional de diferents pesos.",
                articles_detall: [
                    { id: 401, ref: "2752", nom: "MAGRET D'ÀNEC NACIONAL 350 - 490 gr", caixa: "unitat", preu: 6.4 }
                ]
            },
            
            // Subcategoria: Postres (Clau: Prf)
            { 
                id: 4002, nom: "Postres (Prf, Trf)", imatge: "postres.jpg", clau: "Prf",
                descripcio_breu: "Profiteroles i trufes de xocolata.",
                articles_detall: [
                    { id: 402, ref: "2278", nom: "PROFITEROLES DE NATA 500 gr.", caixa: "unitat", preu: 5.14 },
                    { id: 403, ref: "5061", nom: "TRUFES", caixa: "unitat", preu: 11.52 }
                ]
            }
        ]
    } // Tanca CATEGORIA 'alt'
}; // Tanca dadesWeb
