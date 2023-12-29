---
layout: post-en
comments: true
title: SSH key on github - Windows and Linux
lang: en
description: Step-by-step guide on how to generate and add an SSH key to GitHub for secure authentication to repositories. The article covers creating SSH keys using the ED25519 algorithm, offering detailed instructions for Linux and Windows users. Learn how to configure the SSH key on GitHub to facilitate operations such as push and pull without the need for repeated authentication.
cover_image: 'https://i.imgur.com/9GC9TvD.webp'
canonical_url: 'https://ryan.dev.br/2023-04-17-github-ssh-en'
imageAlt: 'A statue of an oktokat (github mascot) in the center, in the background a laptop with the main page of GitHub open.'
tags:
  - github
  - ssh
  - linux
  - windows
author: Ryan Souza
---

- [What is an SSH Key?](#what-is-an-ssh-key)
- [Generating an SSH Key](#generating-an-ssh-key)
  - [Linux](#linux)
  - [Windows](#windows)
- [Conclusão](#conclusão)

## What is an SSH Key?

An SSH key is a pair of keys used to authenticate a user on a server. The public key is used to encrypt data, and the private key is used to decrypt it. The public key is shared with the server, while the private key is kept secret by the user.

There are various encryption algorithms to generate SSH keys, but in this tutorial, I will teach you how to generate an SSH key using the ED25519 algorithm. ED25519 is an elliptic curve digital signature algorithm considered secure and fast.

To learn more about this topic, I recommend this article from Teleport: [Article](https://goteleport.com/blog/comparing-ssh-keys/) (in English)

## Generating an SSH Key

From now on, I will divide this tutorial into two parts, one for Linux and another for Windows.

Before you start, you need to have Git installed on your machine. If you don't, I recommend the official Git documentation to install Git on your machine: [Documentation](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

### Linux

To generate an SSH key on Linux, you need to open the terminal and type the following command:

```bash
ssh-keygen -t ed25519 -C <your-email>
```

{% include lazyload.html image_src="https://i.imgur.com/J56UKtq.webp" image_alt="ssh-keygen on linux" image_title="ssh-keygen on linux" %}

After typing the command, you will be prompted to fill in some information, such as the key name and password. You can type any name as long as you don't forget it; in my case, I just pressed `enter` so that Git would automatically generate the key name and have no password.

With the key generated, you should copy the public key to the clipboard. For this, navigate to the folder where the key was generated (by default it is in the `~/.ssh` folder, as shown in the previous image) and type the following command:

```bash
cat id_ed25519.pub
```

and copy the key that appears on the screen.

{% include lazyload.html image_src="https://i.imgur.com/nT9OTKx.webp" image_alt="getting the key in linux" image_title="getting the key in linux" %}

Now you need to go to the GitHub settings page and add the key you just copied.

here a shortcut for you to go directly to the GitHub SSH keys settings page: [SSH Keys Settings Page](https://github.com/settings/keys)

here you should go to `New SSH key` and paste the key you copied earlier.

{% include lazyload.html image_src="https://i.imgur.com/5L6KrD8.webp" image_alt="paste key on github - linux" image_title="paste key on github - linux" %}

By clicking on Add SSH key, you will add the SSH key to GitHub.

Now, just test if the key was added correctly and clone any repository you have access to, always using the SSH address. To test if the key was added correctly, you can type the following command:

```bash
ssh git@github.com
```

if everything goes well, you will see a success message, and you can clone any repository you have access to; in my case, I cloned my own repository.

{% include lazyload.html image_src="https://i.imgur.com/eDKiWUy.webp" image_alt="Testing ssh key - linux" image_title="Testing ssh key - linux" %}

### Windows

The same process as Linux except that here I used PowerShell to create the SSH key and Git Bash to test the SSH key.

First, you need to open PowerShell and type the following command:

```powershell
ssh-keygen -t ed25519 -C <seu-email>
```

replace `<your-email>` with your GitHub email.

{% include lazyload.html image_src="https://i.imgur.com/bCSWptA.webp" image_alt="ssh-keygen on windows" image_title="ssh-keygen on windows" %}

After typing the command, you will be prompted to fill in some information, such as the key name and password. You can type any name as long as you don't forget it; in my case, I just pressed `enter` so that Git would automatically generate the key name and have no password.

With the key generated, you should copy the public key to the clipboard. For this, navigate to the folder where the key was generated (by default it is in the `C:\Users\ryans\.ssh` folder, as shown in the previous image) and type the following command:

```powershell
type id_ed25519.pub
```

and copy the key that appears on the screen.

{% include lazyload.html image_src="https://i.imgur.com/XdeXkT1.webp" image_alt="getting ssh key in windows" image_title="getting ssh key in windows" %}

Finally, now you need to go to the GitHub settings page and add the key you just copied. here a shortcut for you to go directly to the GitHub SSH keys settings page: [SSH Keys Settings Page](https://github.com/settings/keys)

here you should go to `New SSH key` and paste the key you copied earlier.

{% include lazyload.html image_src="https://i.imgur.com/fYitTGb.webp" image_alt="paste key on github - windows" image_title="paste key on github - windows" %}

By clicking on Add SSH key, you will add the SSH key to GitHub.

Now, just test if the key was added correctly and clone any repository you have access to, always using the SSH address. To test if the key was added correctly, you can type the following command:

```bash
ssh git@github.com
```

if everything goes well, you will see a success message, and you can clone any repository you have access to; in my case, I cloned my own repository.

{% include lazyload.html image_src="https://i.imgur.com/OQaJNyj.webp" image_alt="Testing ssh key - linux" image_title="Testing ssh key - linux" %}

## Conclusão

I hope this tutorial has helped you set up your SSH key on github. If you have any questions, you can contact me through the Contact tab on my website.
