import { Pipe, PipeTransform } from '@angular/core';
import { Post } from './post.model';

@Pipe({
  name: 'byPrice',
  pure: false
})
export class ByPricePipe implements PipeTransform {
  transform(input: Post[], desiredPrice: number){
    console.log(desiredPrice);
    var output: Post[]=[];
    if(!desiredPrice)
    {
      return input;
    }
    else
    {
      for(var i=0;i<input.length;i++){
        if(input[i].price<=desiredPrice){
          output.push(input[i]);
        }
      }
      return output;
    }
  }
}
