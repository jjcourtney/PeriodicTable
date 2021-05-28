var element_class = ["other_none_metal", "nobel_gas","alkali_metal","alkaline_earth_metal","metalloid","other_none_metal","other_none_metal","other_none_metal","other_none_metal","nobel_gas","alkali_metal","alkaline_earth_metal","post_transition_metal","metalloid","other_none_metal","other_none_metal","other_none_metal","nobel_gas","alkali_metal","alkaline_earth_metal","transition_metal","transition_metal","transition_metal","transition_metal","transition_metal","transition_metal","transition_metal","transition_metal","transition_metal","transition_metal","post_transition_metal","metalloid","metalloid","other_none_metal","other_none_metal","nobel_gas","alkali_metal","alkaline_earth_metal","transition_metal","transition_metal","transition_metal","transition_metal","transition_metal","transition_metal","transition_metal","transition_metal","transition_metal","transition_metal","post_transition_metal","post_transition_metal","metalloid","metalloid","other_none_metal","nobel_gas","alkali_metal","alkaline_earth_metal","lan­thanide","lan­thanide","lan­thanide","lan­thanide","lan­thanide","lan­thanide","lan­thanide","lan­thanide","lan­thanide","lan­thanide","lan­thanide","lan­thanide","lan­thanide","lan­thanide","lan­thanide","transition_metal","transition_metal","transition_metal","transition_metal","transition_metal","transition_metal","transition_metal","transition_metal","transition_metal","post_transition_metal","post_transition_metal","post_transition_metal","post_transition_metal","metalloid","nobel_gas","alkali_metal","alkaline_earth_metal","actinide","actinide","actinide","actinide","actinide","actinide","actinide","actinide","actinide","actinide","actinide","actinide","actinide","actinide","actinide","transition_metal","transition_metal","transition_metal","transition_metal","transition_metal","unknown","unknown","unknown","transition_metal","unknown","post_transition_metal","unknown","unknown","unknown","unknown"];

var element_mass =["1.008","4.003","6.941","9.012","10.811","12.011","14.007","15.999","18.998","20.18","22.99","24.305","26.982","28.086","30.974","32.065","35.453","39.948","39.098","40.078","44.956","47.867","50.942","51.996","54.938","55.845","58.933","58.693","63.546","65.39","69.723","72.64","74.922","78.96","79.904","83.8","85.468","87.62","88.906","91.224","92.906","95.94","98","101.07","102.906","106.42","107.868","112.411","114.818","118.71","121.76","127.6","126.905","131.293","132.906","137.327","138.906","140.116","140.908","144.24","145","150.36","151.964","157.25","158.925","162.5","164.93","167.259","168.934","173.04","174.967","178.49","180.948","183.84","186.207","190.23","192.217","195.078","196.967","200.59","204.383","207.2","208.98","209","210","222","223","226","227","232.038","231.036","238.029","237","244","243","247","247","251","252","257","258","259","262","261","262","266","264","277","268"]
var element_type = ["Other none metal", "Nobel gas","Alkali metal","Alkaline earth metal","Metalloid","Other none metal","Other none metal","Other none metal","Other none metal","Nobel gas","Alkali metal","Alkaline earth metal","Post transition metal","Metalloid","Other none metal","Other none metal","Other none metal","Nobel gas","Alkali metal","Alkaline earth metal","Transition metal","Transition metal","Transition metal","Transition metal","Transition metal","Transition metal","Transition metal","Transition metal","Transition metal","Transition metal","Post transition metal","Metalloid","Metalloid","Other none metal","Other none metal","Nobel gas","Alkali metal","Alkaline earth metal","Transition metal","Transition metal","Transition metal","Transition metal","Transition metal","Transition metal","Transition metal","Transition metal","Transition metal","Transition metal","Post transition metal","Post transition metal","Metalloid","Metalloid","Other none metal","Nobel gas","Alkali metal","Alkaline earth metal","Lan­thanide","Lan­thanide","Lan­thanide","Lan­thanide","Lan­thanide","Lan­thanide","Lan­thanide","Lan­thanide","Lan­thanide","Lan­thanide","Lan­thanide","Lan­thanide","Lan­thanide","Lan­thanide","Lan­thanide","Transition metal","Transition metal","Transition metal","Transition metal","Transition metal","Transition metal","Transition metal","Transition metal","Transition metal","Post transition metal","Post transition metal","Post transition metal","Post transition metal","Metalloid","Nobel gas","Alkali metal","Alkaline earth metal","Actinide","Actinide","Actinide","Actinide","Actinide","Actinide","Actinide","Actinide","Actinide","Actinide","Actinide","Actinide","Actinide","Actinide","Actinide","Transition metal","Transition metal","Transition metal","Transition metal","Transition metal","Unknown","Unknown","Unknown","Transition metal","Unknown","Post transition metal","Unknown","Unknown","Unknown","Unknown"];

var element_name = ["Hydrogen","Helium","Lithium","Beryllium","Boron","Carbon","Nitrogen","Oxygen","Fluorine","Neon","Sodium","Magnesium","Aluminium","Silicon","Phosphorus","Sulfur","Chlorine","Argon","Potassium","Calcium","Scandium","Titanium","Vanadium","Chromium","Manganese","Iron","Cobalt","Nickel","Copper","Zinc","Gallium","Germanium","Arsenic","Selenium","Bromine","Krypton","Rubidium","Strontium","Yttrium","Zirconium","Niobium","Molybdenum","Technetium","Ruthenium","Rhodium","Palladium","Silver","Cadmium","Indium","Tin","Antimony","Tellurium","Iodine","Xenon","Caesium","Barium","Lanthanum","Cerium","Praseodymium","Neodymium","Promethium","Samarium","Europium","Gadolinium","Terbium","Dysprosium","Holmium","Erbium","Thulium","Ytterbium","Lutetium","Hafnium","Tantalum","Tungsten","Rhenium","Osmium","Iridium","Platinum","Gold","Mercury","Thallium","Lead","Bismuth","Polonium","Astatine","Radon","Francium","Radium","Actinium","Thorium","Protactinium","Uranium","Neptunium","Plutonium","Americium","Curium","Berkelium","Californium","Einsteinium","Fermium","Mendelevium","Nobelium","Lawrencium","Rutherfordium","Dubnium","Seaborgium","Bohrium","Hassium","Meitnerium","Darmstadtium","Roentgenium","Copernicium","Nihonium","Flerovium","Moscovium","Livermorium","Tennessine","Oganesson"];

var element_symbol = ["H","He","Li","Be","B","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl","Ar","K","Ca","Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Ga","Ge","As","Se","Br","Kr","Rb","Sr","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","In","Sn","Sb","Te","I","Xe","Cs","Ba","La","Ce","Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg","Tl","Pb","Bi","Po","At","Rn","Fr","Ra","Ac","Th","Pa","U","Np","Pu","Am","Cm","Bk","Cf","Es","Fm","Md","No","Lr","Rf","Db","Sg","Bh","Hs","Mt","Ds","Rg","Cn","Nh","Fl","Mc","Lv","Ts","Og"];
var element_number = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80","81","82","83","84","85","86","87","88","89","90","91","92","93","94","95","96","97","98","99","100","101","102","103","104","105","106","107","108","109","110","111","112","113","114","115","116","117","118"];
var electron_configuration = ["1s1","1s2","[He] 2s1","[He] 2s2","[He] 2s2 2p1","[He] 2s2 2p2","[He] 2s2 2p3","[He] 2s2 2p4","[He] 2s2 2p5","[He] 2s2 2p6","[Ne] 3s1","[Ne] 3s2","[Ne] 3s2 3p1","[Ne] 3s2 3p2","[Ne] 3s2 3p3","[Ne] 3s2 3p4","[Ne] 3s2 3p5","[Ne] 3s2 3p6","[Ar] 4s1","[Ar] 4s2","[Ar] 3d1 4s2","[Ar] 3d2 4s2","[Ar] 3d3 4s2","[Ar] 3d5 4s1","[Ar] 3d5 4s2","[Ar] 3d6 4s2","[Ar] 3d7 4s2","[Ar] 3d8 4s2","[Ar] 3d10 4s1","[Ar] 3d10 4s2","[Ar] 3d10 4s2 4p1","[Ar] 3d10 4s2 4p2","[Ar] 3d10 4s2 4p3","[Ar] 3d10 4s2 4p4","[Ar] 3d10 4s2 4p5","[Ar] 3d10 4s2 4p6","[Kr] 5s1","[Kr] 5s2","[Kr] 4d1 5s2","[Kr] 4d2 5s2","[Kr] 4d4 5s1","[Kr] 4d5 5s1","[Kr] 4d5 5s2","[Kr] 4d7 5s1","[Kr] 4d8 5s1","[Kr] 4d10","[Kr] 4d10 5s1","[Kr] 4d10 5s2","[Kr] 4d10 5s2 5p1","[Kr] 4d10 5s2 5p2","[Kr] 4d10 5s2 5p3","[Kr] 4d10 5s2 5p4","[Kr] 4d10 5s2 5p5","[Kr] 4d10 5s2 5p6","[Xe] 6s1","[Xe] 6s2","[Xe] 5d1 6s2","[Xe] 4f1 5d1 6s2","[Xe] 4f3 6s2","[Xe] 4f4 6s2","[Xe] 4f5 6s2","[Xe] 4f6 6s2","[Xe] 4f7 6s2","[Xe] 4f7 5d1 6s2","[Xe] 4f9 6s2","[Xe] 4f10 6s2","[Xe] 4f11 6s2","[Xe] 4f12 6s2","[Xe] 4f13 6s2","[Xe] 4f14 6s2","[Xe] 4f14 5d1 6s2","[Xe] 4f14 5d2 6s2","[Xe] 4f14 5d3 6s2","[Xe] 4f14 5d4 6s2","[Xe] 4f14 5d5 6s2","[Xe] 4f14 5d6 6s2","[Xe] 4f14 5d7 6s2","[Xe] 4f14 5d9 6s1","[Xe] 4f14 5d10 6s1","[Xe] 4f14 5d10 6s2","[Xe] 4f14 5d10 6s2 6p1","[Xe] 4f14 5d10 6s2 6p2","[Xe] 4f14 5d10 6s2 6p3","[Xe] 4f14 5d10 6s2 6p4","[Xe] 4f14 5d10 6s2 6p5","[Xe] 4f14 5d10 6s2 6p6","[Rn] 7s1","[Rn] 7s2","[Rn] 6d1 7s2","[Rn] 6d2 7s2","[Rn] 5f2 6d1 7s2","[Rn] 5f3 6d1 7s2","[Rn] 5f4 6d1 7s2","[Rn] 5f6 7s2","[Rn] 5f7 7s2","","","","","","","","","","","","","","","",""];
var year_of_dis = ["1776","1895","1817","1797","1808","ancient","1772","1774","1886","1898","1807","1755","1825","1824","1669","ancient","1774","1894","1807","1808","1879","1791","1830","1797","1774","ancient","1735","1751","ancient","ancient","1875","1886","ancient","1817","1826","1898","1861","1790","1794","1789","1801","1781","1937","1844","1803","1803","ancient","1817","1863","ancient","ancient","1783","1811","1898","1860","1808","1839","1803","1885","1885","1945","1879","1901","1880","1843","1886","1867","1842","1879","1878","1907","1923","1802","1783","1925","1803","1803","1735","ancient","ancient","1861","ancient","ancient","1898","1940","1900","1939","1898","1899","1829","1913","1789","1940","1940","1944","1944","1949","1950","1952","1952","1955","1958","1961","1964","1967","1974","1981","1984","1982"];
var melting_point = ["-259","-272","180","1,278","2,300","3,500","-210","-218","-220","-249","98","639","660","1,410","44","113","-101","-189","64","839","1,539","1,660","1,890","1,857","1,245","1,535","1,495","1,453","1,083","420","30","937","81","217","-7","-157","39","769","1,523","1,852","2,468","2,617","2,200","2,250","1,966","1,552","962","321","157","232","630","449","114","-112","29","725","920","795","935","1,010","1,100","1,072","822","1,311","1,360","1,412","1,470","1,522","1,545","824","1,656","2,150","2,996","3,410","3,180","3,045","2,410","1,772","1,064","-39","303","327","271","254","302","-71","27","700","1,050","1,750","1,568","1,132","640","640","994","1,340","986","900","860","1,527","0","827","1,627"];
var boiling_point = ["-253","-269","1,347","2,970","2,550","4,827","-196","-183","-188","-246","883","1,090","2,467","2,355","280","445","-35","-186","774","1,484","2,832","3,287","3,380","2,672","1,962","2,750","2,870","2,732","2,567","907","2,403","2,830","613","685","59","-153","688","1,384","3,337","4,377","4,927","4,612","4,877","3,900","3,727","2,927","2,212","765","2,000","2,270","1,750","990","184","-108","678","1,140","3,469","3,257","3,127","3,127","3,000","1,900","1,597","3,233","3,041","2,562","2,720","2,510","1,727","1,466","3,315","5,400","5,425","5,660","5,627","5,027","4,527","3,827","2,807","357","1,457","1,740","1,560","962","337","-62","677","1,737","3,200","4,790","0","3,818","3,902","3,235","2,607"];
var ionisation_energy = ["13.6","24.59","5.39","9.32","8.3","11.26","14.53","13.62","17.42","21.56","5.14","7.65","5.99","8.15","10.49","10.36","12.97","15.76","4.34","6.11","6.56","6.83","6.75","6.77","7.43","7.9","7.88","7.64","7.73","9.39","6","7.9","9.79","9.75","11.81","14","4.18","5.69","6.22","6.63","6.76","7.09","7.28","7.36","7.46","8.34","7.58","8.99","5.79","7.34","8.61","9.01","10.45","12.13","3.89","5.21","5.58","5.54","5.47","5.53","5.58","5.64","5.67","6.15","5.86","5.94","6.02","6.11","6.18","6.25","5.43","6.83","7.55","7.86","7.83","8.44","8.97","8.96","9.23","10.44","6.11","7.42","7.29","8.42","9.3","10.75","4.07","5.28","5.17","6.31","5.89","6.19","6.27","6.03","5.97","5.99","6.2","6.28","6.42","6.5","6.58","6.65","4.9"];
var element_den = ["0.09","0.18","0.53","1.85","2.34","2.26","1.25","1.43","1.7","0.9","0.97","1.74","2.7","2.33","1.82","2.07","3.21","1.78","0.86","1.55","2.99","4.54","6.11","7.19","7.43","7.87","8.9","8.9","8.96","7.13","5.91","5.32","5.72","4.79","3.12","3.75","1.63","2.54","4.47","6.51","8.57","10.22","11.5","12.37","12.41","12.02","10.5","8.65","7.31","7.31","6.68","6.24","4.93","5.9","1.87","3.59","6.15","6.77","6.77","7.01","7.3","7.52","5.24","7.9","8.23","8.55","8.8","9.07","9.32","6.9","9.84","13.31","16.65","19.35","21.04","22.6","22.4","21.45","19.32","13.55","11.85","11.35","9.75","9.3","0","9.73","0","5.5","10.07","11.72","15.4","18.95","20.2","19.84","13.67","13.5","14.78","15.1"];
var element_abundance = ["1400","0.008","20","2.8","10","200","19","461000","585","0.005","23600","23300","82300","282000","1050","350","145","3.5","20900","41500","22","5650","120","102","950","56300","25","84","60","70","19","1.5","1.8","0.05","2.4","<0.001","90","370","33","165","20","1.2","<0.001","0.001","0.001","0.015","0.075","0.159","0.25","2.3","0.2","0.001","0.45","<0.001","3","425","39","66.5","9.2","41.5","<0.001","7.05","2","6.2","1.2","5.2","1.3","3.5","0.52","3.2","0.8","3","2","1.3","<0.001","0.002","0.001","0.005","0.004","0.085","0.85","14","0.009","<0.001","<0.001","<0.001","<0.001","<0.001","<0.001","9.6","<0.001","2.7","<0.001","<0.001","<0.001","<0.001","<0.001","<0.001","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
var state_at_rt = ["gas","gas","solid","solid","solid","solid","gas","gas","gas","gas","solid","solid","solid","solid","solid","solid","gas","gas","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","liquid","gas","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","gas","solid","solid","solid", "solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","liquid","solid","solid","solid","solid","solid","gas","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","unknown","unknown","unknown","unknown","unknown","unknown","unknown","unknown","unknown","unknown","unknown","unknown","unknown","unknown","unknown"];
function change_div(element){

main_div.innerHTML = "<table class='" + element_class[element] +"' width=100% height=100%><td><font size='6'>"+element_symbol[element]+"</font></td><tr><td>Name: "+ element_name[element] + "   <div id='radioactive_tab'></div></td></tr><tr><td>Type: "+ element_type[element] + "</td></tr><tr><td>Atomic number: " + element_number[element]+"<tr></td></table>";

atomic_mass.innerHTML = element_mass[element];
electron_con.innerHTML = electron_configuration[element];
year_discovered.innerHTML = year_of_dis[element];
el_boiling.innerHTML = boiling_point[element];
el_melting.innerHTML = melting_point[element];
ion_energy.innerHTML = ionisation_energy[element];
element_density.innerHTML = element_den[element];
abundance.innerHTML = element_abundance[element];
state_rt.innerHTML =state_at_rt[element];

if (element > 82 && element < 112) {
  radioactive.innerHTML = "<img class ='radioactive' src='radioactive.png'>";
  radioactive_tab.innerHTML = "<img class ='radioactive' src='radioactive.png'>";
} else if (element == 113 || element ==  115 || element == 117|| element == 60){
    radioactive.innerHTML = "<img class ='radioactive' src='radioactive.png'>";
    radioactive_tab.innerHTML = "<img class ='radioactive' src='radioactive.png'>";
} 
else {
  radioactive.innerHTML = "";
  radioactive_tab.innerHTML = "";
}
}

