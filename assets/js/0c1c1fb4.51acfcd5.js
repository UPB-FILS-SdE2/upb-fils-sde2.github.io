"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6916],{5244:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>d,contentTitle:()=>l,default:()=>a,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var n=s(7624),r=s(2172);const t={sidebar_position:2},l="Devoir 2 - Syst\xe8me de Fichiers",o={id:"devoir/02",title:"Devoir 2 - Syst\xe8me de Fichiers",description:"Informations g\xe9n\xe9rales",source:"@site/docs/devoir/02.md",sourceDirName:"devoir",slug:"/devoir/02",permalink:"/docs/devoir/02",draft:!1,unlisted:!1,editUrl:"https://github.com/UPB-FILS-SdE2/upb-fils-sde2.github.io/edit/main/docs/devoir/02.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Devoir 1 - Rustybox",permalink:"/docs/devoir/01"},next:{title:"Devoir 3",permalink:"/docs/devoir/03"}},d={},c=[{value:"Informations g\xe9n\xe9rales",id:"informations-g\xe9n\xe9rales",level:2},{value:"Connaissances \xe9valu\xe9es",id:"connaissances-\xe9valu\xe9es",level:2},{value:"R\xe8gles",id:"r\xe8gles",level:2},{value:"Copiage",id:"copiage",level:2},{value:"Questions",id:"questions",level:2},{value:"Syst\xe8me de Fichiers",id:"syst\xe8me-de-fichiers",level:2},{value:"\xc9num\xe9ration <code>INode</code>",id:"\xe9num\xe9ration-inode",level:3},{value:"Op\xe9rations requises",id:"op\xe9rations-requises",level:3},{value:"mount",id:"mount",level:4},{value:"<code>FileSystem</code> trait",id:"filesystem-trait",level:4},{value:"create",id:"create",level:5},{value:"open",id:"open",level:5},{value:"close",id:"close",level:5},{value:"read",id:"read",level:5},{value:"write",id:"write",level:5},{value:"dup2",id:"dup2",level:5},{value:"seek",id:"seek",level:5},{value:"file descriptor info",id:"file-descriptor-info",level:5},{value:"chmod",id:"chmod",level:5},{value:"stat",id:"stat",level:5},{value:"mkdir",id:"mkdir",level:5},{value:"rmdir",id:"rmdir",level:5},{value:"rm",id:"rm",level:5},{value:"list dir",id:"list-dir",level:5},{value:"rename",id:"rename",level:5},{value:"Structures de donn\xe9es",id:"structures-de-donn\xe9es",level:3},{value:"Ex\xe9cuter le devoir",id:"ex\xe9cuter-le-devoir",level:3}];function u(e){const i={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"devoir-2---syst\xe8me-de-fichiers",children:"Devoir 2 - Syst\xe8me de Fichiers"}),"\n",(0,n.jsx)(i.h2,{id:"informations-g\xe9n\xe9rales",children:"Informations g\xe9n\xe9rales"}),"\n",(0,n.jsx)(i.admonition,{type:"info",children:(0,n.jsxs)(i.p,{children:["Date limite: ",(0,n.jsx)(i.strong,{children:"09 avril, 23:59"}),(0,n.jsx)(i.br,{}),"\n","Points: ",(0,n.jsx)(i.strong,{children:"2 points"})," de la note finale",(0,n.jsx)(i.br,{}),"\n","Lien: ",(0,n.jsx)(i.a,{href:"https://classroom.github.com/a/mQdcTp0s",children:"Devoir 2 - FileSystem"}),(0,n.jsx)(i.br,{}),"\n","T\xe9l\xe9charger en retard: ",(0,n.jsx)(i.strong,{children:"1 points / jour"})," (maximum 4 jours)"]})}),"\n",(0,n.jsx)(i.h2,{id:"connaissances-\xe9valu\xe9es",children:"Connaissances \xe9valu\xe9es"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Utiliser le langage Rust"}),"\n",(0,n.jsx)(i.li,{children:"Comprendre le mode de fonctionnement du syst\xe8me de fichiers"}),"\n",(0,n.jsx)(i.li,{children:"Simuler un syst\xe8me de fichiers"}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"r\xe8gles",children:"R\xe8gles"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:"Le devoir doit contenir un fichier nomm\xe9 Readme.md avec des explications concernant la mani\xe8re choisie pour r\xe9soudre le devoir (-0.1p)"}),"\n",(0,n.jsxs)(i.li,{children:["Le devoir doit \xeatre impl\xe9ment\xe9 en Rust et seulement en utilisant des fonctions de la biblioth\xe8que standard Rust. Toute autre impl\xe9mentation conduira \xe0 l'annulation du devoir.(",(0,n.jsx)(i.strong,{children:"0 points"}),")"]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"copiage",children:"Copiage"}),"\n",(0,n.jsxs)(i.p,{children:["Le devoir est individuel. Toute tentative de copier entra\xeenera ",(0,n.jsx)(i.strong,{children:"0p"})," pour les devoirs. On utilisera un syst\xe8me automatis\xe9 pour d\xe9tecter le copiage. Si on a des doutes, on va vous adresser des questions suppl\xe9mentaires concernant le devoir."]}),"\n",(0,n.jsx)(i.h2,{id:"questions",children:"Questions"}),"\n",(0,n.jsxs)(i.p,{children:["Si vous avez des questions concernant le devoir, posez-les en publiant un issue sur le github ",(0,n.jsx)(i.a,{href:"https://github.com/UPB-FILS-SdE2/questions",children:"https://github.com/UPB-FILS-SdE2/questions"}),' avec le format [filesystem] "le titre de votre question" . Vous aurez besoin d\'un compte github pour publier des questions.']}),"\n",(0,n.jsx)(i.admonition,{type:"danger",children:(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"NE PUBLIEZ PAS DE CODE SOURCE"}),". Cela est consid\xe9r\xe9 comme copiage et vous aller recevoir ",(0,n.jsx)(i.strong,{children:"0p"})," pour le devoir."]})}),"\n",(0,n.jsxs)(i.p,{children:["Si vous voulez recevoir un e-mail lorsque des probl\xe8mes sont signal\xe9s ou lorsqu'il y a de nouveaux messages, acc\xe9dez au site ",(0,n.jsx)(i.a,{href:"https://github.com/UPB-FILS-SdE2/questions",children:"github repository"})," et cliquez sur Watch."]}),"\n",(0,n.jsx)(i.h2,{id:"syst\xe8me-de-fichiers",children:"Syst\xe8me de Fichiers"}),"\n",(0,n.jsx)(i.p,{children:"Le but de ce devoir est d'impl\xe9menter un syst\xe8me de fichiers simplifi\xe9 similaire \xe0 celui utilis\xe9 sous Linux. Vous devrez la mettre en \u0153uvre:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"une structure arborescente qui stocke les fichiers et les dossiers du syst\xe8me de fichiers;"}),"\n",(0,n.jsx)(i.li,{children:"une table de descripteurs de fichiers;"}),"\n",(0,n.jsx)(i.li,{children:"les fonctions permettant d'acc\xe9der au syst\xe8me de fichiers simul\xe9."}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Afin de r\xe9soudre les devoirs, vous devez stocker et g\xe9rer les descripteurs de fichiers internes du syst\xe8me de fichiers personnalis\xe9 afin de pouvoir suivre les fichiers ouverts. Vous pouvez g\xe9rer cette partie comme vous le souhaitez."}),"\n",(0,n.jsx)(i.p,{children:"Apr\xe8s cela, vous devez impl\xe9menter les op\xe9rations de base du syst\xe8me de fichiers qui seront d\xe9taill\xe9es ci-dessous et mettre \xe0 jour la table des descripteurs de fichiers en cons\xe9quence."}),"\n",(0,n.jsx)(i.admonition,{type:"warning",children:(0,n.jsx)(i.p,{children:"Vous devez vous assurer qu'apr\xe8s chaque op\xe9ration le fichier correspondant sera ferm\xe9!"})}),"\n",(0,n.jsxs)(i.h3,{id:"\xe9num\xe9ration-inode",children:["\xc9num\xe9ration ",(0,n.jsx)(i.code,{children:"INode"})]}),"\n",(0,n.jsxs)(i.p,{children:["Le syst\xe8me de fichiers a une structure arborescente qui est repr\xe9sent\xe9e par l'\xe9num\xe9ration ci-dessous. Un inode est une donn\xe9e structure qui garde une trace de tous les fichiers et r\xe9pertoires. Chaque fichier et r\xe9pertoire de notre syst\xe8me de fichiers se voit attribuer un ",(0,n.jsx)(i.code,{children:"INode"}),".\n\xc0 partir du n\u0153ud racine, chaque fois que nous souhaitons cr\xe9er un nouveau fichier ou dossier dans notre syst\xe8me, nous devons en r\xe9alit\xe9 faire cr\xe9ez un nouvel \xe9l\xe9ment ",(0,n.jsx)(i.code,{children:"INode"})," avec les informations n\xe9cessaires."]}),"\n",(0,n.jsx)(i.p,{children:"Il y a 2 champs dans notre \xe9num\xe9ration\xa0:"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"Folder"})," - une structure qui repr\xe9sente un dossier dans notre syst\xe8me de fichiers; le contenu est un","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"HashMap"})," qui contient le nom du dossier ou fichier comme cl\xe9 et les fichiers et r\xe9pertoires enfants du dossier repr\xe9sent\xe9 par ",(0,n.jsx)(i.code,{children:"INode"}),"s;"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"permissions"})," - les autorisations indiquent la lecture/\xe9criture autorisations du dossier"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"File"})," -  une structure qui repr\xe9sente un fichier dans notre syst\xe8me de fichiers;","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"data"})," est un vecteur d'octets qui contient les donn\xe9es \xe0 l'int\xe9rieur du d\xe9poser;"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"permissions"})," - les autorisations indiquent les autorisations de lecture/\xe9criture du fichier"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Exemple de syst\xe8me de fichiers INode:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-json",children:'Folder {\n   contents: {\n       "folder1": Folder {\n           contents: {},\n           permissions: ReadWrite,\n       },\n       "file1": File {\n           data: [],\n           permissions: ReadWrite,\n       },\n   },\n   permissions: ReadWrite,\n}\n'})}),"\n",(0,n.jsx)(i.admonition,{type:"tip",children:(0,n.jsxs)(i.p,{children:["Il est conseill\xe9 de d\xe9finir des fonctions d\xe9di\xe9es \xe0 l'ajout et \xe0 la suppression d'",(0,n.jsx)(i.code,{children:"INodes"})," car cela rendra ces op\xe9rations plus modulaires."]})}),"\n",(0,n.jsx)(i.h3,{id:"op\xe9rations-requises",children:"Op\xe9rations requises"}),"\n",(0,n.jsx)(i.h4,{id:"mount",children:"mount"}),"\n",(0,n.jsxs)(i.p,{children:["Cette fonction monte le syst\xe8me de fichiers (cr\xe9e le n\u0153ud racine) qui va \xeatre utilis\xe9 par les op\xe9rations d\xe9finies dans le Trait du syst\xe8me de fichiers. Il renvoie un un pointeur intelligent (",(0,n.jsx)(i.code,{children:"Box"}),") vers une structure qui impl\xe9mente le trait ",(0,n.jsx)(i.code,{children:"FileSystem"}),"."]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-rust",children:"pub fn mount(_size: usize) -> Box<dyn FileSystem>\n"})}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Bonus"})," - limiter la taille du syst\xe8me de fichiers en utilisant le param\xe8tre ",(0,n.jsx)(i.code,{children:"_size"})]}),"\n",(0,n.jsxs)(i.h4,{id:"filesystem-trait",children:[(0,n.jsx)(i.code,{children:"FileSystem"})," trait"]}),"\n",(0,n.jsx)(i.h5,{id:"create",children:"create"}),"\n",(0,n.jsx)(i.p,{children:"Cette fonction cr\xe9era un fichier s'il n'existe pas et l'ouvrira en mode lecture seule. Il renvoie soit le descripteur de fichier correspondant au fichier sp\xe9cifi\xe9, soit une erreur.\nLes erreurs suivantes doivent \xeatre g\xe9r\xe9es par cette fonction\xa0:"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"InvalidType"})," si le chemin pointe vers un dossier"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"PermissionDenied"})," si le r\xe9pertoire dans lequel nous cr\xe9ons le fichier ne dispose pas des autorisations d'\xe9criture"]}),"\n"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-rust",children:"fn create(\n        &mut self,\n        path: &str,\n        permission_mode: PermissionsMode,\n    ) -> Result<usize, FileSystemError>;\n"})}),"\n",(0,n.jsx)(i.h5,{id:"open",children:"open"}),"\n",(0,n.jsx)(i.p,{children:"Cette fonction tente d'ouvrir un fichier en mode lecture seule. Soit il renvoie le descripteur de fichier correspondant\npour le fichier sp\xe9cifi\xe9 ou une erreur.\nLes erreurs suivantes doivent \xeatre g\xe9r\xe9es par cette fonction\xa0:"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"FileNotFound"})," si le fichier sp\xe9cifi\xe9 par le chemin donn\xe9 en param\xe8tre n'existe pas"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"InvalidType"})," si le chemin pointe vers un dossier"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"PermissionDenied"})," si les autorisations avec lesquelles le fichier a \xe9t\xe9 cr\xe9\xe9 sont compatibles avec les autorisations avec lesquelles nous souhaitons ouvrir le fichier"]}),"\n"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-rust",children:"fn open(&mut self, path: &str, permissions: PermissionsMode) -> Result<usize, FileSystemError>;\n"})}),"\n",(0,n.jsx)(i.h5,{id:"close",children:"close"}),"\n",(0,n.jsx)(i.p,{children:"Cette fonction ferme un fichier ouvert, ce qui signifie qu'elle doit supprimer toutes les informations existantes dont il dispose pour le descripteur de fichier correspondant (fd). Il doit renvoyer l'erreur InvalidFileDescriptor si le descripteur de fichier sp\xe9cifi\xe9 ne correspond \xe0 aucun fichier ouvert."}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-rust",children:"fn close(&mut self, fd: usize) -> Result<(), FileSystemError>;\n"})}),"\n",(0,n.jsx)(i.h5,{id:"read",children:"read"}),"\n",(0,n.jsx)(i.p,{children:"Cette fonction lit le contenu du fichier indiqu\xe9 par le descripteur de fichier, qui est pass\xe9 en param\xe8tre (fd), et remplit le tampon avec eux. Il renvoie soit le nombre d'octets lus, soit une erreur.\nLes erreurs suivantes doivent \xeatre g\xe9r\xe9es par cette fonction\xa0:"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"InvalidFileDescriptor"})," si le descripteur de fichier n'est pas valide"]}),"\n"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-rust",children:"fn read(&mut self, fd: usize, buffer: &[u8]) -> Result<usize, FileSystemError>;\n"})}),"\n",(0,n.jsx)(i.h5,{id:"write",children:"write"}),"\n",(0,n.jsx)(i.p,{children:"Cette fonction \xe9crit une tranche contenant tout le contenu d'un fichier indiqu\xe9 par le descripteur de fichier, qui est pass\xe9 en param\xe8tre (fd). Il renvoie soit le nombre d'octets \xe9crits, soit une erreur.\nLes erreurs suivantes doivent \xeatre g\xe9r\xe9es par cette fonction\xa0:"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"InvalidFileDescriptor"})," si le descripteur de fichier n'est pas valide"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"DiskFull"})," s'il n'y a plus d'espace sur le disque (bonus uniquement)"]}),"\n"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-rust",children:"fn write(&mut self, fd: usize, contents: &[u8]) -> Result<usize, FileSystemError>;\n"})}),"\n",(0,n.jsx)(i.h5,{id:"dup2",children:"dup2"}),"\n",(0,n.jsxs)(i.p,{children:["Cette fonction cr\xe9e une copie du descripteur de fichier sp\xe9cifi\xe9 en utilisant le fd sp\xe9cifi\xe9. Il se comporte de mani\xe8re similaire \xe0 ",(0,n.jsx)(i.code,{children:"dup()"})," sauf qu'il essaiera d'utiliser le fd sp\xe9cifi\xe9 au lieu d'en allouer un nouveau. Si new_fd est ouvert, cette fonction le fermera.\nLes erreurs suivantes doivent \xeatre g\xe9r\xe9es par cette fonction\xa0:"]}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"InvalidFileDescriptor"})," est old_fd n'existe pas"]}),"\n"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-rust",children:"fn dup2(&mut self, old_fd: usize, new_fd: usize) -> Result<(), FileSystemError>;\n"})}),"\n",(0,n.jsx)(i.admonition,{type:"note",children:(0,n.jsxs)(i.p,{children:["Vous pouvez en savoir plus sur dup et dup2 ",(0,n.jsx)(i.a,{href:"https://man7.org/linux/man-pages/man2/dup.2.html",children:"ici"}),"."]})}),"\n",(0,n.jsx)(i.h5,{id:"seek",children:"seek"}),"\n",(0,n.jsx)(i.p,{children:"Cette fonction d\xe9place le curseur de fichier dans le fichier. Il n'y a pas d'erreur OutOfBounds, la position du fichier sera truc\xe9e soit \xe0 0, soit \xe0 la taille du fichier.\nLes erreurs suivantes doivent \xeatre g\xe9r\xe9es par cette fonction\xa0:"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"InvalidFileDescriptor"})," si le descripteur de fichier n'est pas valide"]}),"\n"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-rust",children:"fn seek(&mut self, fd: usize, position: OffsetFrom) -> Result<usize, FileSystemError>;\n"})}),"\n",(0,n.jsx)(i.admonition,{type:"note",children:(0,n.jsxs)(i.p,{children:["Vous pouvez en savoir plus sur seek ",(0,n.jsx)(i.a,{href:"https://man7.org/linux/man-pages/man2/lseek.2.html",children:"ici"}),"."]})}),"\n",(0,n.jsx)(i.h5,{id:"file-descriptor-info",children:"file descriptor info"}),"\n",(0,n.jsx)(i.p,{children:"Cette fonction renvoie une r\xe9f\xe9rence \xe0 la structure FileDescriptorInfo correspondant au param\xe8tre fd. Si le fd n'est pas valide, cette fonction doit renvoyer None."}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-rust",children:"fn file_descriptor_info(&mut self, fd: usize) -> Option<&dyn FileDescriptorInfo>;\n"})}),"\n",(0,n.jsx)(i.h5,{id:"chmod",children:"chmod"}),"\n",(0,n.jsx)(i.p,{children:"Cette fonction modifie les autorisations sur un certain fichier/r\xe9pertoire sp\xe9cifi\xe9 par le chemin.\nLes erreurs suivantes doivent \xeatre g\xe9r\xe9es par cette fonction\xa0:"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"FileNotFound"})," si le fichier au chemin sp\xe9cifi\xe9 n'existe pas"]}),"\n"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-rust",children:"    fn chmod(\n        &mut self,\n        path: &str,\n        permissions_mode: PermissionsMode,\n    ) -> Result<(), FileSystemError>;\n"})}),"\n",(0,n.jsx)(i.h5,{id:"stat",children:"stat"}),"\n",(0,n.jsx)(i.p,{children:"Cette fonction renvoie la structure FileInfo correspondant au param\xe8tre path.\nLes erreurs suivantes doivent \xeatre g\xe9r\xe9es par cette fonction\xa0:"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"FileNotFound"})," si le fichier au chemin sp\xe9cifi\xe9 n'existe pas"]}),"\n"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-rust",children:"fn stat(&mut self, path: &str) -> Result<FileInfo, FileSystemError>;\n"})}),"\n",(0,n.jsx)(i.h5,{id:"mkdir",children:"mkdir"}),"\n",(0,n.jsx)(i.p,{children:"Cette fonction cr\xe9e un nouveau r\xe9pertoire au chemin sp\xe9cifi\xe9.\nLes erreurs suivantes doivent \xeatre g\xe9r\xe9es par cette fonction\xa0:"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"FileExists"})," si le r\xe9pertoire existe d\xe9j\xe0 ou s'il existe un fichier \xe0 la place"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"PermissionDenied"})," si le r\xe9pertoire parent ne dispose pas d'autorisations en \xe9criture"]}),"\n"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-rust",children:"fn mkdir(&mut self, path: &str) -> Result<(), FileSystemError>;\n"})}),"\n",(0,n.jsx)(i.h5,{id:"rmdir",children:"rmdir"}),"\n",(0,n.jsx)(i.p,{children:"Cette fonction supprime le r\xe9pertoire sp\xe9cifi\xe9 par le chemin uniquement si le r\xe9pertoire est vide.\nLes erreurs suivantes doivent \xeatre g\xe9r\xe9es par cette fonction\xa0:"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"DirectoryNotEmpty"})," si le r\xe9pertoire n'est pas vide"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"InvalidFiletype"})," si le chemin pointe vers un fichier"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"PermissionDenied"})," si le r\xe9pertoire parent ne dispose pas d'autorisations en \xe9criture"]}),"\n"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-rust",children:"fn rmdir(&mut self, path: &str) -> Result<(), FileSystemError>;\n"})}),"\n",(0,n.jsx)(i.h5,{id:"rm",children:"rm"}),"\n",(0,n.jsx)(i.p,{children:"Cette fonction supprime le fichier sp\xe9cifi\xe9 par le chemin. Le r\xe9pertoire qui contient le fichier doit disposer des autorisations d'\xe9criture.\nLes erreurs suivantes doivent \xeatre g\xe9r\xe9es par cette fonction\xa0:"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"DirectoryNotEmpty"})," si le r\xe9pertoire n'est pas vide"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"InvalidFiletype"})," si le chemin pointe vers un fichier"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"PermissionDenied"})," si le r\xe9pertoire parent ne dispose pas d'autorisations en \xe9criture"]}),"\n"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-rust",children:"fn rm(&mut self, path: &str) -> Result<(), FileSystemError>;\n"})}),"\n",(0,n.jsx)(i.h5,{id:"list-dir",children:"list dir"}),"\n",(0,n.jsx)(i.p,{children:"Cette fonction r\xe9pertorie tous les fichiers du r\xe9pertoire sp\xe9cifi\xe9 par le param\xe8tre path.\nLes erreurs suivantes doivent \xeatre g\xe9r\xe9es par cette fonction\xa0:"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"PermissionDenied"})," si le r\xe9pertoire ne dispose pas d'autorisations de lecture ou de lecture en \xe9criture"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"FileNotFound"})," si le chemin est inaccessible"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"InvalidType"})," si le chemin sp\xe9cifi\xe9 pointe vers un fichier"]}),"\n"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-rust",children:"fn list_dir(&mut self, path: &str) -> Result<Vec<String>, FileSystemError>;\n"})}),"\n",(0,n.jsx)(i.h5,{id:"rename",children:"rename"}),"\n",(0,n.jsx)(i.p,{children:"Cette fonction renomme un fichier de son ancien chemin vers un nouveau chemin sp\xe9cifi\xe9 par les param\xe8tres. Le new_path ne devrait pas d\xe9j\xe0 exister. Les autorisations n\xe9cessaires \xe0 son fonctionnement sont : Lire dans le r\xe9pertoire parent, Ecrire dans le r\xe9pertoire de destination.\nLes erreurs suivantes doivent \xeatre g\xe9r\xe9es par cette fonction\xa0:"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"FileNotFound"})," si l'ancien chemin n'est pas valide"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"FileExists"})," si new_path existe d\xe9j\xe0"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"PermissionDenied"})," si les permissions sont compatibles avec celles attendues"]}),"\n"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-rust",children:"fn rename(&mut self, old_path: &str, new_path: &str) -> Result<(), FileSystemError>;\n"})}),"\n",(0,n.jsx)(i.h3,{id:"structures-de-donn\xe9es",children:"Structures de donn\xe9es"}),"\n",(0,n.jsxs)(i.p,{children:["Dans le d\xe9p\xf4t de votre travail, lancez ",(0,n.jsx)(i.code,{children:"cargo doc -open"})," pour ouvrir la documentation."]}),"\n",(0,n.jsx)(i.h3,{id:"ex\xe9cuter-le-devoir",children:"Ex\xe9cuter le devoir"}),"\n",(0,n.jsxs)(i.p,{children:["Ecrivez un code qui utilise la biblioth\xe8que que vous avez cr\xe9\xe9e pour votre devoir (",(0,n.jsx)(i.code,{children:"sde2_fs"}),") dans ",(0,n.jsx)(i.code,{children:"sde2_fs/src/tests.rs"})," dans la fonction ",(0,n.jsx)(i.code,{children:"run"}),". Pour l'ex\xe9cuter, \xe9crivez ",(0,n.jsx)(i.code,{children:"cargo test run -- --nocapture"}),"."]})]})}function a(e={}){const{wrapper:i}={...(0,r.M)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},2172:(e,i,s)=>{s.d(i,{I:()=>o,M:()=>l});var n=s(1504);const r={},t=n.createContext(r);function l(e){const i=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(t.Provider,{value:i},e.children)}}}]);