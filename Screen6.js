class Screen6{
    constructor(){
        this.title = createElement('h1');
        this.header = createElement('h2');
        this.message = createElement('textarea');
        this.finish = createButton("Finish")
        this.back = createButton("Back")

    }
    hide(){
        this.title.hide();
        this.header.hide();
        this.message.hide();
        this.finish.hide();
        this.back.hide();
        
        if(appState === 3){
            var b = screen1.phoneNo.value();
            fetchName.getContactInfo(b);
            this.message.value(contactInfo.message.PresetMessage)
        }
    }
    show(){
        this.title.show();
        this.header.show();
        this.message.show();
        this.finish.show();
        this.back.show();

    }
    view(){

        this.title.position(500,20);
        this.title.html("Change Details")
        this.title.style('color',rgb(64, 81, 78));
        this.header.position(480,90);
        this.header.html("Preset Message:")
        this.header.style('color',rgb(64, 81, 78));
        this.message.position(480,160);
        this.message.style('height','150px');
        this.message.style('width','250px');
        this.finish.position(650,390);
        this.finish.style('background', rgb(17, 153, 158));
        this.finish.style('color',rgb(143, 240, 227));
        this.finish.mousePressed(()=>{
            var b = screen1.phoneNo.value();
            var i = this.message.value();
            fetchName.updateMessage(b,i);
            appState = 3
        })
        this.back.position(520, 390);
        this.back.style('background', rgb(17, 153, 158));
        this.back.style('color',rgb(143, 240, 227));
        this.back.mousePressed(()=>{
            appState = 4;
        })
    }
}