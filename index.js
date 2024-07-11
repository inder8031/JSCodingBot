const { Telegraf } = require('telegraf')
const { message } = require('telegraf/filters')
const axios = require('axios')

const bot = new Telegraf('7387291898:AAFT1ZYBe5IqNNlAPYyXy5ds8HWpQw1XS6w')

const linearSearch = function linearSearch(arr, x) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == x) {
            return i;
        }
    }

    return -1;
}

// const binarySearch = async () => {
//     try {
//         const response = await axios.get('https://raw.githubusercontent.com/inder8031/DSA_JS/master/2.Searching/binary_search.js');
//         console.log(response.data);
//         return response.data;
//     } catch(err) {
//         return "Error : " + err;
//     }
// }

bot.start((ctx) => ctx.reply('Welcome to JsDsAlgobot'))

//linearSearch
bot.command('linear_search', (ctx) => ctx.reply(linearSearch))

//binarySearch
bot.command('binary_search', async (ctx) => {
    try {
        const response = await axios.get('https://raw.githubusercontent.com/inder8031/DSA_JS/master/2.Searching/binary_search.js');
        console.log(response.data);
        ctx.reply(response.data);
    } catch(err) {
        return "Error : " + err;
    }
})

bot.command('lower_bound', async (ctx) => {
    try {
        const response = await axios.get('https://raw.githubusercontent.com/inder8031/DSA_JS/master/2.Searching/lower_bound.js');
        // console.log(response.data);
        ctx.reply(response.data);
    } catch(err) {
        return "Error : " + err;
    }
})

bot.command('upper_bound', (ctx) => {
    axios.get('https://raw.githubusercontent.com/inder8031/DSA_JS/master/2.Searching/upper_bound.js')
      .then((response) => {
        ctx.reply(response.data);
      })
      .catch((err) => {
        ctx.reply('Try Again...');
      })
})

bot.command('linked_list', (ctx) => {
    axios.get('https://raw.githubusercontent.com/inder8031/DSA_JS/master/10.%20LinkedLists/linkedlist.js')
      .then((response) => {
        ctx.reply(response.data);
      })
      .catch((err) => {
        ctx.reply('Try Again...');
      })
})

bot.command('doubly_linked_list', (ctx) => {
    axios.get('https://raw.githubusercontent.com/inder8031/DSA_JS/master/10.%20LinkedLists/dll.js')
      .then((response) => {
        ctx.reply(response.data);
      })
      .catch((err) => {
        ctx.reply('Try Again...');
      })
})

bot.command('stack', (ctx) => {
    axios.get('https://raw.githubusercontent.com/inder8031/DSA_JS/master/11.%20Stacks/reverse_stack.js')
      .then((response) => {
        ctx.reply(response.data);
      })
      .catch((err) => {
        ctx.reply('Try Again...');
      })
})

bot.command('valid_parenthesis', (ctx) => {
    axios.get('https://raw.githubusercontent.com/inder8031/DSA_JS/master/11.%20Stacks/valid_parenthesis.js')
      .then((response) => {
        ctx.reply(response.data);
      })
      .catch((err) => {
        ctx.reply('Try Again...');
      })
})

bot.command('palindrome_linked_list', (ctx) => {
    axios.get('https://raw.githubusercontent.com/inder8031/DSA_JS/master/12.%20Linked%20Lists/palindrome_linked_list.js')
      .then((response) => {
        ctx.reply(response.data);
      })
      .catch((err) => {
        ctx.reply('Try Again...');
      })
})

bot.command('reverse_linked_list', (ctx) => {
    axios.get('https://raw.githubusercontent.com/inder8031/DSA_JS/master/12.%20Linked%20Lists/reverse_a_linked_list.js')
      .then((response) => {
        ctx.reply(response.data);
      })
      .catch((err) => {
        ctx.reply('Try Again...');
      })
})

bot.command('next_greater_element', (ctx) => {
    axios.get('https://raw.githubusercontent.com/inder8031/DSA_JS/master/14.%20Stacks%20and%20Next%20greater/next_greater_element.js')
      .then((response) => {
        ctx.reply(response.data);
      })
      .catch((err) => {
        ctx.reply("try again...");
      })
})

bot.command('queue', (ctx) => {
    axios.get('https://raw.githubusercontent.com/inder8031/DSA_JS/master/15.%20Queues/queue.js')
      .then((response) => {
        ctx.reply(response.data);
      })
      .catch((err) => {
        ctx.reply("try again...");
      })
})

bot.command('histogram', (ctx) => {
    axios.get('https://raw.githubusercontent.com/inder8031/DSA_JS/master/17.%20problems%20On%20Stacks/histogram.js')
      .then((response) => {
        ctx.reply(response.data);
      })
      .catch((err) => {
        ctx.reply("try again...");
      })
})

bot.command('remove_duplicates_string', (ctx) => {
    axios.get('https://raw.githubusercontent.com/inder8031/DSA_JS/master/17.%20problems%20On%20Stacks/remove_duplicates_string.js')
      .then((response) => {
        ctx.reply(response.data);
      })
      .catch((err) => {
        ctx.reply("try again...");
      })
})

bot.command('nqueen', (ctx) => {
    axios.get('https://raw.githubusercontent.com/inder8031/DSA_JS/master/21.Backtracking/nqueen.js')
      .then((response) => {
        ctx.reply(response.data);
      })
      .catch((err) => {
        ctx.reply("try again...");
      })
})

bot.command('rat_maze_input', (ctx) => {
    axios.get('https://raw.githubusercontent.com/inder8031/DSA_JS/master/21.Backtracking/ratmazeinput.js')
      .then((response) => {
        ctx.reply(response.data);
      })
      .catch((err) => {
        ctx.reply("try again...");
      })
})


bot.command('minimum_window_substring', (ctx) => {
    axios.get('https://raw.githubusercontent.com/inder8031/DSA_JS/master/22.%20Hashing/minimum_window_substring.js')
      .then((response) => {
        ctx.reply(response.data);
      })
      .catch((err) => {
        ctx.reply("try again...");
      })
})


bot.command('palindrome_pairs', (ctx) => {
    axios.get('https://raw.githubusercontent.com/inder8031/DSA_JS/master/22.%20Hashing/palindrome_pairs.js')
      .then((response) => {
        ctx.reply(response.data);
      })
      .catch((err) => {
        ctx.reply("try again...");
      })
})


bot.command('generic_heap', (ctx) => {
    axios.get('https://raw.githubusercontent.com/inder8031/DSA_JS/master/23.%20Heaps/generic_heap.js')
      .then((response) => {
        ctx.reply(response.data);
      })
      .catch((err) => {
        ctx.reply("try again...");
      })
})

bot.command('heap_using_arrays', (ctx) => {
    axios.get('https://raw.githubusercontent.com/inder8031/DSA_JS/master/23.%20Heaps/heap_using_arrays.js')
      .then((response) => {
        ctx.reply(response.data);
      })
      .catch((err) => {
        ctx.reply("try again...");
      })
})

bot.command('heaps', (ctx) => {
    axios.get('https://raw.githubusercontent.com/inder8031/DSA_JS/master/23.%20Heaps/heaps.js')
      .then((response) => {
        ctx.reply(response.data);
      })
      .catch((err) => {
        ctx.reply("try again...");
      })
})

bot.command('heap_sort', (ctx) => {
    axios.get('https://raw.githubusercontent.com/inder8031/DSA_JS/master/23.%20Heaps/heapsort.js')
      .then((response) => {
        ctx.reply(response.data);
      })
      .catch((err) => {
        ctx.reply("try again...");
      })
})


bot.on('sticker', (ctx) => ctx.reply('❤️'));
// bot.on('text', (ctx) => ctx.reply('Not a command, use / for command'))
bot.on(message('text'), (ctx) => ctx.reply("Text received"))



bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

