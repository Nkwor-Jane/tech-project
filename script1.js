const whoLikes = (likes) =>{
    switch(likes.length){
        case 0: 
            return `No one likes this post.`
            break;
        case 1:
            return `${likes[0]} likes this post.`
            break;
        case 2:
            return `${likes[0]} and ${likes[1]} likes this post.`
            break;
        case 3:
            return `${likes[0]}, ${likes[1]} and ${likes[2]} likes this post.`
            break;
        default:
            return `${likes[0]}, ${likes[1]} and ${likes.length -2} likes this post.`
    }
}


console.log(whoLikes([]));
console.log(whoLikes(['Praise']));
console.log(whoLikes(['Praise', 'Mabel']));
console.log(whoLikes(['Bisi', 'Joy', 'Ebuka']));
console.log(whoLikes(['Bisi', 'Joy', 'Ebuka', 'Gabby']));
console.log(whoLikes(['Bisi', 'Joy', 'Ebuka', 'Gabby', 'Yusuf']))
console.log(whoLikes(['Bisi', 'Joy', 'Ebuka', 'Gabby', 'Yusuf', 'Precious']))
console.log(whoLikes(['Bisi', 'Joy', 'Ebuka', 'Gabby', 'Yusuf', 'Precious','Emmanuel']))