import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ohblog-post',
  styleUrl: 'ohblog-post.css',
  shadow: false
})
export class OhblogpostComponent {

  @Prop() titulo: string;
  @Prop() texto: string;
  @Prop() data: string;
  @Prop() redator: string;
  
tima: string;

  render() {

    return <div class="div-Ultimas-Postagens">
              <dl>
                  <dt class="div-Ultimas-Postagens-dt">{this.titulo}<br/><br/></dt>
                  <dd class="div-Ultimas-Postagens-dt div-Ultimas-Postagens-dt-dd">{this.texto}<br/><br/></dd>
                  <dd class="div-Ultimas-Postagens-dt-dd">{this.data + " | " + this.redator}<br/><br/><br/></dd>
              </dl>
          </div>

  }
}
