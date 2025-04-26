---
title: "How to Generate and Add an SSH Key to GitHub"
summary: "Step-by-step guide to create and configure an SSH key on GitHub using the ED25519 algorithm, with instructions for Linux and Windows."
date: "Apr 17 2023"
draft: false
tags:
- GitHub
- SSH
- Linux
- Windows
id: 1572979
lang: "en"
---

![Cover](https://i.imgur.com/9GC9TvD.webp)

- [What is an SSH key?](#what-is-an-ssh-key)
- [Generating an SSH key](#generating-an-ssh-key)
  - [Linux](#linux)
  - [Windows](#windows)
- [References](#references)

## What is an SSH key?

An <abbr title="Secure Shell">SSH</abbr> key is a pair of keys used to authenticate a user on a server. The public key is used to encrypt data, and the private key is used to decrypt data. The public key is shared with the server, and the private key is kept secret by the user.

There are several types of encryption algorithms for generating <abbr title="Secure Shell">SSH</abbr> keys, but in this tutorial, I'll teach you how to generate an <abbr title="Secure Shell">SSH</abbr> key using the <abbr title="Edwards-curve Digital Signature Algorithm 25519">ED25519</abbr> algorithm. The <abbr title="Edwards-curve Digital Signature Algorithm 25519">ED25519</abbr> algorithm is an elliptic curve digital signature algorithm that is considered secure and fast.

To learn more about the topic, I recommend this article from Teleport: [Article](https://goteleport.com/blog/comparing-ssh-keys/)

## Generating an SSH key

From now on, I'll separate this tutorial into two parts, one for Linux and one for Windows.

Before starting, you need to have git installed on your machine. If you don't have it, I recommend the official git documentation to install git on your machine: [Documentation](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

### Linux

To generate an <abbr title="Secure Shell">SSH</abbr> key on Linux, you need to open the terminal and type the following command:

```bash
ssh-keygen -t ed25519 -C <your-email>
```

![ssh-keygen on linux](https://i.imgur.com/J56UKtq.webp)

After typing the command, you'll be asked to fill in some data, such as the key name and key password. You can type any name as long as you don't forget it; in my case, I just pressed <kbd>Enter</kbd> to have git generate the key name automatically and for the key to have no password.

With the key generated, you must copy the public key to the clipboard. To do this, navigate to the folder where the key was generated (by default it's in the `~/.ssh` folder, as shown in the previous image) and type the following command:

```bash
cat id_ed25519.pub
```

and copy the key that appears on the screen.

![getting the key in linux](https://i.imgur.com/nT9OTKx.webp)

Now you need to go to the GitHub settings page and add the key you just copied.

Here's a shortcut to go directly to GitHub's SSH keys settings page: [SSH keys settings page](https://github.com/settings/keys)

Here you should go to `New SSH key` and paste the key you copied earlier.

![paste key on github - linux](https://i.imgur.com/5L6KrD8.webp)

By clicking on Add <abbr title="Secure Shell">SSH</abbr> key, you'll add the <abbr title="Secure Shell">SSH</abbr> key to GitHub.

Done, now you just need to test if the key was added correctly and clone any repository you have access to always using the SSH address. To test if the key was added correctly, you can type the following command:

```bash
ssh git@github.com
```

if everything goes well, you'll see a success message, and you can already clone any repository you have access to; in my case, I cloned my own repository.

![Testing ssh key - linux](https://i.imgur.com/eDKiWUy.webp)

### Windows

Same process as Linux with the exception that here I used PowerShell to create the <abbr title="Secure Shell">SSH</abbr> key and Git Bash to test the SSH key.

First, you need to open PowerShell and type the following command:

```powershell
ssh-keygen -t ed25519 -C <your-email>
```

replace `<your-email>` with your GitHub email.

![ssh-keygen on windows](https://i.imgur.com/bCSWptA.webp)

After typing the command, you'll be asked to fill in some data, such as the key name and key password. You can type any name as long as you don't forget it; in my case, I just pressed <kbd>Enter</kbd> to have git generate the key name automatically and for the key to have no password.

With the key generated, you must copy the public key to the clipboard. To do this, navigate to the folder where the key was generated (by default it's in the `C:\Users\ryans\.ssh` folder, as shown in the previous image) and type the following command:

```powershell
type id_ed25519.pub
```

and copy the key that appears on the screen.

![getting ssh key in windows](https://i.imgur.com/XdeXkT1.webp)

Finally, now you need to go to the GitHub settings page and add the key you just copied. Here's a shortcut to go directly to GitHub's SSH keys settings page: [SSH keys settings page](https://github.com/settings/keys)

Here you should go to `New SSH key` and paste the key you copied earlier.

![paste key on github - windows](https://i.imgur.com/fYitTGb.webp)

By clicking on Add <abbr title="Secure Shell">SSH</abbr> key, you'll add the <abbr title="Secure Shell">SSH</abbr> key to GitHub.

Now you just need to verify that the SSH key works. To do this, you need to open Git Bash and type the following command:

```bash
ssh git@github.com
```

if everything goes well, you'll see a success message, and you can already clone any repository you have access to; in my case, I cloned my own repository.

![Testing ssh key - linux](https://i.imgur.com/OQaJNyj.webp)

## References

- [GitHub Documentation](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)

I hope this tutorial has helped you configure your <abbr title="Secure Shell">SSH</abbr> key on GitHub. If you have any questions or suggestions, leave a comment below or contact me through [LinkedIn](https://www.linkedin.com/in/ryan25/).