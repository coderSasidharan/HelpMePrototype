class Screen4{
    constructor(){
        this.title = createElement('h1');
        this.header = createElement('h2');
        this.changeD = createButton("Update");
        this.help = createButton("Send SMS");
        this.contact1 = createElement('h3');
        this.cName1 = createElement('h4');
        this.cPhone1 = createElement('h4');
        this.cAbout1 = createElement('h4');
        this.contact2 = createElement('h3');
        this.cName2 = createElement('h4');
        this.cPhone2 = createElement('h4');
        this.cAbout2 = createElement('h4');
        this.message = createElement('h2');
        this.presetM = createElement('h4');
    }

    hide(){
        this.title.hide();
        this.header.hide();
        this.changeD.hide();
        this.help.hide();
        this.contact1.hide();
        this.cName1.hide();
        this.cPhone1.hide();
        this.cAbout1.hide();
        this.contact2.hide();
        this.cName2.hide();
        this.cPhone2.hide();
        this.cAbout2.hide();
        this.message.hide();
        this.presetM.hide();
    }

    show(){
        this.title.show();
        this.header.show();
        this.changeD.show();
        this.help.show();
        this.contact1.show();
        this.cName1.show();
        this.cPhone1.show();
        this.cAbout1.show();
        this.contact2.show();
        this.cName2.show();
        this.cPhone2.show();
        this.cAbout2.show();
        this.message.show();
        this.presetM.show();
    }

    view(){
        var b = screen1.phoneNo.value();
        fetchName.getContactInfo(b);
        
        this.title.position(550,5);
        this.title.html("HelpMe")
        this.title.style('color',rgb(64, 81, 78));
        this.header.position(480,50);
        this.header.html("Emergency Contacts:")
        this.header.style('color',rgb(64, 81, 78));
        this.contact1.position(480,90);
        this.contact1.html("Contact 1:");
        this.contact1.style('color',rgb(64, 81, 78));    
        this.cName1.position(480,120);
        this.cName1.html(contactInfo.contacts.ContactName);
        this.cName1.style('color',rgb(64, 81, 78));
        this.cPhone1.position(480,140);
        this.cPhone1.html(contactInfo.contacts.ContactPhoneNumber);
        this.cPhone1.style('color',rgb(64, 81, 78));
        this.cAbout1.position(480,160);
        this.cAbout1.html(contactInfo.contacts.AboutContact);
        this.cAbout1.style('color',rgb(64, 81, 78));
        this.contact2.position(480,200);
        this.contact2.html("Contact 2:");  
        this.contact2.style('color',rgb(64, 81, 78));  
        this.cName2.position(480,230);
        this.cName2.html(contactInfo.contacts.ContactName2);
        this.cName2.style('color',rgb(64, 81, 78));
        this.cPhone2.position(480,250);
        this.cPhone2.html(contactInfo.contacts.ContactPhoneNumber2);
        this.cPhone2.style('color',rgb(64, 81, 78));
        this.cAbout2.position(480,270);
        this.cAbout2.html(contactInfo.contacts.AboutContact2);
        this.cAbout2.style('color',rgb(64, 81, 78));
        this.message.position(480,320);
        this.message.html("Preset Message:");
        this.message.style('color',rgb(64, 81, 78));
        this.presetM.position(480,360);
        this.presetM.html(contactInfo.message.PresetMessage);
        this.presetM.style('color',rgb(64, 81, 78));
        this.changeD.position(580,520);
        this.changeD.style('background',rgb(17, 153, 158));
        this.changeD.style('color',rgb(143, 240, 227));
        this.changeD.mousePressed(()=>{
            appState = 4;
        })
        this.help.position(557,470);
        this.help.style('background',rgb(17, 153, 158));
        this.help.style('color',rgb(143, 240, 227));
        this.help.style('width','100px')
        this.help.style('height', '40px')
        this.help.mousePressed(()=>{
            appState = 6;
            
        })
       
    }
}