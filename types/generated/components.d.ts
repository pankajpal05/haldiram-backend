import type { Schema, Struct } from '@strapi/strapi';

export interface CarrerSliderCarrerSlider extends Struct.ComponentSchema {
  collectionName: 'components_carrer_slider_carrer_sliders';
  info: {
    displayName: 'Carrer Slider';
  };
  attributes: {
    cta: Schema.Attribute.Component<'cta-button.cta-button', false>;
    slide: Schema.Attribute.Component<'description.description', true>;
    tag: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CarrersComponentCarrersComponent
  extends Struct.ComponentSchema {
  collectionName: 'components_carrers_component_carrers_components';
  info: {
    description: '';
    displayName: 'Carrers Component';
  };
  attributes: {
    carrerTeaser: Schema.Attribute.Component<'teaser.teaser', false>;
    heading: Schema.Attribute.String;
    numberTeaser: Schema.Attribute.Component<'teaser.teaser', false>;
    slider: Schema.Attribute.Component<'carrer-slider.carrer-slider', false>;
    socialTeaser: Schema.Attribute.Component<
      'social-teaser.social-teaser',
      false
    >;
  };
}

export interface CtaButtonCtaButton extends Struct.ComponentSchema {
  collectionName: 'components_cta_button_cta_buttons';
  info: {
    description: '';
    displayName: 'CTA Button';
  };
  attributes: {
    Icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface DescriptionDescription extends Struct.ComponentSchema {
  collectionName: 'components_description_descriptions';
  info: {
    description: '';
    displayName: 'Description';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface DynamicTeaserDynamicTeaser extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_teaser_dynamic_teaser_s';
  info: {
    description: '';
    displayName: 'Dynamic Teaser ';
  };
  attributes: {
    cta: Schema.Attribute.Component<'cta-button.cta-button', false>;
    description: Schema.Attribute.Text;
    desktopImage: Schema.Attribute.Media<'images', true>;
    mobileImage: Schema.Attribute.Media<'images', true>;
    tag: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ExperienceComponentExperienceComponent
  extends Struct.ComponentSchema {
  collectionName: 'components_experience_component_experience_components';
  info: {
    description: '';
    displayName: 'Experience Component';
  };
  attributes: {
    metricSection: Schema.Attribute.Component<'metric-card.metric-card', true>;
    teaser: Schema.Attribute.Component<'teaser.teaser', false>;
  };
}

export interface FooterInfoFooterInfo extends Struct.ComponentSchema {
  collectionName: 'components_footer_info_footer_infos';
  info: {
    displayName: 'footerInfo';
  };
  attributes: {
    footerLogo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    footerTagLine: Schema.Attribute.String;
    newsLetterLabel: Schema.Attribute.String;
  };
}

export interface FooterTaglineFooterTagline extends Struct.ComponentSchema {
  collectionName: 'components_footer_tagline_footer_taglines';
  info: {
    displayName: 'Footer Tagline';
  };
  attributes: {
    label: Schema.Attribute.Component<'title.title', true>;
  };
}

export interface FooterFooter extends Struct.ComponentSchema {
  collectionName: 'components_footer_footers';
  info: {
    description: '';
    displayName: 'Footer';
  };
  attributes: {
    address: Schema.Attribute.Text;
    addressLabel: Schema.Attribute.String;
  };
}

export interface HeroBannerHeroBanner extends Struct.ComponentSchema {
  collectionName: 'components_hero_banner_hero_banners';
  info: {
    description: '';
    displayName: 'Hero Banner';
  };
  attributes: {};
}

export interface ImageImage extends Struct.ComponentSchema {
  collectionName: 'components_image_images';
  info: {
    displayName: 'Image';
  };
  attributes: {
    image: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
  };
}

export interface LatestSectionLatestSection extends Struct.ComponentSchema {
  collectionName: 'components_latest_section_latest_sections';
  info: {
    description: '';
    displayName: 'Latest Section';
  };
  attributes: {
    heading: Schema.Attribute.String;
    newsTeaser: Schema.Attribute.Component<'teaser.teaser', true>;
    socialTeaser: Schema.Attribute.Component<
      'social-teaser.social-teaser',
      true
    >;
  };
}

export interface MenuItemMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_menu_item_menu_items';
  info: {
    description: '';
    displayName: 'Menu Item';
  };
  attributes: {
    openInNewTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface MenuMenu extends Struct.ComponentSchema {
  collectionName: 'components_menu_menus';
  info: {
    description: '';
    displayName: 'Menu';
  };
  attributes: {
    children: Schema.Attribute.Component<'menu-item.menu-item', true>;
    openInNewTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface MetricCardMetricCard extends Struct.ComponentSchema {
  collectionName: 'components_metric_card_metric_cards';
  info: {
    description: '';
    displayName: 'Metric Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    subTitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SocialMediaSocialMedia extends Struct.ComponentSchema {
  collectionName: 'components_social_media_social_medias';
  info: {
    displayName: 'Social Media';
  };
  attributes: {
    socailIcon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    socialMediaUrl: Schema.Attribute.String;
  };
}

export interface SocialTeaserSocialTeaser extends Struct.ComponentSchema {
  collectionName: 'components_social_teaser_social_teasers';
  info: {
    description: '';
    displayName: 'socialTeaser';
  };
  attributes: {
    cta: Schema.Attribute.Component<'cta-button.cta-button', false>;
    description: Schema.Attribute.Text;
    Icon: Schema.Attribute.Media<'images'>;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface TeaserTeaser extends Struct.ComponentSchema {
  collectionName: 'components_teaser_teasers';
  info: {
    description: '';
    displayName: 'Teaser';
  };
  attributes: {
    cta: Schema.Attribute.Component<'cta-button.cta-button', false>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images', true>;
    tag: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface TitleTitle extends Struct.ComponentSchema {
  collectionName: 'components_title_titles';
  info: {
    description: '';
    displayName: 'Title';
  };
  attributes: {
    title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface VideoTeaserVideoTeaser extends Struct.ComponentSchema {
  collectionName: 'components_video_teaser_video_teasers';
  info: {
    description: '';
    displayName: 'Media Teaser';
  };
  attributes: {
    cta: Schema.Attribute.Component<'cta-button.cta-button', false>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images', true>;
    tag: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    videoMedia: Schema.Attribute.Media<'videos', true>;
  };
}

export interface VideoVideo extends Struct.ComponentSchema {
  collectionName: 'components_video_videos';
  info: {
    description: '';
    displayName: 'Video';
  };
  attributes: {
    video: Schema.Attribute.Media<'videos', true> & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'carrer-slider.carrer-slider': CarrerSliderCarrerSlider;
      'carrers-component.carrers-component': CarrersComponentCarrersComponent;
      'cta-button.cta-button': CtaButtonCtaButton;
      'description.description': DescriptionDescription;
      'dynamic-teaser.dynamic-teaser': DynamicTeaserDynamicTeaser;
      'experience-component.experience-component': ExperienceComponentExperienceComponent;
      'footer-info.footer-info': FooterInfoFooterInfo;
      'footer-tagline.footer-tagline': FooterTaglineFooterTagline;
      'footer.footer': FooterFooter;
      'hero-banner.hero-banner': HeroBannerHeroBanner;
      'image.image': ImageImage;
      'latest-section.latest-section': LatestSectionLatestSection;
      'menu-item.menu-item': MenuItemMenuItem;
      'menu.menu': MenuMenu;
      'metric-card.metric-card': MetricCardMetricCard;
      'social-media.social-media': SocialMediaSocialMedia;
      'social-teaser.social-teaser': SocialTeaserSocialTeaser;
      'teaser.teaser': TeaserTeaser;
      'title.title': TitleTitle;
      'video-teaser.video-teaser': VideoTeaserVideoTeaser;
      'video.video': VideoVideo;
    }
  }
}
