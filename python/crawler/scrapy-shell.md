# scrapy shell

[https://doc.scrapy.org/en/latest/intro/tutorial.html](https://doc.scrapy.org/en/latest/intro/tutorial.html)

## Extracting data

```text
scrapy shell 'http://quotes.toscrape.com/page/1/'


>>> response.css('title')
[<Selector xpath='descendant-or-self::title' data='<title>Quotes to Scrape</title>'>]

>>> response.css('title::text').getall()
['Quotes to Scrape']

>>> response.css('title').getall()
['<title>Quotes to Scrape</title>']

>>> response.css('title::text').get()
'Quotes to Scrape'

>>> response.css('title::text')[0].get()
'Quotes to Scrape'
```

 “The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.” by Albert Einstein [\(about\)](https://github.com/iicoom/Note/tree/096fa5c16be164ec13f703fa85a0fa09677a0cef/author/Albert-Einstein/README.md) Tags: [change](https://github.com/iicoom/Note/tree/096fa5c16be164ec13f703fa85a0fa09677a0cef/tag/change/page/1/README.md) [deep-thoughts](https://github.com/iicoom/Note/tree/096fa5c16be164ec13f703fa85a0fa09677a0cef/tag/deep-thoughts/page/1/README.md) [thinking](https://github.com/iicoom/Note/tree/096fa5c16be164ec13f703fa85a0fa09677a0cef/tag/thinking/page/1/README.md) [world](https://github.com/iicoom/Note/tree/096fa5c16be164ec13f703fa85a0fa09677a0cef/tag/world/page/1/README.md)

```text
scrapy shell 'http://quotes.toscrape.com'
```

## Storing the scraped data

```text
scrapy crawl quotes -o quotes.json
```

## Following links

*  [Next →](https://github.com/iicoom/Note/tree/096fa5c16be164ec13f703fa85a0fa09677a0cef/page/2/README.md)

```text
>>> response.css('li.next a::attr(href)').get()
'/page/2/'

// builds a full absolute URL using the urljoin() method 


import scrapy

class QuotesSpider(scrapy.Spider):
    name = "quotes"
    start_urls = [
        'http://quotes.toscrape.com/page/1/',
    ]

    def parse(self, response):
        for quote in response.css('div.quote'):
            yield {
                'text': quote.css('span.text::text').get(),
                'author': quote.css('small.author::text').get(),
                'tags': quote.css('div.tags a.tag::text').getall(),
            }

        next_page = response.css('li.next a::attr(href)').get()
        if next_page is not None:
            next_page = response.urljoin(next_page)
            yield scrapy.Request(next_page, callback=self.parse)
```

### response.follow

```text
import scrapy

class QuotesSpider(scrapy.Spider):
    name = "quotes"
    start_urls = [
        'http://quotes.toscrape.com/page/1/',
    ]

    def parse(self, response):
        for quote in response.css('div.quote'):
            yield {
                'text': quote.css('span.text::text').get(),
                'author': quote.css('span small::text').get(),
                'tags': quote.css('div.tags a.tag::text').getall(),
            }

        next_page = response.css('li.next a::attr(href)').get()
        if next_page is not None:
            yield response.follow(next_page, callback=self.parse)
```

