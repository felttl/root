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

5. installer kali dans le microsoft store 

[https://www.microsoft.com/store/productId/9PKR34TNCV07](https://www.microsoft.com/store/productId/9PKR34TNCV07)


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

### petit tip pour gagner du temps si on se sers souvent du terminal kali (plus que powershell, et CMD, etc...)
pour ouvrir un terminal avec kali a chaque clique droit>terminal :
ouvrir un terminal cliquer sur l'icone qui represente une fleche vers le bar 
a coté du + de la fenetre actuellement ouverte ou faites clique droit dans la barre ou 
[image serait bien]
l'onglet est ouvert et cliquer sur paramètre puis cliquer dans la liste a droite sur
démarrage [image serait bien] modifier le profil par défaut avec la liste déroulante
et choisir kali linux et c'est bon (vous êtes libres de customiser les autres paramètre pour les couleurs par exemple ça se fait aussi dans les paramètres a gauche)

[image serait bien]

### pour des outils supplémentaire dans kali linux : 
	- https://www.kali.org/docs/troubleshooting/common-minimum-setup/
### pour rajouter un GUI sur windows (bar des apps en haut de l'écran (en plus)) :
	- https://www.kali.org/docs/wsl/win-kex/
### end