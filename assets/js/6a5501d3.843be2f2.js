"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1860],{9868:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=s(7624),t=s(2172);const i={sidebar_position:2,description:"Une introduction au syst\xe8me de possession et d'emprunt de Rust."},l="TP 02 - Possession et arguments du programme",o={id:"tp/02",title:"TP 02 - Possession et arguments du programme",description:"Une introduction au syst\xe8me de possession et d'emprunt de Rust.",source:"@site/docs/tp/02.md",sourceDirName:"tp",slug:"/tp/02",permalink:"/docs/tp/02",draft:!1,unlisted:!1,editUrl:"https://github.com/UPB-FILS-SdE2/upb-fils-sde2.github.io/edit/main/docs/tp/02.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Une introduction au syst\xe8me de possession et d'emprunt de Rust."},sidebar:"tutorialSidebar",previous:{title:"TP 01 - Rust pour les d\xe9butants",permalink:"/docs/tp/01"},next:{title:"Devoir",permalink:"/docs/category/devoir"}},a={},u=[{value:"Resources",id:"resources",level:2},{value:"Possession",id:"possession",level:2},{value:"R\xe8gles de possession",id:"r\xe8gles-de-possession",level:3},{value:"Port\xe9e des variables",id:"port\xe9e-des-variables",level:3},{value:"M\xe9moire et allocation",id:"m\xe9moire-et-allocation",level:3},{value:"Possession et fonctions",id:"possession-et-fonctions",level:3},{value:"Valeurs de retour et scope",id:"valeurs-de-retour-et-scope",level:3},{value:"References et Emprunt (Borrow)",id:"references-et-emprunt-borrow",level:3},{value:"Mutable references",id:"mutable-references",level:3},{value:"Slices",id:"slices",level:2},{value:"String slices",id:"string-slices",level:4},{value:"Autre slices",id:"autre-slices",level:4},{value:"L&#39;enum <code>Option</code>",id:"lenum-option",level:2},{value:"Vecteurs",id:"vecteurs",level:2},{value:"Push",id:"push",level:4},{value:"Lire des \xe9l\xe9ments",id:"lire-des-\xe9l\xe9ments",level:4},{value:"It\xe9rer un vecteur",id:"it\xe9rer-un-vecteur",level:4},{value:"Accepter les arguments de la ligne de commande",id:"accepter-les-arguments-de-la-ligne-de-commande",level:2},{value:"Enregistrement des valeurs d&#39;argument dans les variables",id:"enregistrement-des-valeurs-dargument-dans-les-variables",level:3},{value:"Exercises",id:"exercises",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"tp-02---possession-et-arguments-du-programme",children:"TP 02 - Possession et arguments du programme"}),"\n",(0,r.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://jimskapt.github.io/rust-book-fr/ch04-00-understanding-ownership.html",children:"La possesion"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://jimskapt.github.io/rust-book-fr/ch08-01-vectors.html",children:"Vecteurs"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://jimskapt.github.io/rust-book-fr/ch08-02-strings.html",children:"Strings"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://jimskapt.github.io/rust-book-fr/ch12-00-an-io-project.html",children:"An I/O Project: Building a Command Line Program"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"possession",children:"Possession"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Possession"})," (alnglais ",(0,r.jsx)(n.em,{children:"ownership"}),") est un ensemble de r\xe8gles qui r\xe9gissent la fa\xe7on dont un programme Rust g\xe8re ",(0,r.jsx)(n.strong,{children:"la m\xe9moire"}),". Tous les programmes doivent g\xe9rer la fa\xe7on dont ils utilisent la m\xe9moire d'un ordinateur pendant leur ex\xe9cution."]}),"\n",(0,r.jsxs)(n.p,{children:["Certains langages ont ",(0,r.jsx)(n.strong,{children:"garbage collection"})," qui recherche r\xe9guli\xe8rement la m\xe9moire non utilis\xe9e pendant l'ex\xe9cution du programme ; dans d'autres langages, le programmeur doit explicitement ",(0,r.jsx)(n.strong,{children:"allouer"})," et ",(0,r.jsx)(n.strong,{children:"lib\xe9rer"})," la m\xe9moire."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Rust"})," utilise une troisi\xe8me approche : la m\xe9moire est g\xe9r\xe9e via un ",(0,r.jsx)(n.strong,{children:"syst\xe8me de propri\xe9t\xe9"})," avec un ensemble de ",(0,r.jsx)(n.strong,{children:"r\xe8gles"})," que le compilateur v\xe9rifie. Si l'une des r\xe8gles est viol\xe9e, le programme ne compilera pas. Aucune des caract\xe9ristiques de propri\xe9t\xe9 ne ralentira votre programme pendant son ex\xe9cution."]}),"\n",(0,r.jsx)(n.h3,{id:"r\xe8gles-de-possession",children:"R\xe8gles de possession"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Chaque valeur en Rust a un ",(0,r.jsx)(n.em,{children:"possesseur"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Une valeur ne peut pas avoir qu'un seul ",(0,r.jsx)(n.em,{children:"possesseur"})," \xe0 la fois."]}),"\n",(0,r.jsx)(n.li,{children:"Quand le posseseur est hors de port\xe9e, la valeur est supprim\xe9e.\nLa biblioth\xe8que standard est divis\xe9e en trois niveaux\xa0:"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"port\xe9e-des-variables",children:"Port\xe9e des variables"}),"\n",(0,r.jsxs)(n.p,{children:["Une ",(0,r.jsx)(n.em,{children:"port\xe9e"})," est la zone de code d'un programme dans laquelle un \xe9l\xe9ment est valide."]}),"\n",(0,r.jsx)(n.p,{children:"Voici un exemple pour comprendre le concept:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:" {\n    // s n'est pas valide ici, car il n'est pas encore d\xe9clar\xe9\n    let s = \"hello\";   // s est valide \xe0 partir de ce point\n \n    // fait quelque chose avec s\n }\n"})}),"\n",(0,r.jsx)(n.h3,{id:"m\xe9moire-et-allocation",children:"M\xe9moire et allocation"}),"\n",(0,r.jsx)(n.p,{children:"Quand on a besoin d'allouer de la m\xe9moire sur le tas (ex: variables qui sont mutables et n'ont pas une taille connue \xe0 la compilation, donc la taille peut \xeatre modifi\xe9e pendant l'ex\xe9cution du programme) nous devons nous assurer que cette m\xe9moire est transmise \xe0 l'allocateur au moment o\xf9 nous n'avons plus besoin de notre variable."}),"\n",(0,r.jsxs)(n.p,{children:["Pour \xe7a, en Rust, la m\xe9moire est automatiquement lib\xe9r\xe9e une fois que la variable qui la poss\xe8de ",(0,r.jsx)(n.strong,{children:"sort de la port\xe9e"}),". Lorsqu'une variable sort de la port\xe9e, Rust appelle une fonction sp\xe9ciale pour nous, ",(0,r.jsx)(n.strong,{children:"drop"}),", automatiquement \xe0 l'accolade fermante (la fin de la port\xe9e)."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Pour en savoir plus, veuillez lire la section ",(0,r.jsx)(n.a,{href:"https://jimskapt.github.io/rust-book-fr/ch04-01-what-is-ownership.html#m%C3%A9moire-et-allocation",children:"M\xe9moire et allocation"})," du chapitre 4!"]})}),"\n",(0,r.jsx)(n.h3,{id:"possession-et-fonctions",children:"Possession et fonctions"}),"\n",(0,r.jsxs)(n.p,{children:["Les m\xe9canismes de transmission d'une valeur \xe0 une fonction sont similaires \xe0 ceux de l'affectation d'une valeur \xe0 une variable. Passer une variable \xe0 une fonction ",(0,r.jsx)(n.strong,{children:"d\xe9placera"})," ou ",(0,r.jsx)(n.strong,{children:"copiera"}),", tout comme le fait l'affectation."]}),"\n",(0,r.jsxs)(n.p,{children:["Example (",(0,r.jsx)(n.strong,{children:"lisez les commentaires"}),"):"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'fn main() {\n    let s = String::from("hello");  // s comes into scope\n \n    takes_ownership(s);             // s\'s value moves into the function...\n                                    // ... and so is no longer valid here\n \n    let x = 5;                      // x comes into scope\n \n    makes_copy(x);                  // a copy to x is passed to the function,\n                                    // but i32 is Copy, so it\'s okay to still\n                                    // use x afterward\n \n} // Here, x goes out of scope, then s. But because s\'s value was moved, nothing\n  // special happens.\n \nfn takes_ownership(some_string: String) { // some_string comes into scope\n    println!("{}", some_string);\n} // Here, some_string goes out of scope and `drop` is called. The backing\n  // memory is freed.\n \nfn makes_copy(some_integer: i32) { // some_integer comes into scope\n    println!("{}", some_integer);\n} // Here, some_integer goes out of scope. Nothing special happens.\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Si nous essayions d'utiliser s apr\xe8s l'appel \xe0 ",(0,r.jsx)(n.code,{children:"take_ownership"}),", Rust renverrait une erreur de compilation. Ces v\xe9rifications statiques nous prot\xe8gent des erreurs."]}),"\n",(0,r.jsx)(n.h3,{id:"valeurs-de-retour-et-scope",children:"Valeurs de retour et scope"}),"\n",(0,r.jsx)(n.p,{children:"Les valeurs de retour peuvent \xe9galement transf\xe9rer le ownership."}),"\n",(0,r.jsxs)(n.p,{children:["La possession d'une variable suit le m\xeame sch\xe9ma \xe0 chaque fois : l'affectation d'une valeur \xe0 une autre variable la ",(0,r.jsx)(n.strong,{children:"d\xe9place"}),". Lorsqu'une variable qui inclut des donn\xe9es sur le tas sort de la scope, la valeur sera nettoy\xe9e par ",(0,r.jsx)(n.strong,{children:"drop"})," \xe0 moins que la propri\xe9t\xe9 des donn\xe9es n'ait \xe9t\xe9 d\xe9plac\xe9e vers une autre variable."]}),"\n",(0,r.jsxs)(n.p,{children:["Example (",(0,r.jsx)(n.strong,{children:"lisez les commentaires"}),"):"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'fn main() {\n    let s1 = gives_ownership();         // gives_ownership moves its return\n                                        // value into s1\n \n    let s2 = String::from("hello");     // s2 comes into scope\n \n    let s3 = takes_and_gives_back(s2);  // s2 is moved into\n                                        // takes_and_gives_back, which also\n                                        // moves its return value into s3\n} // Here, s3 goes out of scope and is dropped. s2 was moved, so nothing\n  // happens. s1 goes out of scope and is dropped.\n \nfn gives_ownership() -> String {             // gives_ownership will move its\n                                             // return value into the function\n                                             // that calls it\n \n    let some_string = String::from("yours"); // some_string comes into scope\n \n    some_string                              // some_string is returned and\n                                             // moves out to the calling\n                                             // function\n}\n \n// This function takes a String and returns one\nfn takes_and_gives_back(a_string: String) -> String { // a_string comes into\n                                                      // scope\n \n    a_string  // a_string is returned and moves out to the calling function\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"references-et-emprunt-borrow",children:"References et Emprunt (Borrow)"}),"\n",(0,r.jsxs)(n.p,{children:["Une ",(0,r.jsx)(n.strong,{children:"r\xe9f\xe9rence"})," est comme un pointeur au sens o\xf9 il s'agit d'une adresse que nous pouvons suivre pour acc\xe9der aux donn\xe9es stock\xe9es \xe0 cette adresse ; ces donn\xe9es appartiennent \xe0 une autre variable. Contrairement \xe0 un pointeur, une r\xe9f\xe9rence est ",(0,r.jsx)(n.strong,{children:"garantie"})," de pointer vers une valeur valide d'un type particulier pour la dur\xe9e de vie de cette r\xe9f\xe9rence."]}),"\n",(0,r.jsxs)(n.p,{children:["Le symbole ",(0,r.jsx)(n.strong,{children:"&"})," est utilis\xe9 pour marquer une r\xe9f\xe9rence, soit avant le nom d'une variable, soit, pour le cas de param\xe8tre d'une fonction, avant le type du parametre. Ces esperluettes repr\xe9sentent des r\xe9f\xe9rences et vous permettent de vous r\xe9f\xe9rer \xe0 une valeur sans vous en approprier."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"let x: u16 = 10;\nlet y = &x;\n"})}),"\n",(0,r.jsx)(n.p,{children:"Exemple d'une fonction qui prend une r\xe9f\xe9rence vers un objet comme param\xe8tre au lieu de prendre la possession de cette valeur:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'fn main() {\n    let s1 = String::from("hello");\n    let len = calculate_length(&s1);\n    println!("The length of \'{}\' is {}.", s1, len);\n}\n \nfn calculate_length(s: &String) -> usize { // s is a reference to a String\n    s.len()\n} // Here, s goes out of scope. But because it does not have ownership of what\n  // it refers to, it is not dropped.\n'})}),"\n",(0,r.jsx)(n.p,{children:"La syntaxe &s1 nous permet de cr\xe9er une r\xe9f\xe9rence qui fait r\xe9f\xe9rence \xe0 la valeur de s1 mais qui ne la poss\xe8de pas. Comme la r\xe9f\xe9rence ne poss\xe8de pas la valeur vers laquelle elle pointe, la valeur de s1 ne sera pas supprim\xe9e lorsque la r\xe9f\xe9rence cessera d'\xeatre utilis\xe9e."}),"\n",(0,r.jsx)(n.p,{children:"De m\xeame, la signature de la fonction utilise & pour indiquer que le type du param\xe8tre s est une r\xe9f\xe9rence."}),"\n",(0,r.jsxs)(n.p,{children:["Nous appelons ",(0,r.jsx)(n.strong,{children:"emprunt"})," (borrowing en anglais) l'action de cr\xe9er une r\xe9f\xe9rence. Comme dans la vraie vie, vous pouvez emprunter quelque chose \xe0 quelqu'un. Lorsque vous n'avez plus besoin de la chose emprunt\xe9e, vous devez la rendre. Vous ne la poss\xe9dez pas."]}),"\n",(0,r.jsxs)(n.p,{children:["Tout comme les variables sont ",(0,r.jsx)(n.strong,{children:"immuables par d\xe9faut"}),", ",(0,r.jsx)(n.strong,{children:"les r\xe9f\xe9rences"})," le sont aussi. Nous ne sommes pas autoris\xe9s \xe0 modifier la valeur point\xe9e par une r\xe9f\xe9rence."]}),"\n",(0,r.jsx)(n.h3,{id:"mutable-references",children:"Mutable references"}),"\n",(0,r.jsxs)(n.p,{children:["Si on veut modifier la valeur d'une r\xe9f\xe9rence on doit dire \xe7a explicitement au compilateur en utilisant le mot cl\xe9 ",(0,r.jsx)(n.code,{children:"mut"}),". Les r\xe9f\xe9rences mutables ont une grande restriction : si vous avez une r\xe9f\xe9rence mutable \xe0 une valeur, vous ne pouvez pas avoir d'autres r\xe9f\xe9rences \xe0 cette valeur."]}),"\n",(0,r.jsxs)(n.p,{children:["Nous ne pouvons pas non plus avoir une r\xe9f\xe9rence ",(0,r.jsx)(n.code,{children:"mutable"})," alors que nous en avons une ",(0,r.jsx)(n.code,{children:"immuable"})," \xe0 la m\xeame valeur."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'fn main() {\n    let mut s = String::from("hello");\n    change(&mut s);\n}\n \nfn change(some_string: &mut String) {\n    some_string.push_str(", world");\n}\n'})}),"\n",(0,r.jsxs)(n.admonition,{type:"warning",children:[(0,r.jsx)(n.p,{children:"R\xe8gles pour les r\xe9f\xe9rences:"}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\xc0 tout moment, vous pouvez avoir ",(0,r.jsx)(n.strong,{children:"une"})," r\xe9f\xe9rence ",(0,r.jsx)(n.code,{children:"mutable"})," ou un ",(0,r.jsx)(n.strong,{children:"nombre quelconque"})," de r\xe9f\xe9rences ",(0,r.jsx)(n.code,{children:"immuables"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Les r\xe9f\xe9rences doivent toujours \xeatre ",(0,r.jsx)(n.strong,{children:"valides"}),"."]}),"\n"]})]}),"\n",(0,r.jsx)(n.h2,{id:"slices",children:"Slices"}),"\n",(0,r.jsxs)(n.p,{children:["Les ",(0,r.jsx)(n.strong,{children:"slices"})," vous permettent de r\xe9f\xe9rencer une ",(0,r.jsx)(n.strong,{children:"s\xe9quence contigu\xeb d'\xe9l\xe9ments"})," dans une collection plut\xf4t que la collection enti\xe8re. Une slice est une sorte de ",(0,r.jsx)(n.strong,{children:"r\xe9f\xe9rence"}),", elle n'a donc pas la possession."]}),"\n",(0,r.jsx)(n.h4,{id:"string-slices",children:"String slices"}),"\n",(0,r.jsxs)(n.p,{children:["Une slice de String est une r\xe9f\xe9rence \xe0 une partie d'une ",(0,r.jsx)(n.strong,{children:"String"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'let s = String::from("hello world");\n \nlet hello = &s[0..5];\nlet world = &s[6..11];\n'})}),"\n",(0,r.jsx)(n.p,{children:"Plut\xf4t qu'une r\xe9f\xe9rence \xe0 la cha\xeene enti\xe8re, hello est une r\xe9f\xe9rence \xe0 une partie de la cha\xeene, sp\xe9cifi\xe9e entre crochets [0..5]. Nous cr\xe9ons des slices en utilisant une plage entre crochets en sp\xe9cifiant [starting_index..ending_index], o\xf9 starting_index est la premi\xe8re position dans la slice et ending_index est un de plus que la derni\xe8re position dans la slice."}),"\n",(0,r.jsx)(n.p,{children:"En interne, la structure de donn\xe9es de la slice stocke la position de d\xe9part et la longueur de la tranche, qui correspond \xe0 l'index_fin moins l'index_d\xe9part."}),"\n",(0,r.jsx)(n.p,{children:"Ainsi, dans le cas de let world = &s[6..11];, world serait une slice contenant un pointeur vers l'octet \xe0 l'index 6 de s avec une valeur de longueur de 5."}),"\n",(0,r.jsx)(n.h4,{id:"autre-slices",children:"Autre slices"}),"\n",(0,r.jsxs)(n.p,{children:["Tout comme nous pourrions vouloir faire r\xe9f\xe9rence \xe0 une partie d'une cha\xeene, nous pourrions vouloir faire r\xe9f\xe9rence \xe0 ",(0,r.jsx)(n.strong,{children:"une partie d'un tableau"}),". On ferait comme \xe7a :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"let a = [1, 2, 3, 4, 5];\nlet slice = &a[1..3];\nassert_eq!(slice, &[2, 3]);\n"})}),"\n",(0,r.jsx)(n.p,{children:"Cette tranche est de type &[i32]. Cela fonctionne de la m\xeame mani\xe8re que les tranches de cha\xeene, en stockant une r\xe9f\xe9rence au premier \xe9l\xe9ment et une longueur."}),"\n",(0,r.jsxs)(n.h2,{id:"lenum-option",children:["L'enum ",(0,r.jsx)(n.code,{children:"Option"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Option"})," est une autre \xe9num\xe9ration d\xe9finie par la biblioth\xe8que standard. Le type ",(0,r.jsx)(n.code,{children:"Option"})," encode le sc\xe9nario tr\xe8s courant o\xf9 une valeur peut \xeatre quelque chose ou rien."]}),"\n",(0,r.jsxs)(n.p,{children:["Rust ",(0,r.jsx)(n.strong,{children:"n'a pas"})," la fonctionnalit\xe9 ",(0,r.jsx)(n.strong,{children:"null"})," que beaucoup d'autres langages ont. Null est une valeur qui signifie qu'il n'y a aucune valeur ici. Dans les langages avec null, les variables peuvent toujours \xeatre dans l'un des deux \xe9tats suivants : null ou non-null."]}),"\n",(0,r.jsxs)(n.p,{children:["En tant que tel, Rust n'a pas de valeurs nulles, mais il a une \xe9num\xe9ration qui peut coder le concept d'une valeur pr\xe9sente ou absente. Cette \xe9num\xe9ration est ",(0,r.jsx)(n.code,{children:"Option<T>"}),", et elle est d\xe9finie par la biblioth\xe8que standard comme suit :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"enum Option<T> {\n    None,\n    Some(T),\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["L'\xe9num\xe9ration ",(0,r.jsx)(n.code,{children:"Option<T>"})," est si utile qu'elle est m\xeame incluse dans le pr\xe9lude ; vous n'avez pas besoin de l'inclure explicitement dans la scope. Ses variantes sont \xe9galement incluses dans le pr\xe9lude : vous pouvez utiliser Some et None directement sans le pr\xe9fixe Option ::. L'\xe9num\xe9ration ",(0,r.jsx)(n.code,{children:"Option<T>"})," n'est qu'une \xe9num\xe9ration normale, et ",(0,r.jsx)(n.code,{children:"Some(T)"})," et ",(0,r.jsx)(n.code,{children:"None"})," sont toujours des variantes du type ",(0,r.jsx)(n.code,{children:"Option<T>"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Pour l'instant, tout ce que vous devez savoir \xe0 propos de ",(0,r.jsx)(n.code,{children:"<T>"})," est qu'il s'agit d'un marquer de type qui sera remplac\xe9 par n'importe quel type, cr\xe9ant ainsi une nouvelle \xe9num\xe9ration ",(0,r.jsx)(n.code,{children:"Option"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"let some_number = Some(5);\nlet some_char = Some('e');\n\nlet absent_number: Option<i32> = None;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Le type de some_number est ",(0,r.jsx)(n.code,{children:"Option<i32>"}),". Le type de some_char est ",(0,r.jsx)(n.code,{children:"Option<char>"}),", qui est un type diff\xe9rent."]}),"\n",(0,r.jsxs)(n.p,{children:["Lorsque nous avons une valeur Some, nous savons qu'une valeur ",(0,r.jsx)(n.strong,{children:"est pr\xe9sente"})," et que la valeur est contenue dans Some. Lorsque nous avons une valeur None, cela signifie en quelque sorte la m\xeame chose que null : nous ",(0,r.jsx)(n.strong,{children:"n'avons pas"})," de valeur valide."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Vous devez convertir une ",(0,r.jsx)(n.code,{children:"Option<T>"})," en T avant de pouvoir effectuer des op\xe9rations T avec elle. G\xe9n\xe9ralement, cela aide \xe0 d\xe9tecter l'un des probl\xe8mes les plus courants avec null : supposer que quelque chose n'est pas null alors qu'il l'est r\xe9ellement. Comment faire \xe7a ?"]})}),"\n",(0,r.jsx)(n.h2,{id:"vecteurs",children:"Vecteurs"}),"\n",(0,r.jsxs)(n.p,{children:["Les vecteurs vous permettent de stocker plusieurs valeurs dans une seule structure de donn\xe9es qui place toutes les valeurs les unes \xe0 c\xf4t\xe9 des autres en m\xe9moire. Les vecteurs ne peuvent stocker que des valeurs de ",(0,r.jsx)(n.strong,{children:"m\xeame type"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Pour cr\xe9er un nouveau vecteur vide, nous appelons la fonction ",(0,r.jsx)(n.code,{children:"Vec::new"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"let v: Vec<i32> = Vec::new();\n"})}),"\n",(0,r.jsx)(n.p,{children:"Lorsque nous cr\xe9ons un vecteur pour contenir un type sp\xe9cifique, nous pouvons sp\xe9cifier le type entre crochets."}),"\n",(0,r.jsx)(n.h4,{id:"push",children:"Push"}),"\n",(0,r.jsxs)(n.p,{children:["Pour cr\xe9er un vecteur puis y ajouter des \xe9l\xe9ments, nous pouvons utiliser la m\xe9thode ",(0,r.jsx)(n.strong,{children:"push"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"let mut v = Vec::new();\n\nv.push(5);\nv.push(6);\nv.push(7);\nv.push(8);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Comme pour toute variable, si nous voulons pouvoir changer sa valeur, nous devons la rendre modifiable en utilisant le mot-cl\xe9 ",(0,r.jsx)(n.code,{children:"mut"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"lire-des-\xe9l\xe9ments",children:"Lire des \xe9l\xe9ments"}),"\n",(0,r.jsxs)(n.p,{children:["Il existe deux fa\xe7ons de r\xe9f\xe9rencer une valeur stock\xe9e dans un vecteur : via l'indexation ou en utilisant la m\xe9thode ",(0,r.jsx)(n.code,{children:"get"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'let v = vec![1, 2, 3, 4, 5];\n\nlet third: &i32 = &v[2];\nprintln!("The third element is {third}");\n\nlet third: Option<&i32> = v.get(2);\nmatch third {\n    Some(third) => println!("The third element is {third}"),\n    None => println!("There is no third element."),\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Rust fournit commod\xe9ment la macro ",(0,r.jsx)(n.strong,{children:"vec!"}),", qui cr\xe9era un nouveau vecteur contenant les valeurs que vous lui donnez."]}),"\n",(0,r.jsx)(n.h4,{id:"it\xe9rer-un-vecteur",children:"It\xe9rer un vecteur"}),"\n",(0,r.jsx)(n.p,{children:"Pour acc\xe9der \xe0 tour de r\xf4le \xe0 chaque \xe9l\xe9ment d'un vecteur, nous parcourrons tous les \xe9l\xe9ments plut\xf4t que d'utiliser des indices pour acc\xe9der \xe0 un \xe0 la fois. L'exemple montre comment utiliser une boucle for pour obtenir des r\xe9f\xe9rences immuables \xe0 chaque \xe9l\xe9ment dans un vecteur de valeurs i32 et les imprimer."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'let v = vec![100, 32, 57];\nfor i in &v {\n    println!("{i}");\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Nous pouvons \xe9galement it\xe9rer sur des ",(0,r.jsx)(n.strong,{children:"r\xe9f\xe9rences mutables"})," \xe0 chaque \xe9l\xe9ment dans un vecteur mutable afin d'apporter des modifications \xe0 tous les \xe9l\xe9ments."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"let mut v = vec![100, 32, 57];\nfor i in &mut v {\n    *i += 50;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"accepter-les-arguments-de-la-ligne-de-commande",children:"Accepter les arguments de la ligne de commande"}),"\n",(0,r.jsxs)(n.p,{children:["Pour permettre \xe0 notre programme de lire les valeurs des arguments de ligne de commande que nous lui transmettons, nous aurons besoin de la fonction ",(0,r.jsx)(n.code,{children:"std::env::args"})," fournie dans la biblioth\xe8que standard de Rust. Cette fonction renvoie un ",(0,r.jsx)(n.strong,{children:"it\xe9rateur"})," des arguments de ligne de commande transmis \xe0 notre programme."]}),"\n",(0,r.jsxs)(n.p,{children:["Pour l'instant, vous n'avez besoin de conna\xeetre que deux d\xe9tails sur les it\xe9rateurs : les it\xe9rateurs produisent une ",(0,r.jsx)(n.strong,{children:"s\xe9rie de valeurs"}),", et nous pouvons appeler la m\xe9thode ",(0,r.jsx)(n.code,{children:"collect"})," sur un it\xe9rateur pour le transformer en une collection, telle qu'un vecteur, qui contient tous les \xe9l\xe9ments produits par l'it\xe9rateur."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"use std::env;\n \nfn main() {\n    let args: Vec<String> = env::args().collect();\n    println!(args);\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Sur la premi\xe8re ligne de main, nous appelons ",(0,r.jsx)(n.code,{children:"env::args"}),", et nous utilisons imm\xe9diatement collect pour transformer l'it\xe9rateur en un vecteur contenant toutes les valeurs produites par l'it\xe9rateur."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["La premi\xe8re valeur retourn\xe9e par env::args est le ",(0,r.jsx)(n.strong,{children:"nom de notre ex\xe9cutable"}),"!"]})}),"\n",(0,r.jsx)(n.h3,{id:"enregistrement-des-valeurs-dargument-dans-les-variables",children:"Enregistrement des valeurs d'argument dans les variables"}),"\n",(0,r.jsxs)(n.p,{children:["Le programme est actuellement en mesure d'acc\xe9der aux valeurs sp\xe9cifi\xe9es en tant qu'arguments de ligne de commande. Nous devons maintenant ",(0,r.jsx)(n.strong,{children:"enregistrer"})," les valeurs des deux arguments dans des variables afin de pouvoir utiliser les valeurs dans le reste du programme."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'use std::env;\n \nfn main() {\n    let args: Vec<String> = env::args().collect();\n \n    let query = &args[1];\n    let file_path = &args[2];\n \n    println!("Searching for {}", query);\n    println!("In file {}", file_path);\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"exercises",children:"Exercises"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\xc9crivez une fonction qui re\xe7oit deux nombres comme arguments et les divise. G\xe9rez le cas de la division par z\xe9ro \xe0 l'aide du type ",(0,r.jsx)(n.code,{children:"Option"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\xc9crivez un programme qui re\xe7oit deux nombres de la ligne de commande et les divise. \xc9crivez le r\xe9sultat \xe0 l'\xe9cran. S'il y a une erreur, retournez -1 depuis main."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://jimskapt.github.io/rust-book-fr/ch09-02-recoverable-errors-with-result.html",children:"Result"})," et ",(0,r.jsx)(n.a,{href:"https://doc.rust-lang.org/std/process/fn.exit.html#:~:text=Function%20std%3A%3Aprocess%3A%3Aexit&text=Terminates%20the%20current%20process%20with,for%20consumption%20by%20another%20process.",children:"std::process::exit"})]})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"\xc9crivez un programme qui re\xe7oit en param\xe8tres une commande et deux nombres. La commande est l'une des suivantes : add, sub, mul, div, rem. \xc9crivez le r\xe9sultat \xe0 l'\xe9cran ou renvoyez une erreur."}),"\n",(0,r.jsx)(n.li,{children:"\xc9crivez un programme similaire au pr\xe9c\xe9dent, \xe0 l'exception qu'il prend la commande de la variable d'environnement CMD. Un exemple d'utilisation est CMD=mul cargo run 5 3."}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Utilisez ",(0,r.jsx)(n.a,{href:"https://doc.rust-lang.org/std/env/fn.var.html",children:"env::var()"})," pour prendre la valeur de CMD."]})}),"\n",(0,r.jsxs)(n.ol,{start:"5",children:["\n",(0,r.jsx)(n.li,{children:"\xc9crivez un programme qui prend comme premier argument une commande suivie d'une liste de nombres. Les commandes peuvent \xeatre add, sub, mul, div, avg (moyenne), sort, unique."}),"\n",(0,r.jsx)(n.li,{children:"Modifiez le programme afin qu'il n'ex\xe9cute pas les commandes dans la fonction principale, mais que chaque commande soit ex\xe9cut\xe9e dans sa propre fonction. Les fonctions re\xe7oivent comme arguments les entr\xe9es exactes de la ligne de commande (cha\xeenes, pas de nombres)."}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},2172:(e,n,s)=>{s.d(n,{I:()=>o,M:()=>l});var r=s(1504);const t={},i=r.createContext(t);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);