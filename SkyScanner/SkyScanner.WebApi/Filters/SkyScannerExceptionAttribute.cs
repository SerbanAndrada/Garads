using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http.Filters;
using System.Net;
using System.Net.Http;
using SkyScanner.Services.Exceptions;

namespace SkyScanner.WebApi.Filters
{
    public class SkyScannerExceptionAttribute: ExceptionFilterAttribute
    {
        public override void OnException(HttpActionExecutedContext ctx)
        {
            //base.OnException(ctx);
            var responseMessage = string.Format(
                "Error thrown by execution logic. Message: {0}", ctx.Exception.Message);
            if(ctx.Exception is EntityNotFoundException)
            {
                ctx.Response = ctx.Request.CreateResponse(HttpStatusCode.BadRequest, responseMessage);
            }
            else
            ctx.Response = ctx.Request.CreateResponse(HttpStatusCode.NotAcceptable, responseMessage);
        }
    }
}