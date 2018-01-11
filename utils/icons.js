
const rightArrow = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAgCAYAAAASYli2AAABGElEQVRIS63VPXLCMBAF4PdSqCaTJnegzAE8SvpQcQ2gTp8DALcgRwCS+FomeBmTwViDjVdrqdOM5pNWTz9E4samV2R+WfVd/jO3zlODFSbgrIIIWVnRM3jI3j5LyEdzVVb0DBbev0iJLcDHoei15ERoGEoCNABTlH8DXlCU2IphT1vBIWgnaEXvgha0F4xFVWAMqga1aBR4RbkTYBRcU2Lpfr8X0eCf9+/HI79AuAYoBBcu36+iwD7s/+lTNg2mBrWYCozBesFY7C5owTpBK9YKDsFuwG7sYe7y3VpzwupzmAKrV5gKq8FD9ropgWl4N/Vlhn85ABmPXfH0vAFlUnUJGxaEckFJ7rUBtIUUPA4CkIBo0uwacwI71Okh4AtyGwAAAABJRU5ErkJggg==";
const dayMark = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA8CAYAAAA+CQlPAAAAAXNSR0IArs4c6QAAA0pJREFUaAXl2b2LE0EUAPD39jaJyilE8AQbC+0sBMHCQhKMIsFCPMFKPGxVEPxArEysLNRG/wJL9RC9SrhIDizFzs76xCsULkcw2STPeeFW1kl2d5Lsx8zeNLs7+2byfju7M3t7CKJ0ymdrQINHvK9jQYQtIlwX23UgElv8aoP9Hpsfv0+bL7oNdce7eXq34kJ8I4B3+Tl8iY3GT++5sP1/cA40Ec95D+8IsJ7lofgUm2+2uC6s/AfnYFPxnDsCblgIN+1m4y0fBxVLPllortYArbpcb8IxAS0MiF53SpU6iUkhKGffkyaP/BCMuJzfu+carqy0x12AkRF3g0we+aGB6HK31X7lN/K+I+5egMRHHuGJGI0/7u+rbsWdfUHc6idH4/FxYa0xslSHwrmjJPF53FeEudZCb2AdGEWMr7F32V+cdve5gN+QIwSQLMQr8oSnBOfOksIz3IHWC3GLXpURfsf5nHXYcejBODi34dk+h/uPeJc632dc/hGTn3me7bvw+57XpAznRibjEQZ3qVI56OIngpuMJ4L5bp9uTQ03GS8mtEszwU3Fi1E/RuXzRzn/iW9194qZiu9B7yLnbnsh0+zzhCeWOrFaRvf3fK5g34aO9VA5n+L8D9j4pRQulskTHDgznDuJGu90nEUgPMV9q5Tc5uZ9lbhhDOIh3kYC546ixWNJrL3KLzDQ79c5B5UinvMhfKZnXP4hE9Z5RIoezhdCdzyv55xnpCPOHXLRHc85xgI3AR8bXHd8rHCd8ZEtZ4z0K5Mudbny6SVownW//uR6XK31uqWKXB14nAicM5gE32t+viO+lp4JzNxzkqrVJfEFxlMTvpsYnFNRxYuXl+PiHbganv52hOPsVo7dDoz9GZcTClvqHGp9EG3Oye2Cjp0eLRPSYlCMfE75m5vccNbjpL7hjcuzsPYJEx9xN5GwkXfj4tqmBmdQmvhU4WniU4enhdcCngZeG3jSeK3gSeK1gyeF1xKeBF5beNx4reFx4rWHx4U3Ah4H3hh41Hij4FHijYNHhTcSHgXeWPiseKPhs+CNh0+LzwR8Gnxm4JPiMwWfBJ85uCo+k3AVfGbhYfhMw4PwmYf74XcE3A/P9TumDP9LK7R/AZR5YtPI66a6AAAAAElFTkSuQmCC";
const selected = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACeUlEQVRoQ93YMYvUQBQH8P8/e5u9jyHYiJ/AQlfZUyvBSsVCsBNFP4AgaGkrCHeNbCHCFbZe5WZze52yWFiItac2d8KqCPHOPMme0b2QzU4mmWRiuoRhmN+8N28mQ/wHT9Dt3WfTHRECxINGQ2JEFIzGQmYRjYUkEY2EpCEaB5mHaBQkC9EYyCJEIyAqCOshqgirIXkQ1kLyIqyE6CCsg+girIIUQVgDKYqwAlIGonZIWYhaIWUiaoOUjagFYgJROcQUolKISURlENOISiBVIIxDqkIYhVSJMAYxgJi0gGv7DN9BWn1CTiaveku/aTSBYIjz7pb3Khp80F25Asq6UYhphADcO91bF+DyLIRAUFpEqkAE3ZVVUm6kRGOnFEidiIOFzreFIfMQIvhEyhrBUwKcS85ixvtkdk1E6TQvEnEfDvC8ECQrEhLKheWt4QsBnL0zvSciuK6AyY2I+nSIu9qQhelEXu34g2l1UcRoIaap5cgJLchCxMHovxDOWXf08o0CRhsB8IO7OTiSG6KEiHNIDVMAMZ2wh52Rly+1ciHUMMUQQOC2cJSe91E5IlqIbMwj/MLTeMdWqU7JYiHA6vKmd0v5rFUIMQczOygdBIGd9hKPcTDYVYKUgsjA6CCm3c1UxYWQUhEpGF0EBWvuyLuZOG+lb1NGEP8wXwn0QRzPuetHPWy4DC/S9/cXQowiFLb3jCYb7vfJJY7HP1IOjoc/2YqI0qnthHeSkYhHf6j8WorYbZG3l/4cd+ZF6y/ENkT0sxQK+p0278UlNisrpxDLENsgnrkIH9P3t1WXFGtDCH6S+AbgM8n3kHAsDrz2cPiaQKgKiNv9BlcDiOYMSuUfAAAAAElFTkSuQmCC";
const edit = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAADN0lEQVRYR83ZS08TURQH8P+Z0g40BPUD6NoQNSaK3UCnHYgJsZ/Ax5IYIvERcSWLRuJGoq4UjS5kwSdAJWpapzUsQKOGBPaGaDTBaOQ5M2WOuWX6oBQo05mB2bVz7z2/nnunufcMoeLi7m7ZXDYuM/gCgFYAzZVtvPxMwAIzZokwGpz/9ZRmZgwRj8qDLkejhwPU8BLACS8xtY5NoK/BACconf5ehK5nUp/ifYIs/Jg8dv5npAg1Yup1Zjy0G+gSYWAR1vNDmva31gy40Y5jsYM5ph4LNAhAtqf9agmqqCKbbeKGRNQf1FL33QjsdAxTid+yQPfy/RmTRageVZdACIvvQ6vyAZoc/+c0iBv9RGYNlv7YGV3IQxlJyVCya3YAS86kA24Eq3UMM9bV3mBJ3yj7dq68j66oXFqrAppMSsZ7/6EMSIaivgBwSfwtBXOBozTx7kcBty+gNnIEwMVi1shqC2nap62hPk99dSQ9Cmmpvu2n3kdoNSQDw3ImfYXE41J2bZ56n6C7QQrvnkCrTjfocTCT6qvM5J6tUSdI3zPqFOkrtB6kb9B6kb5A3UB6DnUL6SnUTaRnULeRnkC9QLoO9QrpKtRLpGtQr5GuQAXSVNQRLt/07rDBqPVY4to2zy9k9Yzu4sykR9VBEAZKh67tt2pOMunKmUlX1DEACTEYeTDdrp1C9Y7OVgSsO2BpKpRJDW216a0nk3u2cXaK3tVxmTs6W03iXkviJqcBa+pn0QoxDcsfUrOO1qiuxL8AdLKmYHU2IuBzKJM+5RCqvgFwtk5DTd0l4HUwkz63JdT+z1oC7CJZTm+hiYkF8f3vSKSlWQ4nCJKnUy8RLwfIGiNNWxRxqxbJxA1DiX9k0Ol8I9DNxkzqQU1p8KiRGVP7LcaQPfxUWX00foNBBdwqg27LudVnhcx65Nk0LEe6W3JNRo/FfLdUyKVrpdJ4LNZosiSKuccrelt+Ie04UkW86VBYPrPhZcNKe9cRKbD2CqBjPuOqhiNgOse5RDibndsAtRdxo8nUC+A8g8Trm3wV2q+LAPFQz4JoNNgUekLj47qIvQlaCRLVaL+Q66Bk1aW2I9RP5Hax/gPHIW2odGS5VgAAAABJRU5ErkJggg==";
const conserve = 'data:image/png;base64,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';
const circular = "data:image/png;base64,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";
const extend = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAAeCAYAAAB0ba1yAAAAaElEQVRYR+2XwQ0AIAjEZEmGZEmNPEyII7Rs0OtpIBZ04nJX1SbxZ2YIrnFAAq/qANYPsd84cQSnWde4xiEJsKvurg6puUcKtuqQhg9M9q+ucVACVh0ku1E1jjSOXWAEh/TdIwUiemAeGX4wH2sIJK8AAAAASUVORK5CYII=";
const verificationCode = 'data:image/png;base64,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';
const loginPhone = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAAXNSR0IArs4c6QAAAf5JREFUWAntmUtOAkEQhquAGXQL0ahBj6DegAmsOACJ7lx5A40xMcZHjNEbuHIlJhyAFZPhCF7BB650qwxK2T0GmAWZ6rGbGJLuhKSGrvr755tiUw1g13QJoIo8ebVSH3tXNMAyAK2o1KjnYBeBAicL++j7L1wdazgyS+EDARU4MZ19RHxzwN3EoPWcpJNJ2pR7fQivp21WnkNERfkWZZy0ckmbck+Y9UY5CJcurJ1gcPs5+k4jIG9nLqSnI3HKoZQRLedxcixh4XhpKOIuFE9NmZWaUstdLJwP9YXl5XE8OeINx+qw2fyIPRoJ02qmMmzEoaaINawJkC23hFlEmgmWsCZAttwSZhFpJljCmgDZckuYRaSZYAlrAmTLLWEWkWaCJawJkC23hFlEmgkzR5gdpMSB9MoVij//RzxzhGfOcKqWyHd8dtr5lzZJ02qpDKuY+apUat8DuJG52Qzs5ny/pVKnmmO8JSKzBCUxRCwNjauaUckzbljlUJ2cVIapXp/nDpNtAAjP8hPFTIGKZlyC/RP1ytXueG6LFy6unpmaEUcDbXg8Fu1z8GsKX/OdduIdCms49KoNMc7fiv/KacXinuPeDdrbSfpsS4iLkj0EfE8SMbEnz5BncVqsYXmr42RpXbyKOzHkF+1heolrrww0HHQ3uBsk0ydbvUkEfgBCV3vTGShZVAAAAABJRU5ErkJggg==';
const flow = 'data:image/png;base64,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';
const voice = 'data:image/png;base64,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';
const upArrow = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAASCAYAAAA6yNxSAAABBElEQVRIS7WWMQ6CMBSG2zB7Ik9AYuJACIsLE7NO6gHkLJQDmLA7eBoG0oREkmfagCnKg7YPO/f1+/r3NS1nnqMsy5sqjeP46rmELuM+xQoOABe9AOc5RcJZwIQP8hQJJ4EpOFXCWmAOTpGwEkDgTQ/emH3kehyLAhg8CIKw6zrVhHfGmLfErMAcPIqih9p5URRbigQqYAMfoqdITAq4wKkSPwIYHADCJEl07NjwSWIkQIH7JvERWAPuI6EF1oS7SvB/wF0kuBDizBjLjcZqbBrO9hVFGrOq63qXZdlLH4EhsSocSaKSUu7TNG1H/wEhxAkAnktXzXbn3/P6JI5SysMAV3PenC3tE+fK3rYAAAAASUVORK5CYII=';
const cancel = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAYlJREFUWAnFl01uwjAQRuMcoz1XcgN2QNl0XXICEHRHT5Ccq71G+n0Rjkzwz4wbq5GQgz0z79kgWzZ9379XVfVmjPlqmuaI9+LPMAzHcRw3YJ5q0A74vKLjAzLX0nQyyALnBe2hhsXNgW5LStxrby2Pq274xTNwxc+xt4FrtFj2C2a8c2p9tm27mwTYuQyA3WoSsdqzQCmJGJzMB4G1JVJwr8BaEhJ4UOCvElJ4VCBXQgNPCmgltHCRgFQiBy4WSEnkwlUCIQn2uzucdgN72gdYMPYsZ+vGauHMVQswySeRA2ctHsf/+qhXwDd7O4OcVVAJLOEAXgjHn3A+urUSYgEPfD6uY2N2dUKtSEACkMT4JJICmsKaWCsTFcgpqM0JCmgL2Rmx1eR6BTQFXLD7Lq3xJCBNdGGhd0mtBwFJQggW6k/VnAVSgSGApD9WexKIBUgAkpgQw2CAF0Xe1aZHu5XaPEnrkehqwDc2uSScDF73yLA8snkcn/H5wUC39n3Qgtz2LtGh7xvM0y8fJbAnC96O2QAAAABJRU5ErkJggg==';

module.exports = {
  rightArrow,
  dayMark,
  selected,
  edit,
  conserve,
  circular,
  extend,
  verificationCode,
  loginPhone,
  flow,
  voice,
  upArrow,
  cancel,
};
