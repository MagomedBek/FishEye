class MediaFactory{
    constructor(media,name){
        
        if(media.image){
                return new Image(media,name);
        }else{
            return new Video(media,name);
        }

    }
}