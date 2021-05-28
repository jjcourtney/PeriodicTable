<html>
  <head>
    <title>Periodic Table</title>
  </head>
  <body>
     <link rel="stylesheet" type="text/css" href="periodic.css">
<!---<script type="text/javascript">
function change_div(element){
main_div.innerHTML = "<b>"+element+"</b>";
}
</script>

--->
<script type="text/javascript" src="periodic.js"></script>
    <?php
$looped_once = false;
$button_close = '</td>';
$blank_button = '<td width="30px" height="30px" class="button_blank"></td>';
$element_type = ["other_none_metal", "nobel_gas","alkali_metal","alkaline_earth_metal","metalloid","other_none_metal","other_none_metal","other_none_metal","other_none_metal","nobel_gas","alkali_metal","alkaline_earth_metal","post_transition_metal","metalloid","other_none_metal","other_none_metal","other_none_metal","nobel_gas","alkali_metal","alkaline_earth_metal","transition_metal","transition_metal","transition_metal","transition_metal","transition_metal","transition_metal","transition_metal","transition_metal","transition_metal","transition_metal","post_transition_metal","metalloid","metalloid","other_none_metal","other_none_metal","nobel_gas","alkali_metal","alkaline_earth_metal","transition_metal","transition_metal","transition_metal","transition_metal","transition_metal","transition_metal","transition_metal","transition_metal","transition_metal","transition_metal","post_transition_metal","post_transition_metal","metalloid","metalloid","other_none_metal","nobel_gas","alkali_metal","alkaline_earth_metal","lan­thanide","lan­thanide","lan­thanide","lan­thanide","lan­thanide","lan­thanide","lan­thanide","lan­thanide","lan­thanide","lan­thanide","lan­thanide","lan­thanide","lan­thanide","lan­thanide","lan­thanide","transition_metal","transition_metal","transition_metal","transition_metal","transition_metal","transition_metal","transition_metal","transition_metal","transition_metal","post_transition_metal","post_transition_metal","post_transition_metal","post_transition_metal","metalloid","nobel_gas","alkali_metal","alkaline_earth_metal","actinide","actinide","actinide","actinide","actinide","actinide","actinide","actinide","actinide","actinide","actinide","actinide","actinide","actinide","actinide","transition_metal","transition_metal","transition_metal","transition_metal","transition_metal","unknown","unknown","unknown","transition_metal","unknown","post_transition_metal","unknown","unknown","unknown","unknown"];
$element_name = ["Hydrogen","Helium","Lithium","Beryllium","Boron","Carbon","Nitrogen","Oxygen","Fluorine","Neon","Sodium","Magnesium","Aluminium","Silicon","Phosphorus","Sulfur","Chlorine","Argon","Potassium","Calcium","Scandium","Titanium","Vanadium","Chromium","Manganese","Iron","Cobalt","Nickel","Copper","Zinc","Gallium","Germanium","Arsenic","Selenium","Bromine","Krypton","Rubidium","Strontium","Yttrium","Zirconium","Niobium","Molybdenum","Technetium","Ruthenium","Rhodium","Palladium","Silver","Cadmium","Indium","Tin","Antimony","Tellurium","Iodine","Xenon","Caesium","Barium","Lanthanum","Cerium","Praseodymium","Neodymium","Promethium","Samarium","Europium","Gadolinium","Terbium","Dysprosium","Holmium","Erbium","Thulium","Ytterbium","Lutetium","Hafnium","Tantalum","Tungsten","Rhenium","Osmium","Iridium","Platinum","Gold","Mercury","Thallium","Lead","Bismuth","Polonium","Astatine","Radon","Francium","Radium","Actinium","Thorium","Protactinium","Uranium","Neptunium","Plutonsium","Americium","Curium","Berkelium","Californium","Einsteinium","Fermium","Mendelevium","Nobelium","Lawrencium","Rutherfordium","Dubnium","Seaborgium","Bohrium","Hassium","Meitnerium","Darmstadtium","Roentgenium","Copernicium","Nihonium","Flerovium","Moscovium","Livermorium","Tennessine","Oganesson"];
$element_symbol = ["H","He","Li","Be","B","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl","Ar","K","Ca","Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Ga","Ge","As","Se","Br","Kr","Rb","Sr","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","In","Sn","Sb","Te","I","Xe","Cs","Ba","La","Ce","Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg","Tl","Pb","Bi","Po","At","Rn","Fr","Ra","Ac","Th","Pa","U","Np","Pu","Am","Cm","Bk","Cf","Es","Fm","Md","No","Lr","Rf","Db","Sg","Bh","Hs","Mt","Ds","Rg","Cn","Nh","Fl","Mc","Lv","Ts","Og"];
$element_number = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80","81","82","83","84","85","86","87","88","89","90","91","92","93","94","95","96","97","98","99","100","101","102","103","104","105","106","107","108","109","110","111","112","113","114","115","116","117","118"];
$quote = "'";
$new_row_needed = array(2,10,18,36,54,86,118,71,103);
//for ($foo = 0; $foo < 11; $foo++){
$foo = -1;
echo "<table width='100%' height='80%'>";
while ($foo<118){
$foo = $foo +1;
$element_button = '<td class="'.$element_type[$foo]. '" id="'. $element_name[$foo].'" onmouseover="change_div('.$quote.$foo.$quote.')" width="5%" height="15%">';

if(in_array($foo+1,$new_row_needed)){
  $br = "</tr><tr>";
}
else
{
  $br = "";
}
// for the gaps after be and mg

if ($foo == 3 or $foo == 11){
    echo $element_button . "<span style='font-size:18px'>". $element_symbol[$foo] ."</span><br><span style='font-size:8px'>". $element_name[$foo] ."<br>".$element_number[$foo]."</span>". $button_close.$br;
      for ($hy_foo = 0; $hy_foo < 10; $hy_foo++){
       echo $blank_button;
      }
  }
elseif ($foo == 0){
    echo $element_button . "<span style='font-size:18px'>". $element_symbol[$foo] ."</span><br><span style='font-size:8px'>". $element_name[$foo] ."<br>".$element_number[$foo]."</span>". $button_close.$br;
      for ($hy_foo = 0; $hy_foo < 16; $hy_foo++){
       echo $blank_button;
      }
  }
elseif ($foo == 89 and $looped_once == false){
 $foo = 102;
  }

elseif ($foo == 57 and $looped_once == false){
 $foo = 70;
  }

elseif ($foo == 118){
   $looped_once = true;
    $foo = 56;
    echo $blank_button.$blank_button.$blank_button;
  }
  elseif ($foo == 58 and $looped_once == true){
    echo $element_button . "<span style='font-size:18px'>". $element_symbol[$foo] ."</span><br><span style='font-size:8px'>". $element_name[$foo] ."<br>".$element_number[$foo]."</span>". $button_close.$br;
  }
  elseif ($foo == 71 and $looped_once == true){
    $foo =88;
    echo $blank_button.$blank_button.$blank_button;
  }
  elseif ($foo == 103 and $looped_once == true){
    $foo = 10000;
  }

  else
  {
    echo $element_button . "<span style='font-size:18px'>". $element_symbol[$foo] ."</span><br><span style='font-size:8px'>". $element_name[$foo] ."<br>".$element_number[$foo]."</span>". $button_close.$br;
    }
}
echo "</table>";
/*
alkali_metal 
alkaline_earth_metal 
lan­thanide 
actinide 
transition_metal 
post-​transition_metal 
metalloid
reactive_nonmetal 
noble gas 
unknown
chemical
properties 
*/
/*
for ($temp_make = 1; $temp_make < 118; $temp_make++){
       echo ('"' . $temp_make .'",');
      }
*/
?>
<div id="main_div" class="main_div_tab">Welcome to my interactive periodic table</div>
 
<div id="type_div" class="type_div_tab">
<table class="type_table" width=100% height=100%>
<th>Atomic Mass</th>
<th>Electon config</th>
<th>Year of discovery</th>
</tr><tr>
<td id="atomic_mass">Atomic Mass</td>
<td id="electron_con">Electron Config</td>
<td id="year_discovered">Year of discovery</td>
</tr><tr>    
<th>Melting Point</th>
<th>Boiling Point</th>
<th>State at 20 degC</th>
</tr><tr>
<td id="el_melting">Melting Point</td>
<td id="el_boiling">Boiling Point</td>
<td id="state_rt">State at 20 degC</td>
</tr><tr>    
<th>Abundance</th>
<th>1st ionisation energy</th>
<th>Density</th>
</tr><tr>
<td id="abundance">Abundance</td>
<td id="ion_energy">Ionisation energy</td>
<td id="element_density">Density</td>
</tr></table>
</div>
<div id="radioactive">
</div>
  </body>
</html>
