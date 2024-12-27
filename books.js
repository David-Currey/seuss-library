const books = [
  {
    id: 1,
    title: 'And to Think That I Saw It on Mulberry Street',
    title_sort: 'And to Think That I Saw It on Mulberry Street',
    year_published: '1937',
    description: 'Marco watches the sight and sounds of people and vehicles traveling along Mulberry Street and dreams up an elaborate story to tell to his father at the end of his walk.',
    image: 'https:\/\/seussology.info\/images\/book-covers\/1.jpg',
    pages: 32
  },
  {
    id: 2,
    title: 'The 500 Hats of Bartholomew Cubbins',
    title_sort: 'Five Hundred Hats of Bartholomew Cubbins',
    year_published: '1938',
    description: 'In the kingdom of Didd, King Derwin is riding through a street past Bartholomew Cubbins, a poor boy in the market. Bartholomew removes his hat, according to the laws, but another hat mysteriously appears; when he attempts to remove this one too, another one appears again, and this continues, even as he removes more and more hats, each growing in extravagance and beauty.',
    image: 'https:\/\/seussology.info\/images\/book-covers\/29.jpg',
    pages: 50
  },
  {
    id: 3,
    title: "The King's Stilts",
    title_sort: "King's Stilts",
    year_published: '1939',
    description: 'The story of King Bertram of Binn, who dedicates himself to safeguarding his kingdom, which has a precarious existence. It is surrounded by water, which is held back from flooding the land by a ring of dike trees, which are in turn subject to attack from flocks of nizzards. To protect the kingdom, a legion of Patrol Cats is organized to keep the nizzards at bay, and King Bertram sees to their care personally.',
    image: 'https:\/\/seussology.info\/images\/book-covers\/36.jpg',
    pages: 32
  },
  {
    id: 4,
    title: 'Horton Hatches the Egg',
    title_sort: 'Horton Hatches the Egg',
    year_published: '1940',
    description: 'An elephant named Horton is convinced by an irresponsible bird named Mayzie to sit on her egg while she takes a short break, which proves to last for months.',
    image: 'https:\/\/seussology.info\/images\/book-covers\/10.jpg',
    pages: 45
  },
  {
    id: 5,
    title: "McElligot's Pool",
    title_sort: "McElligot's Pool",
    year_published: '1947',
    description: 'A Caldecott Honor Book. A boy named Marco is ridiculed for fishing in a small, polluted pool, and tries to justify himself by imagining the fish he might catch.',
    image: 'https:\/\/seussology.info\/images\/book-covers\/21.jpg',
    pages: 57
  },
  {
    id: 6,
    title: 'Thidwick the Big-Hearted Moose',
    title_sort: 'Thidwick the Big-Hearted Moose',
    year_published: '1948',
    description: 'Thidwick, a moose who lives in a herd "about sixty or more", accepts a bug living on his antlers for free, who tells a spider of the free housing, and both accept a "Zinn-a-zu" bird, and this leads to a whole host of freeloaders taking up residence.',
    image: 'https:\/\/seussology.info\/images\/book-covers\/42.jpg',
    pages: 50
  },
  {
    id: 7,
    title: 'Bartholomew and the Oobleck',
    title_sort: 'Bartholomew and the Oobleck',
    year_published: '1949',
    description: 'A Caldecott Honor Book. Bartholomew must rescue his kingdom from a sticky substance called oobleck. ',
    image: 'https:\/\/seussology.info\/images\/book-covers\/2.jpg',
    pages: 60
  },
  {
    id: 8,
    title: 'If I Ran the Zoo',
    title_sort: 'If I Ran the Zoo',
    year_published: '1950',
    description: 'Gerald McGrew visits a zoo and finds that the animals are "not good enough" and describes how he would run the zoo. He would let all of the current animals free and find new, more bizarre and exotic ones.',
    image: 'https:\/\/seussology.info\/images\/book-covers\/19.jpg',
    pages: 45
  },
  {
    id: 9,
    title: 'The Big Brag',
    title_sort: 'Big Brag',
    year_published: '1950',
    description: 'A rabbit and a bear, both boast that they are the "best of the beasts", because of the range of their hearing and smelling abilities, respectively.',
    image: 'https:\/\/seussology.info\/images\/book-covers\/45.jpg',
    pages: 32
  },
  {
    id: 11,
    title: 'Yertle the Turtle',
    title_sort: 'Yertle the Turtle',
    year_published: '1950',
    description: 'Unsatisfied with the stone that serves as his throne, the king turtle commands the other turtles to stack themselves beneath him so that he can see further and expand his kingdom.',
    image: 'https:\/\/seussology.info\/images\/book-covers\/43.jpg',
    pages: 45
  },
  {
    id: 12,
    title: 'Scrambled Eggs Super!',
    title_sort: 'Scrambled Eggs Super!',
    year_published: '1953',
    description: 'A young boy named Peter T. Hooper spins a tale of an incredible meal he created by harvesting the eggs of fantastically exotic birds.',
    image: 'https:\/\/seussology.info\/images\/book-covers\/28.jpg',
    pages: 50
  },
  {
    id: 13,
    title: 'Horton Hears a Who!',
    title_sort: 'Horton Hears a Who!',
    year_published: '1954',
    description: 'Horton the Elephant of the Jungle of Nool hears a small speck of dust talking to him. The speck of dust is actually a tiny planet, home to a city called Who-ville, inhabited by microscopic-sized inhabitants known as Whos and led by a character known as the Mayor.',
    image: 'https:\/\/seussology.info\/images\/book-covers\/11.jpg',
    pages: 32
  },
  {
    id: 14,
    title: 'On Beyond Zebra!',
    title_sort: 'On Beyond Zebra!',
    year_published: '1955',
    description: 'The young narrator, not content with the confines of the ordinary alphabet, invents additional letters beyond Z, with a fantastic creature corresponding to each new letter.',
    image: 'https:\/\/seussology.info\/images\/book-covers\/26.jpg',
    pages: 57
  },
  {
    id: 15,
    title: 'If I Ran the Circus',
    title_sort: 'If I Ran the Circus',
    year_published: '1956',
    description: "Behind Mr. Sneelock's ramshackle store, there's an empty lot. Little Morris McGurk is convinced that if he could just clear out the rusty cans, the dead tree, and the old cars, nothing would prevent him from using the lot for the amazing, world-beating, Circus McGurkus.",
    image: 'https:\/\/seussology.info\/images\/book-covers\/18.jpg',
    pages: 60
  },
  {
    id: 16,
    title: 'The Cat in the Hat',
    title_sort: 'Cat in the Hat',
    year_published: '1957',
    description: 'The Cat in the Hat brings his companions, Thing One and Thing Two, to a household of two young children one rainy day. Chaos ensues while the children wonder how they are going to explain what happens to their mother.',
    image: 'https:\/\/seussology.info\/images\/book-covers\/31.jpg',
    pages: 72
  },
  {
    id: 17,
    title: 'How the Grinch Stole Christmas!',
    title_sort: 'How the Grinch Stole Christmas!',
    year_published: '1957',
    description: 'The Grinch, a bitter, cave-dwelling creature tries to steal everything related to Christmas by impersonating Santa Claus.',
    image: 'https:\/\/seussology.info\/images\/book-covers\/12.jpg',
    pages: 50
  },
  {
    id: 18,
    title: 'The Cat in the Hat Comes Back',
    title_sort: 'Cat in the Hat Comes Back',
    year_published: '1958',
    description: 'The Cat in the Hat returns and while he leaves Thing One and Thing Two at home, he does bring along Little Cat A nested inside his hat. Little Cat A doffs his hat to reveal Little Cat B, who in turn reveals C, and so on down to the microscopic Little Cat Z. Together they try to get rid of a pink ring that has spread from the bathtub to the dress, to the wall, into some shoes, and finally out onto the snow where they work to get rid of it.',
    image: 'https:\/\/seussology.info\/images\/book-covers\/32.jpg',
    pages: 45
  },
  {
    id: 19,
    title: 'Happy Birthday to You!',
    title_sort: 'Happy Birthday to You!',
    year_published: '1959',
    description: 'Deals with a fantastic land, called Katroo, where the Birthday Bird throws everyone an amazing party on their special day.',
    image: 'https:\/\/seussology.info\/images\/book-covers\/8.jpg',
    pages: 50
  },
  {
    id: 20,
    title: 'One Fish Two Fish Red Fish Blue Fish',
    title_sort: 'One Fish Two Fish Red Fish Blue Fish',
    year_published: '1960',
    description: 'A simple rhyming book for learner readers, that has a freewheeling plot about a boy and a girl, and the many amazing creatures they have for friends and pets.',
    image: 'https:\/\/seussology.info\/images\/book-covers\/27.jpg',
    pages: 45
  },
  {
    id: 21,
    title: 'Green Eggs and Ham',
    title_sort: 'Green Eggs and Ham',
    year_published: '1960',
    description: 'Sam-I-am consistently pesters an unnamed character (who is also the narrator) to try green eggs and ham. ',
    image: 'https:\/\/seussology.info\/images\/book-covers\/7.jpg',
    pages: 45
  },
  {
    id: 22,
    title: 'The Sneetches',
    title_sort: 'Sneetches',
    year_published: '1961',
    description: 'Because the star-bellied sneetches are being prejudicial to the plain-bellied Sneetches, a "fix-it-up chappie" named Sylvester McMonkey McBean appears and offers the Sneetches without stars a chance to have them by going through his Star-On Machine.',
    image: 'https:\/\/seussology.info\/images\/book-covers\/40.jpg',
    pages: 45
  },
  {
    id: 26,
    title: "Dr. Seuss's Sleep Book",
    title_sort: 'Sleep Book',
    year_published: '1962',
    description: 'A small bug yawn spreads contagiously and though various creatures, including the Foona Lagoona Baboona, the Collapsable Frink, the Chippendale Mupp, The Offt, and the Krandles.',
    image: 'https:\/\/seussology.info\/images\/book-covers\/5.jpg',
    pages: 60
  },
  {
    id: 27,
    title: "Dr. Seuss's ABC",
    title_sort: 'ABC',
    year_published: '1963',
    description: "An alphabet book which features many strange creatures from the Aunt Annie's Alligator to the Zizzer-Zazzer-Zuzz.",
    image: 'https:\/\/seussology.info\/images\/book-covers\/4.jpg',
    pages: 32
  },
  {
    id: 28,
    title: 'Hop on Pop',
    title_sort: 'Hop on Pop',
    year_published: '1963',
    description: 'Hop on Pop provides simple rhymes to help beginner reading, such as a character named Pat who sits on a hat, a cat, a bat and must not sit on that (which is a cactus).',
    image: 'https:\/\/seussology.info\/images\/book-covers\/9.jpg',
    pages: 45
  },
  {
    id: 29,
    title: 'Fox in Socks',
    title_sort: 'Fox in Socks',
    year_published: '1965',
    description: "Mr. Fox challenges Mr. Knox with rhyming tongue-twisters, which begins to get on Knox's nerves.",
    image: 'https:\/\/seussology.info\/images\/book-covers\/6.jpg',
    pages: 50
  },
  {
    id: 30,
    title: 'I Had Trouble in Getting to Solla Sollew',
    title_sort: 'I Had Trouble in Getting to Solla Sollew',
    year_published: '1965',
    description: 'A tale of a young person who discovers the "troubles" of life and wishes to escape them.',
    image: 'https:\/\/seussology.info\/images\/book-covers\/17.jpg',
    pages: 72
  },
  {
    id: 31,
    title: 'The Foot Book',
    title_sort: 'Foot Book',
    year_published: '1968',
    description: 'Introduces many different creatures with different feet.',
    image: 'https:\/\/seussology.info\/images\/book-covers\/35.jpg',
    pages: 45
  },
  {
    id: 32,
    title: 'I Can Lick 30 Tigers Today!',
    title_sort: 'I Can Lick 30 Tigers Today!',
    year_published: '1969',
    description: 'The title story concerns a boy who brags that he can fight 30 tigers and win.',
    image: 'https:\/\/seussology.info\/images\/book-covers\/15.jpg',
    pages: 32
  },
  {
    id: 35,
    title: "Mr. Brown Can Moo! Can You?: Dr. Seuss's Book of Wonderful Noises!",
    title_sort: "Mr. Brown Can Moo! Can You?: Dr. Seuss's Book of Wonderful Noises!",
    year_published: '1970',
    description: "The book shows the sounds \"Mr. Brown\" can make, such as a cow's \"moo\", a frying pan's \"sizzle\", and a hippo's \"grum\".",
    image: 'https:\/\/seussology.info\/images\/book-covers\/22.jpg',
    pages: 45
  },
  {
    id: 36,
    title: 'The Lorax',
    title_sort: 'Lorax',
    year_published: '1971',
    description: 'The Lorax chronicles the plight of the environment and the Lorax (a mossy, bossy man-like creature resembling an emperor tamarin), who speaks for the trees against the greedy Once-ler.',
    image: 'https:\/\/seussology.info\/images\/book-covers\/37.jpg',
    pages: 45
  },
  {
    id: 37,
    title: 'Marvin K. Mooney Will You Please Go Now!',
    title_sort: 'Marvin K. Mooney Will You Please Go Now!',
    year_published: '1972',
    description: 'Marvin K. Mooney is asked to leave in many ways.',
    image: 'https:\/\/seussology.info\/images\/book-covers\/20.jpg',
    pages: 60
  },
  {
    id: 38,
    title: 'Did I Ever Tell You How Lucky You Are?',
    title_sort: 'Did I Ever Tell You How Lucky You Are?',
    year_published: '1973',
    description: "Discusses an amusing litany of terrible predicaments which could befall a person, with the repeated admonishment that \"you're really quite lucky\".",
    image: 'https:\/\/seussology.info\/images\/book-covers\/3.jpg',
    pages: 50
  },
  {
    id: 39,
    title: 'The Shape of Me and Other Stuff',
    title_sort: 'Shape of Me and Other Stuff',
    year_published: '1973',
    description: 'Explores the adventures of two kids and their journey to learn about all the shapes and sizes that make up our world.',
    image: 'https:\/\/seussology.info\/images\/book-covers\/39.jpg',
    pages: 45
  },
  {
    id: 40,
    title: "There's a Wocket in My Pocket!",
    title_sort: "There's a Wocket in My Pocket!",
    year_published: '1974',
    description: 'A little boy talks about what strange creatures live in his house, such as the Yeps on the steps, the Nooth Grush on his toothbrush, the Yottle in the bottle and the Jertain in the curtain.',
    image: 'https:\/\/seussology.info\/images\/book-covers\/41.jpg',
    pages: 45
  },
  {
    id: 41,
    title: 'Oh, the Thinks You Can Think!',
    title_sort: 'Oh, the Thinks You Can Think!',
    year_published: '1975',
    description: "About the many amazing 'thinks' one can think and the endless possibilities and dreams that imagination can create.",
    image: 'https:\/\/seussology.info\/images\/book-covers\/25.jpg',
    pages: 45
  },
  {
    id: 42,
    title: 'I Can Read with My Eyes Shut!',
    title_sort: 'I Can Read with My Eyes Shut!',
    year_published: '1978',
    description: 'The Cat in the Hat shows a Young Cat the fun he can get out of reading.',
    image: 'https:\/\/seussology.info\/images\/book-covers\/16.jpg',
    pages: 50
  },
  {
    id: 43,
    title: 'Oh Say Can You Say?',
    title_sort: 'Oh Say Can You Say?',
    year_published: '1979',
    description: 'A collection of 25 tongue-twisters such as "Oh my brothers! Oh my sisters! These are Terrible Tongue Twisters!"',
    image: 'https:\/\/seussology.info\/images\/book-covers\/23.jpg',
    pages: 45
  },
  {
    id: 44,
    title: 'Hunches in Bunches',
    title_sort: 'Hunches in Bunches',
    year_published: '1982',
    description: 'A boy is approached by numerous strange creatures with enormous gloved hats on their heads. Each "hunch" points out a different possible course of action with some even contradicting themselves.',
    image: 'https:\/\/seussology.info\/images\/book-covers\/13.jpg',
    pages: 45
  },
  {
    id: 45,
    title: 'The Butter Battle Book',
    title_sort: 'Butter Battle Book',
    year_published: '1984',
    description: 'The conflict between the Yooks and the Zooks over which side of bread to spread butter on leads to an arms race, each competing to make bigger and nastier weapons to outdo the other, which results in the threat of mutual assured destruction.',
    image: 'https:\/\/seussology.info\/images\/book-covers\/30.jpg',
    pages: 72
  },
  {
    id: 46,
    title: "You're Only Old Once!",
    title_sort: "You're Only Old Once!",
    year_published: '1986',
    description: 'An old man journeys through a clinic and sees its inefficiency.',
    image: 'https:\/\/seussology.info\/images\/book-covers\/44.jpg',
    pages: 60
  },
  {
    id: 47,
    title: "Oh, the Places You'll Go!",
    title_sort: "Oh, the Places You'll Go!",
    year_published: '1990',
    description: 'The book concerns the journey of life and its challenges.',
    image: 'https:\/\/seussology.info\/images\/book-covers\/24.jpg',
    pages: 45
  }
]
