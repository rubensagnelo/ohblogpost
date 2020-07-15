import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ohblog-post',
  styleUrl: 'ohblog-post.css',
  shadow: false
})
export class OhblogpostComponent {

  @Prop() tituloultima: string;
  @Prop() textoultima: string;

  @Prop() titulopenultima: string;
  @Prop() textopenultima: string;

  @Prop() tituloantepenultima: string;
  @Prop() textoantepenultima: string;

  render() {

    return <div class="div-Ultimas-Postagens">
              <dl>
                  <dt class="div-Ultimas-Postagens-dt">{this.tituloultima}</dt>
                  <dd class="div-Ultimas-Postagens-dt-dd">{this.textoultima}</dd>
                  <dt class="div-Ultimas-Postagens-dt">{this.titulopenultima}</dt>
                  <dd class="div-Ultimas-Postagens-dt-dd">{this.textopenultima}</dd>
                  <dt class="div-Ultimas-Postagens-dt">{this.tituloantepenultima}</dt>
                  <dd class="div-Ultimas-Postagens-dt-dd">{this.textoantepenultima}</dd>
              </dl>
          </div>

  }
}
