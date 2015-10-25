---
layout: post
title: A Quick Start to Vagrant
published: true
categories: beginner
---


##Prerequisites

Knowledge of visualization. Experience in using KVM or Virtual Box.

##Audience

Anybody who wants to test out Vagrant or planning to switch to Vagrant

##What is Vagrant?

If you have used VirtualBox, then you have already played around with images, installing operating systems, creating snapshots. Vagrant offers the same solution, but much more. Instead of images, you work with boxes. (Check out http://www.vagrantbox.es/). You will be playing around with Vagrantfile.

##Steps

-   Download a vagrant box. I downloaded fedora cloud image from https://getfedora.org/en/cloud/download/
    ```
    ~/Downloads/Fedora-Cloud-Base-Vagrant-22-20150521.x86_64.vagrant-libvirt.box
    ```
-   Install Vagrant in the host machine. Please note that my host machine is also fedora.
    ```
    yum install vagrant
    ```
-   Install Vagrant libvirt driver
    ```
    yum install vagrant-libvirt
    ```
-   Create directory
    ```
    mkdir /home/vagrant/fedora_22
    cd /home/vagrant/fedora_22
    ```
-   Add the box and give it a name
    ```
    vagrant box add --name v_fedora_22 ~/Downloads/Fedora-Cloud-Base-Vagrant-22-20150521.x86_64.vagrant-libvirt.box
    ```
-   Check the box lists.
    ```
    vagrant box list
    ```
-   Init the box. You will find the ‘Vagrantfile’ in this directory.Check that out if you want.
    ```
    vagrant init v_fedora_22
    ```
-   Now the machine is ready. If you check up KVM, you can actually see a fedora machine enlisted in the manager. You can start it up and then access it using ssh.
    ```
    vagrant up
    vagarnt ssh
    ```

That’s all. You have successfully launched a vagrant machine. Once you have this working, you can look into the vagrant cli and most importantly the Vagrantfile. You can provision the machine using Puppet / Chef / shell script. Hoping to write about them in the future.
