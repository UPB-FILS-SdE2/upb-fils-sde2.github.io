"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4e3],{1140:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>c,contentTitle:()=>d,default:()=>a,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var t=s(7624),n=s(2172);const r={sidebar_position:5,description:"Utilisation des descripterus de fichers et dup2"},d="TP 05 - Fichiers et descripteurs de fichiers",l={id:"tp/05",title:"TP 05 - Fichiers et descripteurs de fichiers",description:"Utilisation des descripterus de fichers et dup2",source:"@site/docs/tp/05.md",sourceDirName:"tp",slug:"/tp/05",permalink:"/docs/tp/05",draft:!1,unlisted:!1,editUrl:"https://github.com/UPB-FILS-SdE2/upb-fils-sde2.github.io/edit/main/docs/tp/05.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"Utilisation des descripterus de fichers et dup2"},sidebar:"tutorialSidebar",previous:{title:"TP 04 - Processus et le type Box",permalink:"/docs/tp/04"},next:{title:"Devoir",permalink:"/docs/category/devoir"}},c={},u=[{value:"Resources",id:"resources",level:2},{value:"Linux Standard Streams",id:"linux-standard-streams",level:2},{value:"Les appels syst\xe8me dup et dup2",id:"les-appels-syst\xe8me-dup-et-dup2",level:2},{value:"dup",id:"dup",level:3},{value:"dup2",id:"dup2",level:3},{value:"Redirections",id:"redirections",level:3},{value:"Exercises",id:"exercises",level:2}];function o(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"tp-05---fichiers-et-descripteurs-de-fichiers",children:"TP 05 - Fichiers et descripteurs de fichiers"}),"\n",(0,t.jsx)(i.h2,{id:"resources",children:"Resources"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://doc.rust-lang.org/std/fs/struct.OpenOptions.html",children:"OpenOptions"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://doc.rust-lang.org/std/io/fn.stdin.html",children:"Stdin"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://doc.rust-lang.org/std/io/fn.stdout.html",children:"Stdout"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://docs.rs/nix/0.23.1/nix/unistd/fn.dup.html",children:"dup"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://docs.rs/nix/0.23.1/nix/unistd/fn.dup2.html",children:"dup2"})}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"linux-standard-streams",children:"Linux Standard Streams"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"stdin"})," est le flux d'entr\xe9e standard. Cela accepte le texte comme entr\xe9e. La sortie texte de la commande au shell est transmise via le flux ",(0,t.jsx)(i.code,{children:"stdout"})," (sortie standard). Les messages d'erreur de la commande sont envoy\xe9s via le flux ",(0,t.jsx)(i.code,{children:"stderr"})," (erreur standard)."]}),"\n",(0,t.jsxs)(i.p,{children:["Vous pouvez donc voir qu'il existe deux flux de sortie, ",(0,t.jsx)(i.code,{children:"stdout"})," et ",(0,t.jsx)(i.code,{children:"stderr"}),", et un flux d'entr\xe9e, ",(0,t.jsx)(i.code,{children:"stdin"}),". \xc9tant donn\xe9 que les messages d'erreur et la sortie normale ont chacun leur propre conduit pour les acheminer vers la fen\xeatre du terminal, ils peuvent \xeatre trait\xe9s ind\xe9pendamment les uns des autres."]}),"\n",(0,t.jsxs)(i.p,{children:["Les flux sous Linux, comme presque tout le reste, sont trait\xe9s comme s'ils \xe9taient des ",(0,t.jsx)(i.strong,{children:"fichiers"}),". Vous pouvez lire du texte \xe0 partir d'un fichier et vous pouvez \xe9crire du texte dans un fichier. Ces deux actions impliquent un flux de donn\xe9es. Ainsi, le concept de traitement d'un flux de donn\xe9es en tant que fichier n'est pas si exag\xe9r\xe9."]}),"\n",(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsxs)(i.p,{children:["Chaque instance d'un fichier ouvert associ\xe9 \xe0 un processus se voit attribuer un ",(0,t.jsx)(i.strong,{children:"num\xe9ro unique"})," pour l'identifier. C'est ce qu'on appelle le ",(0,t.jsx)(i.strong,{children:"descripteur de fichier"}),". Chaque fois qu'une action doit \xeatre effectu\xe9e sur un fichier, le descripteur de fichier est utilis\xe9 pour identifier le fichier."]})}),"\n",(0,t.jsx)(i.p,{children:"Ces valeurs sont toujours utilis\xe9es pour stdin, stdout et stderr :"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"0: stdin"}),"\n",(0,t.jsx)(i.li,{children:"1: stdout"}),"\n",(0,t.jsx)(i.li,{children:"2: stderr"}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"les-appels-syst\xe8me-dup-et-dup2",children:"Les appels syst\xe8me dup et dup2"}),"\n",(0,t.jsx)(i.h3,{id:"dup",children:"dup"}),"\n",(0,t.jsxs)(i.p,{children:["L'appel syst\xe8me ",(0,t.jsx)(i.code,{children:"dup()"})," cr\xe9e ",(0,t.jsx)(i.strong,{children:"une copie"})," d'un descripteur de fichier."]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Il utilise le descripteur inutilis\xe9 portant le num\xe9ro le plus bas pour le nouveau descripteur."}),"\n",(0,t.jsx)(i.li,{children:"Si la copie est cr\xe9\xe9e avec succ\xe8s, les descripteurs de fichier d'origine et de copie peuvent \xeatre utilis\xe9s de mani\xe8re interchangeable."}),"\n",(0,t.jsx)(i.li,{children:"Ils se r\xe9f\xe8rent tous les deux au m\xeame descripteur de fichier ouvert et partagent donc les indicateurs de d\xe9calage de fichier et d'\xe9tat de fichier."}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"dup2",children:"dup2"}),"\n",(0,t.jsxs)(i.p,{children:["L'appel syst\xe8me ",(0,t.jsx)(i.code,{children:"dup2()"})," est similaire \xe0 ",(0,t.jsx)(i.code,{children:"dup()"})," mais la diff\xe9rence fondamentale entre eux est qu'au lieu d'utiliser le descripteur de fichier inutilis\xe9 portant le num\xe9ro le plus bas, il utilise le num\xe9ro de descripteur ",(0,t.jsx)(i.strong,{children:"sp\xe9cifi\xe9 par l'utilisateur"}),"."]}),"\n",(0,t.jsx)(i.admonition,{type:"info",children:(0,t.jsxs)(i.p,{children:["Lors de l'appel de ",(0,t.jsx)(i.a,{href:"https://docs.rs/nix/0.23.1/nix/unistd/fn.dup2.html",children:"dup2"})," dans Rust, les param\xe8tres donn\xe9s doivent \xeatre l'ancien descripteur de fichier et le nouveau."]})}),"\n",(0,t.jsx)(i.h3,{id:"redirections",children:"Redirections"}),"\n",(0,t.jsxs)(i.p,{children:["Quand vous voulez rediriger ",(0,t.jsx)(i.code,{children:"stdout"})," vers un fichier vous pouvez le faire en ouvrant un fichier \xe0 l'aide de l'appel syst\xe8me ",(0,t.jsx)(i.code,{children:"open()"}),", puis en dupliquant ce descripteur de fichier sur ",(0,t.jsx)(i.code,{children:"stdout"})," en utilisant ",(0,t.jsx)(i.code,{children:"dup2()"}),", de sorte que la sortie standard soit maintenant repr\xe9sent\xe9e par le fichier ouvert et non par la console."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-rust",children:'use std::fs::File;\nuse std::io::{self, Write};\nuse std::os::unix::io::AsRawFd;\n\nfn main() -> io::Result<()> {\n    // Open a file to redirect stdout\n    let file = File::open("test.txt")?;\n\n    // Get the raw file descriptor\n    let fd = file.as_raw_fd();\n\n    // Redirect stdout to the file\n    unsafe {\n        libc::dup2(fd, libc::STDOUT_FILENO);\n    }\n\n    // Anything printed to stdout will be redirected to the file\n    println!("Hello, redirected stdout!");\n\n    Ok(())\n}\n'})}),"\n",(0,t.jsx)(i.h2,{id:"exercises",children:"Exercises"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["Lisez votre nom \xe0 partir du clavier en utilisant ",(0,t.jsx)(i.a,{href:"https://doc.rust-lang.org/std/io/fn.stdin.html",children:"stdin"}),". Imprimer le nom en utilisant ",(0,t.jsx)(i.a,{href:"https://doc.rust-lang.org/std/io/fn.stdout.html",children:"stdout"}),". N'utilisez pas le println!"]}),"\n",(0,t.jsxs)(i.li,{children:["Imprimer le contenu d'un fichier re\xe7u en tant qu'argument de ligne de commande sur ",(0,t.jsx)(i.a,{href:"https://doc.rust-lang.org/std/io/fn.stdout.html",children:"stdout"}),". N'utilisez pas le println!"]}),"\n",(0,t.jsxs)(i.li,{children:["Lisez 3 nombres depuis le clavier en utilisant ",(0,t.jsx)(i.code,{children:"stdin"}),". \xc9crivez le maximum de ces 3 nombres dans le fichier maximum.txt."]}),"\n",(0,t.jsxs)(i.li,{children:["Copiez le contenu d'un fichier donn\xe9 comme argument depuis la ligne de commande dans un fichier nomm\xe9 ",(0,t.jsx)(i.code,{children:"copy.txt"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["Ouvrez 2 instances du m\xeame fichier (ouvrez le fichier 2 fois). Lisez 10 octets de chaque instance et imprimez-les. Ouvrez une nouvelle instance du fichier et utilisez ",(0,t.jsx)(i.code,{children:"dup()"})," pour faire une copie du descripteur de fichier de cette nouvelle instance. Lisez \xe0 partir des deux descripteurs de fichiers et voyez les diff\xe9rences entre la premi\xe8re situation et celle-ci."]}),"\n",(0,t.jsxs)(i.li,{children:["\xc9crivez la date d'aujourd'hui par ",(0,t.jsx)(i.code,{children:"redirection"})," de stdout dans un fichier appel\xe9 ",(0,t.jsx)(i.code,{children:"output.txt"})," en utilisant la fonction ",(0,t.jsx)(i.a,{href:"https://doc.rust-lang.org/std/io/fn.stdout.html",children:"write_all"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["Lisez 5 noms de filles \xe0 partir du clavier en utilisant ",(0,t.jsx)(i.a,{href:"https://doc.rust-lang.org/std/io/fn.stdin.html",children:"stdin"})," et ecrivez-les dans un fichier appelee ",(0,t.jsx)(i.code,{children:"names.txt"})," en utilisant stdout. Executez encore une fois le programme et lisez 5 noms de gar\xe7ons \xe0 partir du clavier. Il faut ",(0,t.jsx)(i.strong,{children:"ajouter"})," les noms de gar\xe7ons aux noms des filles d\xe9j\xe0 existants dans names.txt, et non pas \xe9craser le fichier!"]}),"\n"]}),"\n",(0,t.jsx)(i.admonition,{type:"tip",children:(0,t.jsxs)(i.p,{children:["Utilisez ",(0,t.jsx)(i.a,{href:"https://doc.rust-lang.org/std/fs/struct.OpenOptions.html",children:"OpenOptions"})," pour ajouter au fichier."]})})]})}function a(e={}){const{wrapper:i}={...(0,n.M)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},2172:(e,i,s)=>{s.d(i,{I:()=>l,M:()=>d});var t=s(1504);const n={},r=t.createContext(n);function d(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);