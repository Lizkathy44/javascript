function madlib(adjective, noun, verb, adverb){
    return `The ${adjective} ${noun} ${verb} very ${adverb}`;
}
let mad = madlib('black', 'dog', 'run', 'quickly');
console.log(mad);