# installer wsl kali linux sur Windows 11 (w11) :

0. Lancer un terminal PowerShell en mode admin 

(clique droit lancer en admin depuis la recherche avec la touche Windows en écrivant PowerShell)

1. ecrire la commande : 
```powershell
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux
```
2. activation de la plateforme de machine virtuelle 
```powershell
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```
3. activation de WSL
```powershell
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```
4. mettre la version par défaut a 2
```powershell
wsl --set-default-version 2
```

5. installer kali depuis le microsoft store 

https://www.microsoft.com/store/productId/9PKR34TNCV07


6. appuyer sur ouvrir (depuis le microsoft store)

7. configuration de l'identifiant et de l'utilisateur

ici on va configurer les mot de passe et identifiant de l'utilisateur 
(a cause/grâce du système linux qui fonctionne avec des utilisateurs et droits)
etant donné que c'est une sorte de machine virtuelle (sous système) 
on se fiche ici du mot de passe de l'utilisateur et de son mdp mais 
pour les personnes qui ont ce système d'exploitation il s'agirait d'une faille
donc (ici seuelement) on mets prenom et mot de passe root 
pour moi du coup ça sera (felix et root)

et voila !

8. pour désinstaller (si besoin un jour)

il existe 3 parties dans windows pour désinstaller un programme/application :

- le __panneau de configuration__ (a taper depuis la barre windows en appuyant sur la touche windows en forme de 4 carrés)
- la zone des application (de windows) pour aller ici il suffit de taper paramètre depuis le même menu décrit précédemment avec la touche windows et ensuite aller dans le volet/onglet application
- la zone des application (de microsoft store) taper application dans la barre de recherche windows (touche windows comme les etapes precedentes) et taper ensuite store si ça apparait ou microsoft store et ensuite aller dans la partie application
cherchez ensuite votre appli a désinstaller.


> [!TIP]
> pour gagner du temps si on se sers souvent du terminal kali (plus que powershell, et CMD, etc...)
> on peut ouvrir directement un terminal linux (WSL) depuis windows en cliquant droit
> sur un des répertoire du bureau par exemple (ou tout autre répertoire/dossier de windows)
> et faire "ouvrir un nouveaui terminal" ou quelque chose de similaire avec la méthode suivante :

pour ouvrir un terminal avec kali a chaque clique droit dans une zone du bureau ou d'un disque :
droit>terminal, ouvrir un terminal cliquer sur l'icone qui represente une fleche [image serait bien] vers le bas
a coté du + de la fenetre actuellement ouverte ou faites clique droit dans la barre ou 
l'onglet est ouvert et cliquer sur paramètre puis cliquer dans la liste a droite sur
démarrage [image serait bien] modifier le profil par défaut avec la liste déroulante
et choisir kali linux et c'est bon (vous êtes libres de customiser les autres paramètre pour les couleurs par exemple ça se fait aussi dans les paramètres a gauche)

[image serait bien]

### pour des outils supplémentaire dans kali linux : 
https://www.kali.org/docs/troubleshooting/common-minimum-setup/
### pour rajouter un GUI sur windows (bar des apps en haut de l'écran (en plus)) :
https://www.kali.org/docs/wsl/win-kex/


<!-- end -->
