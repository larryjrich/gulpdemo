// js object with list of Bob Ross quotes
var bob_ross_quotes = [
    "Let's get crazy. Clouds are free they come and go as they please. All you have to learn here is how to have fun. Trees cover up a multitude of sins. Don't forget to tell these special people in your life just how special they are to you.",
    "All kinds of happy little splashes. In your world you have total and absolute power. Here's something that's fun. We have a fantastic little sky!",
    "Be careful. You can always add more - but you can't take it away. Making all those little fluffies that live in the clouds. You can create the world you want to see and be a part of. You have that power. We'll put all the little clouds in and let them dance around and have fun. Nature is so fantastic, enjoy it. Let it make you happy. We'll throw some old gray clouds in here just sneaking around and having fun.",
    "It's almost like something out of a fairytale book. I spend a lot of time walking around in the woods and talking to trees, and squirrels, and little rabbits and stuff. How do you make a round circle with a square knife? That's your challenge for the day. All you need to paint is a few tools, a little instruction, and a vision in your mind. That's a crooked tree. We'll send him to Washington. This painting comes right out of your heart.",
    "Maybe there's a happy little Evergreen that lives here. It's a good way of getting rid of all your anxieties and hostilities. At home you have unlimited time.",
    "Let's put a touch more of the magic here. I was blessed with a very steady hand; and it comes in very handy when you're doing these little delicate things. Working it up and down, back and forth.",
    "This is the time to get out all your flustrations, much better than kicking the dog around the house or taking it out on your spouse. Trees live in your fan brush, but you have to scare them out. We must be quiet, soft and gentle. I guess I'm a little weird. I like to talk to trees and animals. That's okay though; I have more fun than most people. A tree cannot be straight if it has a crooked trunk.",
    "It's cold, but it's beautiful. This is an example of what you can do with just a few things, a little imagination and a happy dream in your heart. Just let this happen. We just let this flow right out of our minds. Let's build an almighty mountain. This is probably the greatest thing that's ever happened in my life. Nature is so fantastic, enjoy it. Let it make you happy.",
    "Just use the old one inch brush. Take your time. Speed will come later. We have all at one time or another mixed some mud. There we go. So often we avoid running water, and running water is a lot of fun. It is a lot of fun.",
    "We tell people sometimes: we're like drug dealers, come into town and get everybody absolutely addicted to painting. It doesn't take much to get you addicted. What the devil. See there how easy that is.",
    "It's important to me that you're happy. What the devil. You have to make those little noises or it won't work. I was blessed with a very steady hand; and it comes in very handy when you're doing these little delicate things.",
    "I really believe that if you practice enough you could paint the 'Mona Lisa' with a two-inch brush. You don't have to be crazy to do this but it does help. Once you learn the technique, ohhh! Turn you loose on the world; you become a tiger.",
    "I thought today we would do a happy little picture. Get tough with it, get strong. That's a son of a gun of a cloud. Trees grow however makes them happy. We don't really know where this goes - and I'm not sure we really care. Just go back and put one little more happy tree in there.",
    "Sometimes you learn more from your mistakes than you do from your masterpieces. Let's do that again. I like to beat the brush. All you need to paint is a few tools, a little instruction, and a vision in your mind.",
    "Let's go up in here, and start having some fun Put your feelings into it, your heart, it's your world. If we're gonna walk though the woods, we need a little path. Use what happens naturally, don't fight it."
]

// pick 5 random quotes from the list of quotes to display on the page.
function generateQuotes(){
    var quotes_sample = [];
    for (x=0; x<=4; x++) {
        quotes_sample.push(bob_ross_quotes.splice(Math.ceil(Math.random(bob_ross_quotes.length) * bob_ross_quotes.length)-1, 1));
    }
    return quotes_sample;
}
