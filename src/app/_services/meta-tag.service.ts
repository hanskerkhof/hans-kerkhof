import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { environment } from '../../environments/environment';

export class MetaTag {
  name;
  value;
  isFacebook: boolean;

  constructor(name, value, isFacebook: boolean) {
    this.name = name;
    this.value = value;
    this.isFacebook = isFacebook;
  }
}

@Injectable({
  providedIn: 'root'
})
export class MetaTagService {
  private titlePrimaryMeta = 'title';
  private descriptionPrimaryMeta = 'description';
  private authorPrimaryMeta = 'author';

  private urlMeta = 'og:url';
  private typeMeta = 'og:type';
  private titleMeta = 'og:title';
  private descriptionMeta = 'og:description';
  private imageMeta = 'og:image';
  private secureImageMeta = 'og:image:secure_url';

  private twitterUrlMeta = 'twitter:url';
  private twitterTitleMeta = 'twitter:title';
  private twitterDescriptionMeta = 'twitter:description';
  private twitterImageMeta = 'twitter:image';

  constructor(private titleService: Title, private metaService: Meta) {
  }

  public setTitle(title): void {
    this.titleService.setTitle(title);
  }

  public setDefaultMeta() {
    const item = {
      title: '100%IJburg',
      description: '100%IJburg motiveert, inspireert en verbindt ondernemers, winkeliers, zzpers, kunstenaars en muzikanten op en om IJburg. Met als doel alle ondernemende IJburgers zichtbaar en beter vindbaar te maken.',
      author: '100%IJburg',
      url: '/',
      image: 'https://100procentijburg.nl/assets/img/logo_100procentIJBURG_geel_4kant-1200-628.jpg'
    };
    this.setTitle(`${item.title} - 100 procent IJburg`);
    this.setPrimaryTags(
      '' + item.title,
      '' + item.description,
      item.author
    );
    this.setSocialMediaTags(
      `${environment.baseUrl}${item.url}/`,
      'website',
      '' + item.title,
      '' + item.description,
      '' + item.image
    );
  }

  public setPrimaryTags(title, description, author) {
    const tags = [
      new MetaTag(this.titlePrimaryMeta, title, false),
      new MetaTag(this.descriptionPrimaryMeta, description, false),
      new MetaTag(this.authorPrimaryMeta, author, false),
    ];
    this.setTags(tags);
  }

  public setSocialMediaTags(url, type = 'website', title, description, image): void {
    const imageUrl = `${image}`;
    const tags = [
      new MetaTag(this.urlMeta, url, true),
      new MetaTag(this.typeMeta, type, true),
      new MetaTag(this.titleMeta, title, true),
      new MetaTag(this.descriptionMeta, description, true),
      new MetaTag(this.imageMeta, imageUrl, true),
      new MetaTag(this.secureImageMeta, imageUrl, true),
      new MetaTag(this.twitterUrlMeta, url, false),
      new MetaTag(this.twitterTitleMeta, title, false),
      new MetaTag(this.twitterDescriptionMeta, description, false),
      new MetaTag(this.twitterImageMeta, imageUrl, false)
    ];
    this.setTags(tags);
  }

  private setTags(tags: MetaTag[]): void {
    tags.forEach(siteTag => {
      if (siteTag.isFacebook) {
        this.metaService.updateTag({property: siteTag.name, content: siteTag.value});
      } else {
        this.metaService.updateTag({name: siteTag.name, content: siteTag.value});
      }
    });
  }
}
