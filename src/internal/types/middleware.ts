import { HTTPuppyRequest, HTTPuppyResponse } from '../types';

/**
 * @interface Cache Settings
 * @description All supported cache control options in camelcase
 * @member maxAge maximum age to keep a response as "fresh" after its etag is generated
 * @member sMaxAge maxAge for shared caches
 * @member noCache response can be stored in caches, but must be revalidated with origin before reuse
 * @member noStore caches of any kind (private or shared) should not store this response
 * @member noTransform any intermediary (regardless of whether it implements a cache) shouldn't transform the response contents
 * @member mustRevalidate response can be stored in caches and can be reused while fresh. If the response becomes stale, it must be validated with the origin server before reuse
 * @member mustUnderstand should store the response only if it understands the requirements for caching based on status code
 * @member proxyRevalidate response directive is the equivalent of must-revalidate, but specifically for shared caches only
 * @member immutable response directive indicates that the response will not be updated while it's fresh.
 * @member private response can be stored only in a private cache (e.g. local caches in browsers)
 * @member public can be stored in a shared cache
 * @member staleWhileRevalidate the cache could reuse a stale response while it revalidates it to a cache
 * @member staleIfError  cache can reuse a stale response when an origin server responds with an error (500, 502, 503, or 504)
 */
export type CacheSettings = {
	maxAge?: number; //maximum age to keep a response as "fresh" after its etag is generated
	sMaxAge?: number; //maxAge for shared caches
	noCache?: boolean; //response can be stored in caches, but must be revalidated with origin before reuse
	noStore?: boolean; //caches of any kind (private or shared) should not store this response
	noTransform?: boolean; //response can be stored in caches and can be reused while fresh. If the response becomes stale, it must be validated with the origin server before reuse
	mustRevalidate?: boolean; //response can be stored in caches and can be reused while fresh. If the response becomes stale, it must be validated with the origin server before reuse
	mustUnderstand?: boolean; //should store the response only if it understands the requirements for caching based on status code
	proxyRevalidate?: boolean; //response directive is the equivalent of must-revalidate, but specifically for shared caches only
	immutable?: boolean; //response directive indicates that the response will not be updated while it's fresh.
	private?: boolean; //response can be stored only in a private cache (e.g. local caches in browsers)
	public?: boolean; //can be stored in a shared cache
	staleWhileRevalidate?: boolean; //the cache could reuse a stale response while it revalidates it to a cache
	staleIfError?: boolean; // cache can reuse a stale response when an origin server responds with an error (500, 502, 503, or 504)
};

export const defaultCacheSettings: CacheSettings = {
	maxAge: 3600,
	mustRevalidate: true,
	public: true,
};

export function fromDefaultCacheSettings(
	settings: CacheSettings
): CacheSettings {
	return {
		...defaultCacheSettings,
		...settings,
	};
}

export type iExitHandler = undefined | (() => Promise<void>) | (() => void);
export type iHandlerType = (
	req: HTTPuppyRequest,
	res: HTTPuppyResponse
) => Promise<void> | ((req: HTTPuppyRequest, res: HTTPuppyResponse) => void);
export type UserMiddlewareOption = {
	href: string;
	handler: iHandlerType;
};
