declare module 'react-slick' {
    import React from 'react';
  
    interface SliderSettings {
      dots?: boolean;
      infinite?: boolean;
      speed?: number;
      slidesToShow?: number;
      slidesToScroll?: number;
      // Adicione outras opções de configuração conforme necessário
    }
  
    export default class Slider extends React.Component<SliderSettings> {}
  }
  