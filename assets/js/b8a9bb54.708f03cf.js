"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6296],{852:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>o,frontMatter:()=>t,metadata:()=>d,toc:()=>a});var s=n(7624),i=n(2172);const t={sidebar_position:3,description:"Le but de ce TP est d'apprendre \xe0 utiliser des fichers, le type Result et utiliser des descripterus de fichers"},l="TP 03 - Systems de fichiers et le type Result",d={id:"tp/03",title:"TP 03 - Systems de fichiers et le type Result",description:"Le but de ce TP est d'apprendre \xe0 utiliser des fichers, le type Result et utiliser des descripterus de fichers",source:"@site/docs/tp/03.md",sourceDirName:"tp",slug:"/tp/03",permalink:"/docs/tp/03",draft:!1,unlisted:!1,editUrl:"https://github.com/UPB-FILS-SdE2/upb-fils-sde2.github.io/edit/main/docs/tp/03.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Le but de ce TP est d'apprendre \xe0 utiliser des fichers, le type Result et utiliser des descripterus de fichers"},sidebar:"tutorialSidebar",previous:{title:"TP 02 - Possession et arguments du programme",permalink:"/docs/tp/02"},next:{title:"TP 04 - Processus et le type Box",permalink:"/docs/tp/04"}},c={},a=[{value:"Resources",id:"resources",level:2},{value:"Le type Result",id:"le-type-result",level:2},{value:"Travail avec les fichiers en Rust",id:"travail-avec-les-fichiers-en-rust",level:2},{value:"Le struct File",id:"le-struct-file",level:3},{value:"Cr\xe9er un fichier",id:"cr\xe9er-un-fichier",level:3},{value:"Ouvrir un fichier existant",id:"ouvrir-un-fichier-existant",level:3},{value:"Lire le contenu d&#39;un fichier",id:"lire-le-contenu-dun-fichier",level:3},{value:"Le struct Metadata",id:"le-struct-metadata",level:3},{value:"Le descripteur de fichier",id:"le-descripteur-de-fichier",level:3},{value:"Raccourcis: unwrap",id:"raccourcis-unwrap",level:3},{value:"L&#39;operateur &#39;?&#39;",id:"loperateur-",level:3},{value:"Sugestions",id:"sugestions",level:2},{value:"Exercises",id:"exercises",level:2}];function u(e){const r={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"tp-03---systems-de-fichiers-et-le-type-result",children:"TP 03 - Systems de fichiers et le type Result"}),"\n",(0,s.jsx)(r.h2,{id:"resources",children:"Resources"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://jimskapt.github.io/rust-book-fr/ch09-02-recoverable-errors-with-result.html",children:"Des erreurs r\xe9cup\xe9rables avec Result"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://jimskapt.github.io/rust-book-fr/ch12-02-reading-a-file.html",children:"Lire un fichier"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://doc.rust-lang.org/stable/std/fs/index.html",children:"std::fs functions"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://doc.rust-lang.org/stable/std/fs/struct.File.html",children:"File"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://doc.rust-lang.org/stable/std/fs/struct.Metadata.html",children:"Metadata"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://doc.rust-lang.org/stable/std/fs/struct.Metadata.html#impl-MetadataExt",children:"MetadataExt"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://doc.rust-lang.org/stable/std/fs/struct.Permissions.html",children:"Permissions"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://doc.rust-lang.org/stable/std/os/unix/fs/trait.PermissionsExt.html",children:"PermissionsExt"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://en.wikipedia.org/wiki/Chmod",children:"Linux permissions"})}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"le-type-result",children:"Le type Result"}),"\n",(0,s.jsxs)(r.p,{children:["Le but de ces types de ",(0,s.jsx)(r.strong,{children:"Result"})," est de coder les informations de ",(0,s.jsx)(r.strong,{children:"gestion des erreurs"}),". Result est c'est une \xe9num\xe9ration avec les variantes:"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["La variante ",(0,s.jsx)(r.code,{children:"Ok"})," qui indique que l'op\xe9ration a r\xe9ussi, et \xe0 ",(0,s.jsx)(r.strong,{children:"l'int\xe9rieur"})," de Ok se trouve la valeur g\xe9n\xe9r\xe9e avec succ\xe8s"]}),"\n",(0,s.jsxs)(r.li,{children:["La variante ",(0,s.jsx)(r.code,{children:"Err"})," qui signifie que l'op\xe9ration a \xe9chou\xe9, et Err contient des informations sur comment ou pourquoi l'op\xe9ration a \xe9chou\xe9."]}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-rust",children:"enum Result<T, E> {\n   Ok(T),\n   Err(E),\n}\n"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"T"})," repr\xe9sente le type de la valeur qui sera renvoy\xe9e en cas de r\xe9ussite dans la variante Ok, et ",(0,s.jsx)(r.code,{children:"E"})," repr\xe9sente le type d'erreur qui sera renvoy\xe9e en cas d'\xe9chec dans la variante Err."]}),"\n",(0,s.jsx)(r.p,{children:"\xc9tant donn\xe9 que Result a ces param\xe8tres de type g\xe9n\xe9riques, nous pouvons utiliser le type Result et les fonctions qui y sont d\xe9finies dans de nombreuses situations diff\xe9rentes o\xf9 la valeur r\xe9ussie et la valeur d'erreur que nous voulons renvoyer peuvent diff\xe9rer."}),"\n",(0,s.jsx)(r.p,{children:"Voila ici un example d'utilisation de Result pour ouvrir un fichier:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-rust",children:'use std::fs::File;\n \nfn main() {\n    let greeting_file_result = File::open("hello.txt");\n \n    let greeting_file = match greeting_file_result {\n        Ok(file) => file,\n        Err(error) => panic!("Problem opening the file: {:?}", error),\n    };\n}\n'})}),"\n",(0,s.jsx)(r.h2,{id:"travail-avec-les-fichiers-en-rust",children:"Travail avec les fichiers en Rust"}),"\n",(0,s.jsx)(r.p,{children:"Pour travailler avec des fichiers on doit utiliser le module fs qui se trouve dans la bilbiotheque standard de Rust."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-rust",children:"use std::fs;\n"})}),"\n",(0,s.jsx)(r.h3,{id:"le-struct-file",children:"Le struct File"}),"\n",(0,s.jsxs)(r.p,{children:["Le struct ",(0,s.jsx)(r.code,{children:"File"})," renvoie un objet donnant acc\xe8s \xe0 un fichier ouvert sur le syst\xe8me de fichiers."]}),"\n",(0,s.jsxs)(r.p,{children:["Une instance d'un fichier peut \xeatre lue et/ou \xe9crite en fonction des *",(0,s.jsx)(r.em,{children:"options"})," avec lesquelles elle a \xe9t\xe9 ouverte. Les fichiers impl\xe9mentent \xe9galement Seek pour modifier le curseur logique que le fichier contient en interne."]}),"\n",(0,s.jsxs)(r.p,{children:["Les fichiers sont ",(0,s.jsx)(r.strong,{children:"automatiquement ferm\xe9s"})," lorsqu'ils sortent de ",(0,s.jsx)(r.strong,{children:"scope"}),". Les erreurs d\xe9tect\xe9es \xe0 la fermeture sont ignor\xe9es par l'impl\xe9mentation de ",(0,s.jsx)(r.code,{children:"Drop"}),". Utilisez la m\xe9thode ",(0,s.jsx)(r.code,{children:"sync_all"})," si ces erreurs doivent \xeatre g\xe9r\xe9es manuellement."]}),"\n",(0,s.jsxs)(r.p,{children:["Pour obtenir le file descriptor d'un fichier on utilise la fonction ",(0,s.jsx)(r.a,{href:"https://doc.rust-lang.org/stable/std/os/fd/trait.AsRawFd.html#tymethod.as_raw_fd",children:"as_raw_fd()"}),"."]}),"\n",(0,s.jsx)(r.h3,{id:"cr\xe9er-un-fichier",children:"Cr\xe9er un fichier"}),"\n",(0,s.jsxs)(r.p,{children:["La fonction ",(0,s.jsx)(r.code,{children:"File::create()"})," ouvre un fichier en mode ",(0,s.jsx)(r.strong,{children:"read-only"}),"."]}),"\n",(0,s.jsx)(r.p,{children:"Cette fonction cr\xe9era un fichier s'il n'existe pas et le tronquera s'il existe."}),"\n",(0,s.jsxs)(r.p,{children:["Selon la plate-forme, cette fonction peut \xe9chouer si ",(0,s.jsx)(r.strong,{children:"le chemin d'acc\xe8s"})," complet au r\xe9pertoire n'existe pas."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-rust",children:'use std::fs::File;\n \nfn main() -> std::io::Result<()> {\n    let mut f = File::create("foo.txt")?;\n    Ok(())\n}\n'})}),"\n",(0,s.jsx)(r.h3,{id:"ouvrir-un-fichier-existant",children:"Ouvrir un fichier existant"}),"\n",(0,s.jsxs)(r.p,{children:["La fonction ",(0,s.jsx)(r.code,{children:"File::open()"})," tente d'ouvrir un fichier en mode read-only."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-rust",children:'use std::fs::File;\n \nfn main() -> std::io::Result<()> {\n    let mut f = File::open("foo.txt")?;\n    Ok(())\n}\n'})}),"\n",(0,s.jsx)(r.h3,{id:"lire-le-contenu-dun-fichier",children:"Lire le contenu d'un fichier"}),"\n",(0,s.jsxs)(r.p,{children:["Pour lire \xe0 partir d'un fichier, nous utilisons la fonction ",(0,s.jsx)(r.code,{children:"read_to_string(file_path)"}),":"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-rust",children:'use std::fs;\nuse std::env;\n \nfn main() {\n \n    println!("In file {}", file_path);\n \n    let contents = fs::read_to_string(file_path)\n        .expect("Should have been able to read the file");\n \n    println!("With text:\\n{contents}");\n}\n'})}),"\n",(0,s.jsx)(r.h3,{id:"le-struct-metadata",children:"Le struct Metadata"}),"\n",(0,s.jsx)(r.p,{children:"Cette struct renvoie informations de m\xe9tadonn\xe9es sur un fichier."}),"\n",(0,s.jsx)(r.p,{children:"Ce module contient des m\xe9thodes pour r\xe9cup\xe9rer des informations sur un fichier telles que le type de fichier, les autorisations, etc."}),"\n",(0,s.jsx)(r.admonition,{type:"tip",children:(0,s.jsxs)(r.p,{children:["Pour consulter toutes les m\xe9thodes disponibles, veuillez lire la documentation suivante: ",(0,s.jsx)(r.a,{href:"https://doc.rust-lang.org/stable/std/fs/struct.Metadata.html",children:"Metadata crate"}),"!"]})}),"\n",(0,s.jsx)(r.h3,{id:"le-descripteur-de-fichier",children:"Le descripteur de fichier"}),"\n",(0,s.jsxs)(r.p,{children:["Un ",(0,s.jsx)(r.strong,{children:"descripteur de fichier"})," est un num\xe9ro qui identifie de mani\xe8re unique un fichier ouvert dans le syst\xe8me d'exploitation d'un ordinateur. Il d\xe9crit une ressource de donn\xe9es et comment cette ressource peut \xeatre accessible."]}),"\n",(0,s.jsxs)(r.p,{children:["Lorsqu'un programme demande d'ouvrir un fichier ",(0,s.jsx)(r.strong,{children:"le kernel"})," fait les actions suivantes:"]}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsx)(r.li,{children:"Accorde l'acc\xe8s"}),"\n",(0,s.jsx)(r.li,{children:"Cr\xe9e une entr\xe9e dans la table de fichiers globale"}),"\n",(0,s.jsx)(r.li,{children:"Fournit au logiciel l'emplacement de cette entr\xe9e"}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["Le descripteur est identifi\xe9 par un ",(0,s.jsx)(r.strong,{children:"entier non n\xe9gatif unique"}),", tel que 0, 12 ou 567. Au moins un descripteur de fichier existe pour chaque fichier ouvert sur le syst\xe8me."]}),"\n",(0,s.jsx)(r.h3,{id:"raccourcis-unwrap",children:"Raccourcis: unwrap"}),"\n",(0,s.jsxs)(r.p,{children:["La m\xe9thode ",(0,s.jsx)(r.strong,{children:"unwrap"})," est une m\xe9thode raccourcie impl\xe9ment\xe9e tout comme l'expression de correspondance que nous avons \xe9crite ci-dessus. Si la valeur Result est la variante Ok, unwrap renverra la valeur \xe0 l'int\xe9rieur de Ok. Si le r\xe9sultat est la variante Err, unwrap appellera la panic! macro pour nous. Voici un exemple de d\xe9ballage en action :"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-rust",children:'use std::fs::File;\n \nfn main() {\n    let greeting_file = File::open("hello.txt").unwrap();\n}\n'})}),"\n",(0,s.jsxs)(r.p,{children:["De m\xeame, la m\xe9thode ",(0,s.jsx)(r.code,{children:"expect"})," nous permet \xe9galement de choisir la panic! Message d'erreur. Utiliser expect au lieu de d\xe9baller et fournir de bons messages d'erreur peut transmettre votre intention et faciliter la recherche de la source d'une panique. La syntaxe de expect ressemble \xe0 ceci :"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-rust",children:'use std::fs::File;\n \nfn main() {\n    let greeting_file = File::open("hello.txt")\n        .expect("hello.txt should be included in this project");\n}\n'})}),"\n",(0,s.jsx)(r.h3,{id:"loperateur-",children:"L'operateur '?'"}),"\n",(0,s.jsxs)(r.p,{children:["Le ",(0,s.jsx)(r.code,{children:"?"})," plac\xe9 apr\xe8s la d\xe9finition d'une valeur de r\xe9sultat pour fonctionner presque de la m\xeame mani\xe8re que l'expression de ",(0,s.jsx)(r.code,{children:"match"})," que nous avons d\xe9finies pour g\xe9rer les valeurs de r\xe9sultat dans l'exemple pour unwrap."]}),"\n",(0,s.jsx)(r.p,{children:"Si la valeur du r\xe9sultat est un Ok, la valeur \xe0 l'int\xe9rieur de l'Ok sera renvoy\xe9e \xe0 partir de cette expression et le programme continuera. Si la valeur est une Err, l'Err sera renvoy\xe9e par toute la fonction comme si nous avions utilis\xe9 le mot-cl\xe9 return afin que la valeur d'erreur soit propag\xe9e au code appelant."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-rust",children:'use std::fs::File;\nuse std::io::{self, Read};\n \nfn read_username_from_file() -> Result<String, io::Error> {\n    let mut username = String::new();\n \n    File::open("hello.txt")?.read_to_string(&mut username)?;\n \n    Ok(username)\n}\n'})}),"\n",(0,s.jsxs)(r.p,{children:["Dans le contexte ci-dessous, le ",(0,s.jsx)(r.code,{children:"?"})," \xe0 la fin de l'appel ",(0,s.jsx)(r.code,{children:"File::open"})," renverra la valeur \xe0 l'int\xe9rieur d'un Ok \xe0 la variable",(0,s.jsx)(r.code,{children:"username_file"}),". Si une erreur se produit, le ",(0,s.jsx)(r.code,{children:"?"})," op\xe9rateur reviendra plus t\xf4t de toute la fonction et donnera n'importe quelle valeur ",(0,s.jsx)(r.code,{children:"Err"})," au code appelant. La m\xeame chose s'applique au ",(0,s.jsx)(r.code,{children:"?"})," \xe0 la fin de l'appel ",(0,s.jsx)(r.code,{children:"read_to_string"}),"."]}),"\n",(0,s.jsx)(r.h2,{id:"sugestions",children:"Sugestions"}),"\n",(0,s.jsxs)(r.admonition,{type:"note",children:[(0,s.jsxs)(r.p,{children:["Transformer un buffer ",(0,s.jsx)(r.code,{children:"(&[u8])"})," en string ",(0,s.jsx)(r.code,{children:"(str)"})," peut \xeatre fait en utilisant:"]}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-rust",children:"std::str::from_utf8(&buffer[0..len]).unwrap()\n"})})]}),"\n",(0,s.jsxs)(r.admonition,{type:"note",children:[(0,s.jsx)(r.p,{children:"Importations utiles:"}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-rust",children:"// utilis\xe9 pour les permissions Linux \nuse std::os::unix::fs::MetadataExt;\n \n// utilis\xe9 pour trouver le descripteur de fichier \nuse std::os::unix::io::AsRawFd;\n \n// utilis\xe9 pour la fonction read \nuse std::io::Read;\n"})})]}),"\n",(0,s.jsx)(r.h2,{id:"exercises",children:"Exercises"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsx)(r.li,{children:"\xc9crivez un programme qui re\xe7oit en param\xe8tre un dossier. Imprimer le contenu du dossier."}),"\n"]}),"\n",(0,s.jsx)(r.admonition,{type:"tip",children:(0,s.jsxs)(r.p,{children:["Utilisez ",(0,s.jsx)(r.a,{href:"https://doc.rust-lang.org/std/fs/fn.read_dir.html",children:"read_dir"}),"."]})}),"\n",(0,s.jsxs)(r.ol,{start:"2",children:["\n",(0,s.jsxs)(r.li,{children:["\xc9crivez un programme qui re\xe7oit en argument de ligne de commande un fichier et une t\xe2che. Mettre en \u0153uvre les t\xe2ches:","\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"print"})," - imprime le contenu du fichier et le file descriptor"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"size"})," - imprime la taille du fichier'"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"owner"})," - affiche l'utilisateur (uid) et le groupe (gid) du fichier"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"mode_number"})," - affiche le mode (permissions) en numero du fichier"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"type"})," - le type de fichier: dossier, fichier, lien, p\xe9riph\xe9rique caract\xe8re, p\xe9riph\xe9rique bloc, \u2026"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"mode_text"})," - affiche le mode (permissions) en text (rwx\u2026) du fichier"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"print_buffer"})," - imprimez le contenu du fichier \xe0 l'aide des fonctions open et read."]}),"\n"]}),"\n"]}),"\n"]})]})}function o(e={}){const{wrapper:r}={...(0,i.M)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},2172:(e,r,n)=>{n.d(r,{I:()=>d,M:()=>l});var s=n(1504);const i={},t=s.createContext(i);function l(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);