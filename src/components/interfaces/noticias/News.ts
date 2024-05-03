export interface News {
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  jetpack_featured_media_url: string;
  link: string;
  categories: string;
}
/// debemos de crear una interface ya que typescript no sabe que tipo de dato esta recibiendo