'use strict';

let icons = {     
	star : 'data:image/png;base64,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',
	starActive : 'data:image/png;base64,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',
	board :'data:image/png;base64,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',
	boardActive :'data:image/png;base64,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', 
	search :'data:image/png;base64,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',
	delete :'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAACZVJREFUeAHtXdurFVUc9pKaeUstuxCI9ywqxEqziHoo8IaYaYLIgXrSh4roqf6GIuwhFOSQD1ZYioL1EKQo2QUxVCwVQlMrtMQLlml2+b44Kzbbvc9eM7N+v7XWnN8PvjNn771mrd/6vm/WzKyZPbtfPwtjwBgwBowBY8AYMAaMAWPAGDAGjAFjwBgwBowBY8AYqD8D/evfxf97OBL/3QaMBW4GhgCDAcZV4ApwHjgLnAYuArWPOhrgVqg2C3gAuA+YBkwARgFFgmY4BhwBDgL7ga+AXwGLhBjglv0MsA6gWP8I4zDqXwssBkYAFhEYoOhdwMcAh29p0dvVz7a3AysBMwNIkI5H0EA38BvQTpRY719CTusB7n4sAjIwEHUtA7j/jSVu0Xb3INclwADAoiQDPEB9DvgOKCpAKuUPIfdngToebKNbcvE4qt4HpCJk1Tz2oi+PytFVn5pvR1c+AKoSnur6G9G3cfWRK2xPnkd154BUxQuVFyeausJSl3dtnLjZCoQiOJd6PkKfx+QtXfXsua//GchFtNB5nkLf51SnMc8aXkbafwKhSc2tPk4mrc5TwnJZ34DVOJWam1DS+b4NTjjnUeu4Cb3j9K00mbnWvw3cDK2rAzh/v9vE72j+z8DR8LqZgOLnNJUbewThVHJtTMBh37b84rs9jgQ3AlkHD/g+AWJvUbm2z/mRrC8orTPxK5ufZwdZxkvIOtctL7W8V+XmAM7w2SRPuA3gCvicnYsJbkGifXl6V2r0OAleR+dggr54YUdK9OZ6N6VuAF7SbU7aXoflZEVIE4S8VekOJPYtwC9dWMgxwO8lTAe4rBwhzzHfQjYmfmVJOlbAY6w3O5ZSLsCjfs2hnpdQNdvzaUszp7/R/2RuP+duRPMGTh4I3Q3wqNhHGI0yPyAXfgVts2JOX6KtJIK3bmuQzDYoPqeXGZOBFExA8ScyIcQgQNMEi/5rNeKfgWhb6779RvFdl2OboFF8l5OmCfajUY7A0WIpWtbY+luJ7zodywStxHc5aZpgoWs0xlLjGn9v4rs+a5vgBBp2w77LoXmpZYJdzQ1rveYXNaW3fh/xXX+1TOAjvstJywQzXYOay240JmmAIuK7fkuboIj4LicNE/AmW9UYidYkv6LNc2qe6pUJKROUEd/lfy/+uQZIbTB8nM0w15jGskuwM44knuJRzDIR2gRVxJ+KDvwIuH5JLZeXIarsOlq3dqdgghzEp6m2lBWz6Hoc/jWnPWOagOJPKkpQT3mtLd+NKJfRLm/AFQ8+kMk1qrWMYYKcxHc6zBNXHw2si2AAdlDTBDmKT45UbiA9EskAWiag0XIZ9t2W75YHkLto8Lv8rrFYS8mRIGfxqcdfgOg9GQsSMAA7KmGC3MV3G+TT4EcsXkfNrqHYy5AmqIv41ORVMfVR8fsJGYCdDWGCOolPTjYAYvENao695Te3X9UEk0qypX2e39zvdq9F7xQ6l6ABSEQVE5TRP1XxycXpMh3yWYczgO1cl8L7WiZIWXynw1AfQYuWmZK4Adh5aRPkID55GO8r7gDfgig3tkDZWEXvQsM7gLJXEXvLm+Kz7jt7K5TIZ95aFTGA6ARDQOIkTJCT+KTSW6siBhgSUCTpqkKaIDfxya23VkUMMFhatcD1hzBBjuKLGSCwPmrV8aDIog0DRUYA3gSSU5xCsk8A31dI+ijWfRL4qUIdMVa94ttoEQN4V+rbuGC5EOK79HI0gbdWRQxw3jGS+DKk+K6ruZlARKscJoJOQLGyc/tO7N6WPCjUuMOXxy1VML63TpT9LPWpYGnxHW/cEFI3gchUMAlI9WKQlvg5mEDsYhA7vw+oMjRJrFtFfA7pRJlIdST4okxnfNd5DwUlRCxbZ1XxOZQTFLNMpGiCd8t0xHed11CwrFih16P4E30TbyrXfDBX1QQ88wjdv7L1id4SNj+RjoYU3xFdFxM81WT2oC/5iDJHWKylhPiuL7mbgLeFjwqqeIvKDkc0gaT4dTABnxkkHmvRgiNLc9nbM3k6dbp5n98pb+7Tp3SqtM3nk/F+rGOCNW1yCvr2YtTWicDQn2uK73LP0QRzgyrdprIReP+qogliiJ+jCX6HJmIzgM1e2K5kgJjiN5qAw3qZ0Nwd8LeI1WIlWnIESS1TEN/1jbuD1E2wTE19NMTdwCXAERR6yV3MNKBMFD3g8829ignuQUeuAb5tFS13AXWrPB2kUZD1gh0iAZuBQY0NevwvJb4TpIwJBiPvrYCrQ2L5jgc3wYvMEu5UURNIi++EK2ICDfGZ14zg6npWuCcRE2iJX8QEWuLv9NRKpNgSBQN0Ggm0xXcm6O1raFriMxden4kWA9DyIcCRIrlsdUwQS3zXz1Ym0BSf92f0j6Z+T8NLlQxA0htNEFv8VibQFJ/t85E90YMO3As4QqSXNAGfvcsrd9Jt+dbPkYCnetJH+435fI72konHkEljctL/S55Tl81dMyf+aNSDyajfk8hGZROUFaoO63WHEj/kAcQ4JMXfDxoTKjmrpyUDv+Dd6cDZlp8WfJNH8aHiDCp6JVRlVk9bBl7EJ0HEb9tCxQ94VaoOw2yKfeBuNvngLoDTpSkSmHNOx8Gp+P1+aCNIzEEtmjeN5CysT+5/gM/kjvo7OWU1Cvh0zsp05umFTmSn+jmfX28CV+PgjVTF9clrIAptMxOU3gg+BHchT9V9NAtehjcq7gBsJCjGwafgzPtpX8FVC1zhcNS3BzAT+HGwG1yp3+IVWPPrqqMJbCTobABu+bUT37mBuwPNK2a5jTicRKvNsO9Eb15y+tnODq4fCXi0H3Jqvpn35F6vQkZ8nFluW2nofDnJk+15flVXzUYFJ/uwCY6j79nN8CHnoDEatW0CQm9ZqdfHCzvZzO0HVbxNZSvwPq91py5c1fx42Xx5Gw76/Nv8YcoNAG95qkp0auuzT92A9485oGyfDR4b8NevUhOxbD68gfOhPqtmhY4vwrr7gbLEx16P9+0vqNB/WxUM8GLIQmAXEFtQ3/Z3Itf5QPYXctCHpGImsuEzii4CvmJolbuAnPgt3RmAhTADw1A/j6S3AJcBLZGb2+FjWTh9y4cz1Hb+Hn1LOkj8PIDTywcAPiuvWahQr1k3j0nWAHMBXtvIOuq4j+JPpj0M3N+DqVhOAPi9hSJxGoWPAUeBgwCF/xrgUF+bqKMB2onDkYLzDDwPp0l41c1deeM1CYK/tHEWOANw12JhDBgDxoAxYAwYA8aAMWAMGAPGgDFgDBgDxoAxYAwYA8ZADRj4F8+M6ojXcrG0AAAAAElFTkSuQmCC',
};

export { icons as default };